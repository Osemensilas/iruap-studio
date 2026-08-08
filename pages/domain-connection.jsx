import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Head from "next/head"; 
import Loading from "@/components/Loading";
import { useLocation } from "@/components/LocationContext";

const DomainConnection = () => {

    const navigate = useRouter();
    const searchParam = useSearchParams();

    const hostingName = searchParam.get('hosting');
    const hostingPrice = searchParam.get('price');
    const hostingRenew = searchParam.get('billing');

    const [domainOption, setDomainOption] = useState("existing");
    const [existingDomain, setExistingDomain] = useState('iruap');
    const [purchaseOption, setPurchaseOption] = useState('new');
    const [searchPresent, setSearchPresent] = useState(false);
    const [searchedDomain, setSearchedDomain] = useState('');
    const [searchedPrice, setSearchedPrice] = useState('');
    const [searchedRenew, setSearchedRenew] = useState('');
    const [messageColor, setMessageColor] = useState('neutral');
    const [domainInCart, setDomainInCart] = useState([]);
    const [selectedDomain, setSelectedDomain] = useState('');
    const [connectedDomain, setConnectedDomain] = useState('');
    const [cartDomainName, setCartDomainName] = useState('-');
    const [domainPrice, setDomainPrice] = useState('-');
    const [domainRenewPrice, setDomainRenewPrice] = useState('-');
    const [totalAmount, setTotalAmount] = useState(0);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [nairaValue, setNairaValue] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [existingIruapDomain, setExistingIruapDomain] = useState([]);
    const [currency, setCurrency] = useState("NGN");
    const [updatedHostingPrice, setUpdatedHostingPrice] = useState(0);

    const domainSearchRef = useRef(null);
    const existSearchRef = useRef(null);
    const connectDomainRef = useRef(null);

    useEffect(() => {
        if (!hostingName && !hostingRenew) return;

        if (hostingName === "Lite"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(0);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(1350);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(5500);
            }
        }

        if (hostingName === "Essential"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(0);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(2295);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(7650);
            }
        }

        if (hostingName === "Standard"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(0);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(3240);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(10800);
            }
        }

        if (hostingName === "Plus"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(0);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(4320);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(14400);
            }
        }

        if (hostingName === "Starter"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(2400);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(6480);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(21600);
            }
        }

        if (hostingName === "Growth"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(3400);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(9450);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(31500);
            }
        }

        if (hostingName === "Pro"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(5000);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(13500);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(45000);
            }
        }

        if (hostingName === "Enterprise"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(9000);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(24300);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(81000);
            }
        }

        if (hostingName === "reseller_starter"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(4500);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(12150);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(40500);
            }
        }

        if (hostingName === "reseller_growth"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(7500);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(20250);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(67500);
            }
        }

        if (hostingName === "reseller_pro"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(10000);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(27000);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(90000);
            }
        }

        if (hostingName === "reseller_enterprise"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(15000);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(40500);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(135000);
            }
        }

        if (hostingName === "wp_starter"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(1500);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(4050);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(13500);
            }
        }

        if (hostingName === "wp_growth"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(3500);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(9450);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(31500);
            }
        }

        if (hostingName === "wp_pro"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(5500);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(14800);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(59400);
            }
        }

        if (hostingName === "wp_ecommerce"){
            if (hostingRenew === "month"){
                setUpdatedHostingPrice(8200);
            }

            if (hostingRenew === "quarter"){
                setUpdatedHostingPrice(22140);
            }

            if (hostingRenew === "year"){
                setUpdatedHostingPrice(73800);
            }
        }
    },[hostingName, hostingRenew])

    const existing = () => {
        setDomainOption("existing");
        setSearchPresent(false);
        
        domainSearchRef.current.value = '';
    }

    const newDomain = () => {
        setDomainOption("new");
        setSearchPresent(false);

        existSearchRef.current.value = '';
    }

    const existingDomainClick = () => {
        setExistingDomain('iruap');
        setDomainPrice('-');
        setDomainRenewPrice('-');
        cartTotalPrice()
    }

    const thirdDomainClicked = () => {
        setExistingDomain('thirdParty');
        setDomainPrice('-');
        setDomainRenewPrice('-');
        cartTotalPrice()
    }

    useEffect(() => {
        async function getNairaValue(){
            try{
                let url = "https://backend.iruhost.com/api/get-naira";

                const response = await axios.get(url, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true,
                })

                console.log(response.data);
                
                const {status, value} = response.data;

                if (status === 'success'){
                    setNairaValue(value);
                }
            }catch(err){
                console.log("Error retrieving naira value: ", nairaValue);
            }
        }

        setCurrency("NGN")

        getNairaValue();
    },[nairaValue])

    //Getting the domain names already in cart
    const alreadyClick = async () => {
        setPurchaseOption('cart');

        try{
            let url = "https://backend.iruhost.com/api/cart-domain";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            if (response.data.status === 'success'){
                setDomainInCart(response.data.items);
            }else{
                setDomainInCart([]);
            }
        }catch(err){
            setSearchedDomain("Error retrieving data. Check network connection");
            setMessageColor('error');
            setSearchPresent(true);
        }
    }

    const newPurchaseClicked = () => {
        setPurchaseOption('new');
    }

    const trashClicked = (e) => {
        e.preventDefault();
    }

    const searchNewDomainName = async (e) => {
        const domainName = e.currentTarget.value;

        if (e.currentTarget.value.length > 0){
            try{
                let url = "https://backend.iruhost.com/api/single-search";

                const response = await axios.post(url, {action: domainName}, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials:true
                })

                console.log(response.data);
                
                if (response.data.status === 'success'){
                    
                    if (response.data.rrpCode === 210){

                        const price = response.data.regPrice ;
                        const renew = response.data.renewPrice;
                        const name = response.data.requested_domain;

                        setSearchedDomain(name);
                        setSearchedPrice(price * nairaValue);
                        setSearchedRenew(renew * nairaValue);
                        setSearchPresent(true);
                        setMessageColor('success');
                        cartTotalPrice();
                    }else{
                        setSearchedDomain("Unavailable");
                        setSearchPresent(true);
                        setMessageColor('error');
                    }
                }else{
                    setSearchPresent(false);
                }
            }catch(err){
                setSearchPresent(true);
                setSearchedDomain("Check network connection");
                setMessageColor('error');
            }
        }else{
            setSearchPresent(false);
        }
    }

    useEffect(() => {
        if (selectedDomain){
            setSearchedDomain(selectedDomain);
            setSearchPresent(true);
            setMessageColor('success');
        }
        const selected = domainInCart.find(item => item.product_name === selectedDomain);

        if (selected){
            setDomainPrice(selected.amount);
            setDomainRenewPrice(selected.renew);
            cartTotalPrice()
        }
    }, [domainInCart, selectedDomain]);

    const cartDomainChanged = (e) => {
        setSelectedDomain(e.currentTarget.value);
    }

    const searchExistingDomain = async (e) => {

        let domainName = e.target.value;

        if (domainName.length > 0){
            setIsLoading(true);
            try{
                let url = "https://backend.iruhost.com/api/domain-check";

                const response = await axios.post(url, {action: domainName}, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })

                console.log(response.data);

                if (response.data.status === 'success'){

                    if (response.data.rrpCode === 211){
                        
                        const inputedDomain = response.data.requested_domain;

                        setSearchedDomain(inputedDomain);
                        setMessageColor('success');
                        cartTotalPrice()
                    }else{
                        setSearchedDomain("Domain do not exist");
                        setMessageColor('error');
                    }
                    setSearchPresent(true);
                }else{
                    setSearchPresent(false);
                }
                setIsLoading(false);
            }catch(err){
                setSearchPresent(true);
                setSearchedDomain("Error retrieving data. Check network connection");
                setMessageColor('error');
                setIsLoading(false);
            }
        }else{
            setSearchPresent(false);
        }
    }

    useEffect(() => {
        async function getIruapDomain() {
            try {
                let url = "https://backend.iruhost.com/api/get-iruap-domain";

                const response = await axios.get(url, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })

                if (response.data.status === 'success'){
                    setExistingIruapDomain(response.data.domains)
                }
            } catch (error) {
                console.log("Error retrieving iruap domain: ", error);
            }
        }
        getIruapDomain();
    }, [])

    const iruapExistingDomain = async (e) => {
        setSelectedDomain(e.currentTarget.value);
    }

    const connectDomainBtn = () => {

        let domainToConnect = "";

        if (domainOption === 'new'){
            if(purchaseOption === "new"){
                domainToConnect = searchedDomain;

                setDomainPrice(searchedPrice);
                setDomainRenewPrice(searchedRenew);
            }else{
                domainToConnect = searchedDomain;
            }
            setCartDomainName(domainToConnect);
        }else{
            if (existingDomain === "thirdParty"){
                domainToConnect = existSearchRef.current.value;
            }else{
                domainToConnect = selectedDomain;
            }
            setCartDomainName(domainToConnect);
        }
        cartTotalPrice()
    }

    useEffect(() => {
        let newDomainPrice = parseFloat(domainPrice);
        if (domainPrice === '-' || isNaN(newDomainPrice)) {
            newDomainPrice = 0;
        }

        let totalPrice = parseFloat(updatedHostingPrice) + newDomainPrice;
        setTotalAmount(parseFloat(totalPrice.toFixed(2)));
    }, [domainPrice, hostingPrice, updatedHostingPrice]);


    function cartTotalPrice(){
        let totalPrice = 0;
        let newDomainPrice = parseFloat(domainPrice);

        if (domainPrice === '-' || isNaN(newDomainPrice)) {
            newDomainPrice = 0;
        }

        totalPrice = parseFloat(updatedHostingPrice) + newDomainPrice;
        totalPrice = parseFloat(totalPrice.toFixed(2));
        setTotalAmount(totalPrice);
    }

    const addToCart = async () => {
        const addedDomainName = cartDomainName;
        const addedDomainPrice = domainPrice;
        const addedDomainRenew = domainRenewPrice;
        const domainOperation = domainOption;
        

        const formData = new FormData();

        formData.append("domainName", addedDomainName);
        formData.append("domainPrice", addedDomainPrice);
        formData.append("domainRenew", addedDomainRenew);
        formData.append("hosting", hostingName);
        formData.append("hostingPrice", updatedHostingPrice);
        formData.append("billing", hostingRenew);
        formData.append("domainOperation", domainOperation);
        formData.append("currency", currency);


        setIsLoading(true);
        try{
            const url = "https://backend.iruhost.com/api/add-to-cart-hosting";

            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            console.log(response.data);

            if (response.data.status === 'error'){
                setError(true);
                setErrorMsg(response.data.message);
                const errorContainer = document.querySelector('.error');
                errorContainer.scrollTo({ top: 0, behavior: 'smooth' });

                return;
            }

            navigate.push('/cart');
            setIsLoading(false);
        }catch(err){
            console.log("Error ading to cart: ", err);
            setIsLoading(false);
        }
    }

    return ( 
        <>
        <Head>
            <title>Connect Domain - IruHost</title>
        </Head>
        <section className="h-max w-screen bg-accent min-h-screen pt-[50px]">
            <form onSubmit={(e) => {e.preventDefault()}} className="h-max w-full px-5 sm:px-10">
                <input type="text" ref={connectDomainRef} value={connectedDomain} onChange={(e) => setConnectedDomain(e.target.value)} name="domainToConnect" hidden />
                <header className="h-max w-full">
                    <h2 className="text-center text-xl sm:text-3xl font-bold text-text mb-10">Domain Name Connection</h2>
                </header>
                <div className={`error h-max w-full bg-red-500 rounded py-2 px-4 text-accent text-center mb-10
                    ${error ? "" : "hidden"}
                    `}>
                    {errorMsg}
                </div>
                <div className="h-max w-full">
                    <div className="h-max w-full flex justify-center gap-5">
                        <div onClick={existing} className={`"h-max sm:w-[300px] w-[150px] rounded bg-accent cards-shadow p-10 cursor-pointer
                            ${domainOption === "existing" ? "border-text border-[1px]" : ""}
                            `}>
                            <div className="h-max w-full mb-10">
                                <div className={`domain-option relative h-[20px] w-[20px] border rounded-full border-grey cursor-pointer
                                    ${domainOption === "existing" ? "active" : ""}
                                    `}></div>
                            </div>
                            <div className="h-max w-full">
                                <h2 className="text-sm sm:text-2xl">Existing Domain</h2>
                            </div>
                        </div>
                        <div onClick={newDomain} className={`"h-max sm:w-[300px] w-[150px] rounded bg-accent cards-shadow p-10 cursor-pointer
                            ${domainOption === "new" ? "border-text border-[1px]" : ""}
                            `}>
                            <div className="h-max w-full mb-10">
                                <div className={`domain-option relative h-[20px] w-[20px] border rounded-full border-grey cursor-pointer
                                    ${domainOption === "new" ? "active" : ""}
                                    `}></div>
                            </div>
                            <div className="h-max w-full">
                                <h2 className="text-sm sm:text-2xl">Register New Domain</h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-max w-full mt-10 flex justify-center">
                        <div className={`h-max w-max flex flex-col
                            ${domainOption === "existing" ? "" : "hidden"}
                            `}>
                            <label htmlFor="existingDomain"  className="text-grey font-normal text-xl">Enter Domain Name</label>
                            <input type="text" ref={existSearchRef} onChange={searchExistingDomain} id="existingDomain" className={`h-12 w-[300px] sm:w-[450px] mt-5 px-3 text-text text-xl border border-grey rounded
                                ${existingDomain === "iruap" ? "hidden" : "block"}
                                `} placeholder="Enter your existing domain name" />
                            <select name="existingIruDomain" onChange={iruapExistingDomain} id="existingIruhostDomain" className={`h-12 w-[300px] sm:w-[450px] mt-5 px-3 text-text text-xl border border-grey rounded
                                ${existingDomain === "iruap" ? "block" : "hidden"}
                                `}>
                                <option value=""> --Select Domain-- </option>
                                {existingIruapDomain.map((domain, index) => (
                                    <option key={index} value={domain}>
                                    {domain}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={`h-max w-full sm:w-max flex flex-col
                            ${domainOption === "new" ? "" : "hidden"}
                            `}>
                            <label htmlFor="newDomain" className="text-grey font-normal text-xl">Enter Domain Name</label>
                            <input type="text" ref={domainSearchRef} id="newDomain" onChange={searchNewDomainName} className={`h-12 w-[300px] sm:w-[450px] mt-5 px-3 text-text text-xl border border-grey rounded
                                ${purchaseOption === "cart" ? "hidden" : "block"}
                                `} placeholder="Enter your new domain name" />
                            <select  name="cartDomain" value={selectedDomain} id="cartDomain" onChange={cartDomainChanged} className={`h-12 w-[300px] sm:w-[450px] mt-5 px-3 text-text text-xl border border-grey rounded
                                            ${purchaseOption === "cart" ? "block" : "hidden"}
                                            `}>
                                                <option value="">--Select Domain--</option>
                            {
                                domainInCart.length > 0 ? (
                                    domainInCart.map((domain, index) => (
                                            <option key={index} value={domain.product_name}>{domain.product_name}</option>
                                    ))
                                ) : (
                                        <option value="">No domain in cart</option>
                                )
                            }
                            </select>
                        </div>
                    </div>
                    <div className={`h-max w-full flex items-center justify-center mt-20
                        ${searchPresent ? "" : "hidden"}
                        `}>
                        <div className="h-max min-w-[500px] cards-shadow flex items-center justify-between gap-5 p-3">
                            <div className="h-max w-full">
                                <h2 className={`font-bold text-3xl flex items-center gap-3
                                    ${messageColor === 'error' ? "text-red-500" : ""}
                                    ${messageColor === 'success' ? "text-green-500" : ""}
                                    `}>
                                        <i className={`fa
                                            ${messageColor === 'error' ? "fa-times" : ""}
                                            ${messageColor === 'success' ? "fa-check-circle" : ""}
                                            `}></i>{searchedDomain}</h2>
                            </div>
                            <div className={`h-max w-full
                                ${messageColor === 'error' ? "hidden" : ""}
                                ${messageColor === 'success' ? "block" : ""}
                                `}>
                                <button onClick={connectDomainBtn} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">Connect Domain</button>
                            </div>
                        </div>
                    </div>
                    <div className={`h-max w-full flex mt-20 justify-center gap-5
                        ${domainOption === 'existing' ? "" : "hidden"}
                        `}>
                        <div onClick={existingDomainClick} className={`"h-max sm:w-[300px] w-[150px] rounded bg-accent cards-shadow p-10 cursor-pointer
                            ${existingDomain === "iruap" ? "border-text border-[1px]" : ""}
                            `}>
                            <div className="h-max w-full mb-10">
                                <div className={`domain-option relative h-[20px] w-[20px] border rounded-full border-grey cursor-pointer
                                    ${existingDomain === "iruap" ? "active" : ""}
                                    `}></div>
                            </div>
                            <div className="h-max w-full">
                                <h2 className="text-sm sm:text-2xl">Iruap Domain</h2>
                            </div>
                        </div>
                        <div onClick={thirdDomainClicked} className={`"h-max sm:w-[300px] w-[150px] rounded bg-accent cards-shadow p-10 cursor-pointer
                            ${existingDomain === "thirdParty" ? "border-text border-[1px]" : ""}
                            `}>
                            <div className="h-max w-full mb-10">
                                <div className={`domain-option relative h-[20px] w-[20px] border rounded-full border-grey cursor-pointer
                                    ${existingDomain === "thirdParty" ? "active" : ""}
                                    `}></div>
                            </div>
                            <div className="h-max w-full">
                                <h2 className="text-sm sm:text-2xl">Third Party Domain</h2>
                            </div>
                        </div>
                    </div>
                    <div className={`h-max w-full flex mt-20 justify-center gap-5
                        ${domainOption === 'new' ? "" : "hidden"}
                        `}>
                        <div onClick={alreadyClick} className={`"h-max w-[150] sm:w-[300px] rounded bg-accent cards-shadow p-10 cursor-pointer
                            ${purchaseOption === "cart" ? "border-text border-[1px]" : ""}
                            `}>
                            <div className="h-max w-full mb-10">
                                <div className={`domain-option relative h-[20px] w-[20px] border rounded-full border-grey cursor-pointer
                                    ${purchaseOption === "cart" ? "active" : ""}
                                    `}></div>
                            </div>
                            <div className="h-max w-full">
                                <h2 className="text-sm sm:text-2xl">Already in Cart</h2>
                            </div>
                        </div>
                        <div onClick={newPurchaseClicked} className={`"h-max w-[150] sm:w-[300px] rounded bg-accent cards-shadow p-10 cursor-pointer
                            ${purchaseOption === "new" ? "border-text border-[1px]" : ""}
                            `}>
                            <div className="h-max w-full mb-10">
                                <div className={`domain-option relative h-[20px] w-[20px] border rounded-full border-grey cursor-pointer
                                    ${purchaseOption === "new" ? "active" : ""}
                                    `}></div>
                            </div>
                            <div className="h-max w-full">
                                <h2 className="text-sm sm:text-2xl">New Purchase</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max flex items-center justify-center py-20">
                    <div className="cart-card w-full sm:w-[95%] cards-shadow rounded p-2">
                        <table className="h-max w-full">
                            <thead className="border-b border-grey h-max w-full">
                                <tr className="">
                                    <th className="py-3 px-1 sm:px-4 w-[25%] text-xs sm:text-base sm:w-[40%] text-left text-grey">Products/Option</th>
                                    <th className="py-3 px-1 sm:px-4 w-[25%] text-xs sm:text-base sm:w-[20%] text-left text-grey">Price/Cycle</th>
                                    <th className="py-3 px-1 sm:px-4 w-[25%] text-xs sm:text-base sm:w-[20%] text-left text-grey">Domain Name</th>
                                    <th className="py-3 px-1 sm:px-4 w-[25%] text-xs sm:text-base sm:w-[20%] text-left text-grey">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-1 sm:px-4 border-b">
                                        <ul>
                                            <li className="text-xs sm:text-sm font-bold">Web Hosting</li>
                                            <li className="text-xs sm:text-sm text-background">{hostingName}</li>
                                        </ul>
                                    </td>
                                    <td className="py-2 px-1 sm:px-4 border-b">
                                        <ul>
                                            <li className="text-xs sm:text-sm">
                                                <select name="" id="" className="h-10 w-24 outline-none rounded border border-grey px-2 mb-2">
                                                    <option value="yearly">₦{hostingPrice}/{hostingRenew}</option>
                                                </select>
                                            </li>
                                            <li className="text-xs text-grey">
                                                Renewal ₦<span>{hostingPrice}</span>/{hostingRenew}
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="py-2 px-1 sm:px-4 border-b">
                                        <ul>
                                            <li className="text-xs sm:text-sm font-bold">{cartDomainName}</li>
                                            <li className="text-xs sm:text-sm text-background">₦{!isNaN(domainPrice) ? Number(domainPrice).toLocaleString() : domainPrice}/year</li>
                                            <li className="text-xs text-grey">
                                                Renewal ₦<span>{!isNaN(domainRenewPrice) ? Number(domainRenewPrice).toLocaleString() : domainRenewPrice}</span>/year
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="py-2 px-1 sm:px-4 border-b">
                                        <ul>
                                            <li className="text-xs sm:text-base text-background">₦{Number(totalAmount).toLocaleString()}</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="w-full h-max pt-5 flex items-center justify-between text-sm">
                            <button onClick={addToCart} className="px-3 sm:px-10 py-3 border border-grey rounded">Add to Cart</button>
                            <button onClick={trashClicked} className=""><span></span></button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        <section className={`h-screen w-screen
            ${isLoading ? "block" : "hidden"}
            `}>
                <Loading />
        </section>
        </>
     );
}
 
export default DomainConnection;