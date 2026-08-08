import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useLocation } from "@/components/LocationContext";

const SSLComponent = () => {

    const { locationDetail } = useLocation();

    const navigate = useRouter();
    const [nairaValue, setNairaValue] = useState(0);
    const [currency, setCurrency] = useState("NGN");

    const sslClicked = async (e) => {
        
        let productName = e.currentTarget.value;
        let price = e.currentTarget.parentElement.parentElement.children[2].value;

        try{
            let url = "https://backend.iruhost.com/api/add-to-cart-ssl";

            const response = await axios.post(url, {"product_name": productName, "price": price, "currency": currency}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true,
            })
            
            if (response.data.status === "success"){
                navigate.push("/cart");
            }else{
                navigate.push("/error-page");
            }
        }catch(err){
            console.log("Error sending data: ", err);
        }
    }

    const formSubmitted = (e) => {
        e.preventDefault();
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
                const {status, value} = response.data;

                if (status === 'success'){
                    setNairaValue(value);
                }
            }catch(err){
                console.log("Error retrieving naira value: ", nairaValue);
            }
        }

        if(locationDetail && locationDetail !== "NG"){
            setCurrency("USD");
        }else{
            setCurrency("NGN");
        }
        getNairaValue();
    },[nairaValue, locationDetail])

    return ( 
        <>
        <form onSubmit={formSubmitted} className="h-max w-full grid grid-cols-1 sm:grid-cols-3 px-3 justify-center items-center">
            <div className="card border w-full mb-5 sm:mb-10 rounded border-grey py-8 px-2 sm:w-[90%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">RapidSSL Certificate</h2>
                <p className="text-accent text-sm mb-4">Also called RapidSSL Standard DV! Secure your Site fast with this Simple & Easy Solution.</p>
                <input type="text" value={20.00 * nairaValue} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦<span>{locationDetail && locationDetail !== "NG" ? Number(20.00).toLocaleString() : Number(20.00 * nairaValue).toLocaleString()}</span><span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Domain Validated</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Immediate SSL Certificate issued 24/7</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Reissuance</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={sslClicked} value="RapidSSL Certificate" className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-10 border rounded border-grey py-8 px-3 sm:w-[90%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">RapidSSL Wildcard Certificate</h2>
                <p className="text-accent text-sm mb-4">Also called RapidSSL Wildcard DV! Quickly and economically secure one domain and unlimited subdomains.</p>
                <input type="text" value={ 124 * nairaValue} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦<span>{Number(124 * nairaValue).toLocaleString()}</span><span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Domain Validated</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Immediate SSL Certificate issued 24/7</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Reissuance</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={sslClicked} value="RapidSSL Wildcard Certificate" className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-10 border rounded border-grey py-8 px-3 sm:w-[90%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">DigiCert Secure Site</h2>
                <p className="text-accent text-sm mb-4">Powerful OV SSL encryption issued in just minutes.</p>
                <input type="text" value={400 * nairaValue} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦<span>{Number(400 * nairaValue).toLocaleString()}</span><span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Organization Validation</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Reissuance</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Site Seal: Dynamic, Digicert Seal</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Server Licensing: Unlimited</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Instant Issuance</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={sslClicked} value="DigiCert Secure Site" className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card border w-full mb-5 sm:mb-10 rounded border-grey py-8 px-2 sm:w-[90%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">DigiCert Secure Site Pro</h2>
                <p className="text-accent text-sm mb-4">A fast, affordable, flexible SSL solution for subdomains from the world's PKI leader, DigiCert.</p>
                <input type="text" value={949 * nairaValue} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦<span>{Number(949 * nairaValue).toLocaleString()}</span><span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Organization Validation</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Reissuance</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Server Licensing: Unlimited</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Site Seal: Dynamic, Digicert Seal</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Wildcard</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Instant Issuance</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={sslClicked} value="DigiCert Secure Site Pro" className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-10 border rounded border-grey py-8 px-3 sm:w-[90%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">DigiCert Secure Site EV</h2>
                <p className="text-accent text-sm mb-4">High-assurance, premier SSL paired with advanced website security features.</p>
                <input type="text" value={ 1199 * nairaValue} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦<span>{Number(1199 * nairaValue).toLocaleString()}</span><span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Extended Validation</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Reissuance</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Highest Level of Validation</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Server License</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>CertCentral® Mgmt. Platform</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Site Seal: Dynamic, Digicert Seal</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Priority Support</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Malware Scan: VirusTotal</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Priority Validation</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Instant Issuance</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={sslClicked} value="DigiCert Secure Site EV" className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-10 border rounded border-grey py-8 px-3 sm:w-[90%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">GeoTrust QuickSSL</h2>
                <p className="text-accent text-sm mb-4">Fast, affordable domain authenticated encryption for a single domain.</p>
                <input type="text" value={ 100 * nairaValue} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦<span>{Number(100 * nairaValue).toLocaleString()}</span><span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Domain Validation</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Reissuance</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Dynamic Site Seal</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Server Licensing</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Instant Issuance</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={sslClicked} value="GeoTrust QuickSSL" className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-10 border rounded border-grey py-8 px-3 sm:w-[90%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">GeoTrust QuickSSL Premium</h2>
                <p className="text-accent text-sm mb-4">Also called GeoTrust Standard DV! Quickly secure your www or non-www domain with a recognized brand.</p>
                <input type="text" value={ 125 * nairaValue} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦<span>{Number(125 * nairaValue).toLocaleString()}</span><span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Domain Validation</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Reissuance</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Dynamic Site Seal</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Server Licensing: Unlimited</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Issuance Issuance</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={sslClicked} value="GeoTrust QuickSSL Premium" className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card border w-full mb-5 sm:mb-10 rounded border-grey py-8 px-2 sm:w-[90%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">GeoTrust True BusinessID</h2>
                <p className="text-accent text-sm mb-4">Also called GeoTrust True Business ID OV! Boost your encryption and trust with this popular certificate.</p>
                <input type="text" value={ 159 * nairaValue} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦<span>{ Number(159 * nairaValue).toLocaleString()}</span><span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Organization Validation</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Reissuance</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Verified Company Name</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Dynamic Site Seal</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Server Licensing</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Instant Issuance</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={sslClicked} value="GeoTrust True BusinessID" className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-10 border rounded border-grey py-8 px-3 sm:w-[90%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">GeoTrust True BusinessID Wildcard</h2>
                <p className="text-accent text-sm mb-4">Also called GeoTrust True Business ID OV Wildcard! Protect unlimited subdomains with a single SSL certificate.</p>
                <input type="text" value={ 699 * nairaValue} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦<span>{ Number(699 * nairaValue).toLocaleString()}</span><span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Organisation Validation</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Reissuance</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Dynamic Site Seal</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Server License</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Wildcard</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Instant Issuance</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={sslClicked} value="GeoTrust True BusinessID Wildcard" className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
        </form>
        </>
    );
}
 
export default SSLComponent;