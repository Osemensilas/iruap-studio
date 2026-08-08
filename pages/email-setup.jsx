import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocation } from "@/components/LocationContext";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const EmailSetup = () => {

    const navigate = useRouter();

    const { locationDetail } = useLocation();

    const searchParams = useSearchParams();

    const emailPackage = searchParams.get('package');

    const [selectedPackage, setSelectedPackage] = useState(null);
    const [currency, setCurrency] = useState("NGN");
    const [domain, setDomain] = useState("");
    const [error, setError] = useState("");
    const [emailPrice, setEmailPrice] = useState(0);
    const [nairaValue, setNairaValue] = useState(0); 

    useEffect(() => {
        if(!emailPackage) return;

        if (emailPackage === 'Starter') {
            setSelectedPackage('Starter');
            setEmailPrice(7.23);
        }

        if (emailPackage === 'Professional') {
            setSelectedPackage('Professional');
            setEmailPrice(11.39);
        }

        if (emailPackage === 'Premium') {
            setSelectedPackage('Premium');
            setEmailPrice(14.99);
        }
    },[selectedPackage, emailPackage])

    const addToCart = async () => {

        if (domain === "") {
            setError("Domain name is required");
            return;
        }

        setError("");
        
        let url = "https://backend.iruhost.com/api/add-to-cart-email";

        try{
            const response = await axios.post(url, {package: selectedPackage, currency: currency, domain: domain, amount: currency === "NGN" ? emailPrice * nairaValue : emailPrice}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            console.log(response.data);

            if (response.data.status === 'success'){
                navigate.push('/cart');
            }

            if (response.data.status === 'error'){
                setError("Error Adding to Cart");
            }
        }catch(err){
            console.log("Error sending data to cartd: ", err);
        }
    }

    useEffect(() => {
        async function getNairaValue() {
            try {
                const url = "https://backend.iruhost.com/api/get-naira";
                const response = await axios.get(url, {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                });
    
                const { status, value } = response.data;
                if (status === "success") {
                    setNairaValue(value);
                }
            } catch (err) {
                console.log("Error retrieving naira value:", err);
            }
        }

        if (!locationDetail) return;

        if(locationDetail && locationDetail !== "NG"){
            setCurrency("USD");
        }else{
            setCurrency("NGN");
        }

        getNairaValue();
    }, [locationDetail]);

    return ( 
        <>
        <section className="sm:min-h-[calc(100vh-120px)] min-h-screen h-max w-screen bg-background flex flex-col gap-4 sm:flex-row pb-20">
            <div className="h-full w-full sm:w-[50%] px-10">
                <div className="h-max w-full flex flex-col gap-5 mb-10">
                    <h2 className="text-xxl font-bold text-accent">Email Account Details</h2>
                    <p className="text-sm text-accent">Enter the details for your professional email account</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-[85%] flex flex-col gap-4">
                    <div id="error" className={`bg-danger text-center text-accent py-2 px-4 rounded w-full h-max mb-2
                        ${error ? "block" : "hidden"}
                        `}>
                        {error}
                    </div>
                    <div className="h-max w-full gap-4 flex flex-col">
                        <label htmlFor="domain" className="text-base text-accent">Domain Name</label>
                        <div className="h-max w-full flex items-center">
                            <div className="h-10 w-10 border border-grey bg-grey rounded-l flex items-center justify-center">
                                <i className="fa fa-globe text-accent"></i>
                            </div>
                            <input type="text" name="domain" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="example.com" className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded-r px-2 bg-transparent" />
                        </div>
                        <p className="text-sm text-grey">Enter your domain name</p>
                    </div>
                    <button onClick={addToCart} className="w-full h-10 flex items-center justify-center bg-btns text-text rounded bg-primary">Add to Cart</button>
                    <div className="h-max w-full mt-10 flex items-center gap-2">
                        <p className="text-sm text-accent">Don't have a domain name?</p>
                        <Link href="/domain" className="text-primary text-sm">Get one here</Link>
                    </div>
                </form>
            </div>
            <div className="h-full w-full sm:w-[50%] sm:px-10 px-5 py-5 sm:py-10">
                <div className="relative h-80 w-80 mb-10">
                    <Image src="/email-with-yellow-envelope.png" alt="Email Image" className="object-fill" fill />
                </div>
                <h2 className="text-grey text-3xl my-10">Why Professional Email?</h2>
                <div className="flex flex-col w-full h-max gap-4">
                    <div className="flex h-max w-full items-start gap-3">
                        <div className="h-20 w-20 flex items-center justify-center">
                            <i className="fa fa-envelope text-accent text-xl"></i>
                        </div>
                        <div className="">
                            <h2 className="text-xl text-accent font-bold">Build Trust & Credibilty</h2>
                            <p className="text-sm text-accent">Use your domain name for professional communication.</p>
                        </div>
                    </div>
                    <div className="flex h-max w-full items-start gap-3">
                        <div className="h-20 w-20 flex items-center justify-center">
                            <i className="fa fa-shield text-accent text-xl"></i>
                        </div>
                        <div className="">
                            <h2 className="text-xl text-accent font-bold">Enhanced Security</h2>
                            <p className="text-sm text-accent">Advanced spam protection, virus filtering, and secure email delivery.</p>
                        </div>
                    </div>
                    <div className="flex h-max w-full items-start gap-3">
                        <div className="h-20 w-20 flex items-center justify-center">
                            <i className="fa fa-desktop text-accent text-xl"></i>
                        </div>
                        <div className="">
                            <h2 className="text-xl text-accent font-bold">Access Anywhere</h2>
                            <p className="text-sm text-accent">Access your email from any device, anytime, anywhere.</p>
                        </div>
                    </div>
                    <div className="flex h-max w-full items-start gap-3">
                        <div className="h-20 w-20 flex items-center justify-center">
                            <i className="fa fa-clock-o text-accent text-xl"></i>
                        </div>
                        <div className="">
                            <h2 className="text-xl text-accent font-bold">24/7 Support</h2>
                            <p className="text-sm text-accent">Our support team is available 24/7 to help you whenever you need us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default EmailSetup;