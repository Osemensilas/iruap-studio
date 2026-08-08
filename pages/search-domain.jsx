import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "@/components/Loading";
import Head from "next/head";
import { useLocation } from "@/components/LocationContext";

const SearchDomain = () => {

    const { locationDetail } = useLocation();

    const searchParams = useSearchParams();

    const urlDomain = searchParams.get("domainName");

    const navigate = useRouter();

    const [domainOperation, setDomainOperation] = useState("register");
    const [domainOp, setDomainOp] = useState(true);
    const [domainName, setDomainName] = useState('');
    const [searchedDomain, setSearchedDomain] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [messageColor, setMessageColor] = useState('neutral');
    const [domainPrice, setDomainPrice] = useState(0);
    const [renewPrice, setRenewPrice] = useState(0);
    const [availableDoms, setAvailableDoms] = useState([]);
    const [nairaValue, setNairaValue] = useState(0); 
    const [isLoading, setIsLoading] = useState(false);
    const [currency, setCurrency] = useState("NGN");
    const [formData, setFormData] = useState({
        'cartDomainName':'',
        'cartDomainPrice':'',
        'cartDomainRenew':'',
        'cartDomainDuration':'',
        'currency': '',
    });
    const [searchText, setSearchText] = useState('');   

    useEffect(() => {
        async function getNairaValue(){
            try{
                let url = "https://backend.iruhost.com/api/get-naira";

                const response = await axios.get(url, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true,
                })
                const {status, value} = response.data;

                if (status === 'success'){
                    setNairaValue(value);
                }
            }catch(err){
                console.log("Error retrieving naira value: ", nairaValue);
            }
        }
        getNairaValue();
    },[nairaValue])

    useEffect(() => {
        
        if (urlDomain && domainName === ''){
             sendDomain(urlDomain);
         }
    },[urlDomain])

    const domOpReg = () => {
        setDomainOperation("register");
    }

    const domOpTrans = () => {
        setDomainOperation("transfer");
    }

    useEffect(() => {
        if (domainOperation === 'register'){
          setDomainOp(true);
        }else{
          setDomainOp(false);
        }
    },[domainOperation])

    const btnClicked = () => {
        sendDomain(domainName);
    }

    async function sendDomain(name) {
        setIsLoading(true);
        let url = "https://backend.iruhost.com/api/domain-search";

        const response = await axios.post(url, name, {
            headers: {
                "Content-Type" : "application/json",
            },withCredentials:true
        })

        const rawResponse = response.data;

        const jsonStrings = rawResponse.split(/(?=\{)/);

        const parsed = jsonStrings.map(str => JSON.parse(str));

        const unique = [];
        const seen = new Set();

        for (const item of parsed) {
            if (!seen.has(item.domain)) {
                seen.add(item.domain);
                unique.push(item);
            }
        }

        if (response.data.status === 'error'){
            setSearchedDomain(response.data.requested_domain);
            setSearchResult(response.data.response);
            setMessageColor('error');
            setIsLoading(false);
        }

        if (unique[0].status === 'success'){

            if (unique[0].rrpCode === 210){
                setSearchedDomain(unique[0].domain);
                setSearchResult(unique[0].domain);
                setDomainPrice(unique[0].regPrice);
                setRenewPrice(unique[0].renew);
                setSearchText(unique[0].message);
                setMessageColor('success');
            }else{
                setSearchedDomain(unique[0].domain);
                setSearchResult(unique[0].domain);
                setMessageColor('error');
            }
            setIsLoading(false);

            const available = unique.filter(item => item.rrpCode === 210);

            setAvailableDoms(available);
        }else{
            const available = unique.filter(item => item.rrpCode === 210);

            setAvailableDoms(available.slice(1));
        }
    }

    const handleChanged = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const addToCartSingle = async (domainName, domainPrice, domainRenew) => {
        
        setIsLoading(true);

         if (locationDetail && locationDetail !== "NG"){
            domainPrice = domainPrice;
            domainRenew = domainRenew;
            setCurrency("USD");
         }else{
            domainPrice = domainPrice * nairaValue;
            domainRenew = domainRenew * nairaValue;
            setCurrency("NGN")
         }

         try {
            
            let url = "https://backend.iruhost.com/api/add-to-cart";

            const response = await axios.post(url, {cartDomainName: domainName, 
                cartDomainPrice: domainPrice,
                cartDomainRenew: domainRenew,
                cartDomainDuration: 1,
                currency: currency
            }, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            const {status, message} = response.data;

            if (status === 'success'){
                navigate.push('/cart');
            }

            if (status === 'error'){
                if (message === 'Domain already exist'){
                    navigate.push('/cart');
                }else{
                    alert(message);
                    setIsLoading(false);
                }
            }
        } catch (error) {
            console.log("Error sending data: ", error);
        }
    }

    const addToCart = async (e) => {
        setIsLoading(true);
        const selectedDomain = e.currentTarget.value;

        const domainObject = availableDoms.find(domain => domain.domain === selectedDomain);

        if (!domainObject) return;

        const formData = new FormData();

        if (locationDetail && locationDetail !== "NG"){
            formData.append("cartDomainName", domainObject.domain);
            formData.append("cartDomainPrice", domainObject.regPrice);
            formData.append("cartDomainRenew", domainObject.renew);
            formData.append("cartDomainDuration", 1);
            formData.append("currency", "USD");
        }else{
            formData.append("cartDomainName", domainObject.domain);
            formData.append("cartDomainPrice", domainObject.regPrice * nairaValue);
            formData.append("cartDomainRenew", domainObject.renew * nairaValue);
            formData.append("cartDomainDuration", 1);
            formData.append("currency", "NGN");
        }

        try {
            
        let url = "https://backend.iruhost.com/api/add-to-cart";

            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            const {status, message} = response.data;

            if (status === 'success'){
                navigate.push('/cart');
            }

            if (status === 'error'){
                if (message === 'Domain already exist'){
                    navigate.push('/cart');
                }else{
                    alert(message);
                    setIsLoading(false);
                }
            }
        } catch (error) {
            console.log("Error sending data: ", error);
        }
    }

    const formSubmitted = (e) => {
        e.preventDefault();
    }
    
    return ( 
        <>
        <Head>
            <title>Domain Search - IruHost</title>
        </Head>
        <section className="h-max w-full bg-background py-10 px-3 sm:px-10 min-h-[calc(100vh-100px)]">
            <form onSubmit={formSubmitted} className="h-max w-full mt-10">
                <input name="cartDomainName" value={formData.cartDomain} onChange={handleChanged} type="text" hidden />
                <input name="cartDomainPrice" value={formData.cartDomainPrice} onChange={handleChanged} type="text" hidden />
                <input name="cartDomainRenew" value={formData.cartDomainRenew} onChange={handleChanged} type="text" hidden />
                <input name="cartDomainDuration" value={formData.cartDomainDuration} onChange={handleChanged} type="text" hidden />
                <div className="h-max w-full flex items-center justify-center mb-10">
                    <div className="h-max w-full sm:w-1/2">
                        <h2 className="text-3xl text-center font-bold mb-10 text-accent">Search Domain</h2>
                        <div className="h-max w-full flex items-center justify-center mb-10">
                            <div className="h-max w-max bg-grey rounded">
                            <button onClick={domOpReg} className={`py-3 pl-3 pr-1 text-xl
                                ${domainOp ? "bg-primary rounded-l" : "opacity-50"}
                                `}>Register</button>
                            <button onClick={domOpTrans} className={`py-3 pr-3 pl-1 text-xl
                                ${domainOp ? "opacity-50" : "bg-primary rounded-r"}
                                `}>Transfer</button>
                            </div>
                        </div>
                        <div className="w-full h-max flex items-center">
                            <input type="text" name="domain" value={domainName} onChange={(e) => setDomainName(e.target.value)} className="h-[45px] rounded-l w-[80%] outline-none text-base px-5" placeholder="Search domain name" />
                            <button onClick={btnClicked} className="h-[45px] w-[20%] bg-primary rounded-r text-text text-base">Search</button>
                        </div>
                    </div>
                </div>
                <div className={`w-full h-max bg-accent cards-shadow rounded p-10
                    ${messageColor === 'neutral' ? "hidden" : "block"}
                    `}>
                    <div className="h-max pb-5 mb-5 border-b boredr-grey flex items-center justify-start">
                        <div className="h-max w-max">
                            <h2 className="text-3xl flex font-semibold"><span className="mr-2"><i className="fa fa-search"></i></span><span>{searchedDomain}</span>{searchText}</h2>
                        </div>
                    </div>
                    <div className="h-max w-full">
                        <div className="h-max w-full flex flex-col sm:flex-row justify-between">
                            <div className="h-max w-max">
                                <div className={`text-3xl 
                                    ${messageColor === 'error' ? "text-red-500" : ""}
                                    ${messageColor === 'success' ? "text-green-500" : ""}
                                    `}><i className={`fa 
                                    ${messageColor === 'error' ? "fa-times" : ""}
                                    ${messageColor === 'success' ? "fa-check-circle" : ""}
                                    `}></i><span className="ml-3">{searchResult}</span></div>
                            </div>
                            <div className={`h-max w-max flex flex-col sm:flex-row items-start gap-10
                                ${messageColor === 'error' ? "hidden" : ""}
                                ${messageColor === 'success' ? "block" : "hidden"}
                                `}>
                                <div className="h-max w-max">
                                    <h2 className="text-xl font-normal mb-2">{locationDetail && locationDetail !== "NG" ? "$" : "₦"}<span>{locationDetail && locationDetail !== "NG" ? Number((domainPrice).toFixed(2)).toLocaleString() : Number((domainPrice * nairaValue).toFixed(2)).toLocaleString()}</span>/yr</h2>
                                    <h2 className="text-grey font-normal text-base">Renew at {locationDetail && locationDetail !== "NG" ? "$" : "₦"}{locationDetail && locationDetail !== "NG" ? Number((renewPrice).toFixed(2)).toLocaleString() : Number((renewPrice * nairaValue).toFixed(2)).toLocaleString()}/yr</h2>
                                </div>
                                <div className="h-max w-max">
                                    <button value={searchResult} onClick={() => addToCartSingle(searchResult, domainPrice, renewPrice)} className="px-2 py-2 bg-green-500 rounded text-xl text-accent"><span><i className="fa fa-shopping-cart"></i></span> Add to Cart</button>
                                </div>
                            </div>
                            <div className={`h-max w-max flex flex-col sm:flex-row items-start gap-10
                                ${messageColor === 'error' ? "block" : ""}
                                ${messageColor === 'success' ? "hidden" : ""}
                                `}>
                                <h2 className="text-3xl text-red-500 font-normal">Not Available</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`h-max w-full mt-10
                    ${availableDoms.length > 0 ? "" : "hidden"}
                    `}>
                    <table className="h-max w-full bg-accent rounded">
                        <thead className="border-b border-grey h-max w-full py-10">
                            <tr>
                                <th className="py-3 px-4 w-[60%] text-left text-text font-bold text-xl">Suggested Search</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                availableDoms.map((domain, index) => (
                                    <tr key={index} className="border-b border-grey flex flex-col sm:flex-row">
                                        <td className="py-2 px-4 w-[60%]">
                                            <h2 className="text-xl">{domain.domain} <span><i className="fa fa-check text-green-500"></i></span></h2>
                                        </td>
                                        <td className="py-2 px-4 w-full sm:w-[40%] flex justify-between">
                                            <div className="">
                                                <h2 className="text-base font-normal mb-2">{locationDetail && locationDetail !== "NG" ? "$" : "₦"}<span>{locationDetail && locationDetail !== "NG" ? Number((domain.regPrice).toFixed(2)).toLocaleString() : Number((domain.regPrice * nairaValue).toFixed(2)).toLocaleString()}</span>/yr</h2>
                                                <h2 className="text-grey font-normal text-sm">Renew at {locationDetail && locationDetail !== "NG" ? "$" : "₦"}{locationDetail && locationDetail !== "NG" ? Number((domain.renew).toFixed(2)).toLocaleString() : Number((domain.renew * nairaValue).toFixed(2)).toLocaleString()}/yr</h2>
                                            </div>
                                            <div className="h-max w-max">
                                                <button onClick={addToCart} value={domain.domain} className="text-base text-accent bg-green-500 py-2 px-5 rounded"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                                <p className="text-base text-red-500 font-bold hidden">Not available</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </form>
        </section>
        <div className={`h-screen w-screen custom-fixed
            ${isLoading ? "block" : "hidden"}
            `}>
            <Loading />
        </div>
        </>
     );
}
 
export default SearchDomain;