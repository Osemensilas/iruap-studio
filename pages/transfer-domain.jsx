import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

const TransferDomain = () => {

    const [activeDomain, setActiveDomain] = useState(false);
    const [error, setError] = useState('');
    const [domain, setDomain] = useState('');
    const [authCode, setAuthCode] = useState('');
    const [topError, setTopError] = useState('');

    const navigate = useRouter();

    const cancelClicked = () => {
        setActiveDomain(false);
    }

    const autoCheck = async () => {
        try{
            let url = "https://backend.iruhost.com/api/domain-check";

            const response = await axios.post(url, {action: domain}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            console.log(response.data);

            if (response.data.rrpCode !== 211){
                setError("Domain must be registered");
                return;
            }

            setError('');

            
            const today = new Date();

            const threeMonthsAgo = new Date();
            threeMonthsAgo.setMonth(today.getMonth() - 3);

            setActiveDomain(true);

        }catch(error){
            console.log("Error checking domain status: ", error);
        }
    }

    useEffect(() => {
        autoCheck();
    },[])

    const checkDomain = async () => {
        
        autoCheck();
    }

    const addToCart = async (e) => {
        if (authCode === ''){
            setTopError("Auth Code required");
        }else{
            setTopError('');

            try{
                const url = "https://backend.iruhost.com/api/transfer-to-cart";

                const response = await axios.post(url, {'action': domain, 'auth': authCode}, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })

                if (response.data.status === 'successful'){
                    navigate.push('/cart');
                }
            }catch(error){
                console.log("Error sending data: ", error);
            }
        }
    }

    return ( 
        <>
        <Head>
            <title>Domain Tranfer - IruHost</title>
        </Head>
        <section className="h-[calc(100vh-100px)] w-screen bg-accent flex items-center justify-center flex-col">
            <h2 className="text-3xl font-bold">Transfer Domain</h2>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-[500px] cards-shadow my-10 px-5 py-10">
                <header className="h-max w-full mb-5">
                    <h3>Transfer now to extend your domain by 1 year!*</h3>
                </header>
                <div className={`h-max w-full bg-danger text-center text-accent py-2 rounded mb-2
                    ${error ? "block" : "hidden"}
                    `}>{error}</div>
                <div className="h-max w-full flex flex-col">
                    <label htmlFor="domain" className="h-max w-full my-3">Domain Name</label>
                    <input type="text" id="domain" name="domain" value={domain} onChange={(e) => setDomain(e.target.value)} className="px-5 h-10 w-full border border-grey rounded" placeholder="Enter domain name" />
                </div>
                <div className="h-max w-full mt-5">
                    <button onClick={checkDomain} className="h-max w-full bg-primary rounded py-2">Order Now</button>
                </div>
            </form>
            <p>* Excludes certain TLDs and recently renewed domains</p>
        </section>
        <section className={`h-screen w-screen custom-fixed flex items-center justify-center
            ${activeDomain ? "flex" : "hidden"}
            `}>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-[500px] cards-shadow my-10 px-5 py-10 relative z-50 bg-accent">
                <header className="h-max w-full pb-10 mb-3 border-b border-grey">
                    <h2 className="text-2xl font-thin">Authorization Code</h2>
                </header>
                <div className={`h-max w-full bg-danger text-center text-accent py-2 rounded mb-2
                    ${topError ? "" : "hidden"}
                    `}>Error</div>
                <p className="text-sm">To initiate a transfer you will need to obtain the authorization code from your current registrar. These can often be referred to as either the epp code or auth code. They act as a password and are unique to the domain name.</p>
                <div className="h-max w-full flex flex-col">
                    <label htmlFor="auth" className="h-max w-full my-3">Authorization Code</label>
                    <input type="text" name="auth" value={authCode} onChange={(e) => setAuthCode(e.target.value)} className="px-5 h-10 w-full border border-grey rounded text-sm" id="auth" placeholder="Epp Code / Auth Code" />
                </div>
                <div className="h-max w-full mt-5 flex items-center gap-5">
                    <button onClick={addToCart} className="h-max w-max bg-primary rounded py-2 px-5">Confirm</button>
                    <button onClick={cancelClicked} className="h-max w-max bg-transparent border border-grey rounded py-2 px-5">Cancel</button>
                </div>
                <input type="text" name="hiddenDomain" value={domain} onChange={(e) => setDomain(e.target.value)} hidden />
            </form>
        </section>
        </>
     );
}
 
export default TransferDomain;