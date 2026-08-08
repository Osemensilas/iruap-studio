import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useLocation } from "@/components/LocationContext";

const EmailComponent = () => {

    const navigate = useRouter();

    const [hostingStarterPrice, setHostingStarterPrice] = useState(7.23);
    const [hostingGrowthPrice, setHostingGrowthPrice] = useState(11.39);
    const [hostingProPrice, setHostingProPrice] = useState(14.99); 
    const [nairaValue, setNairaValue] = useState(0); 
    const [currency, setCurrency] = useState("NGN");

    const emailClicked = async (name, price) => {
        navigate.push("/email-setup?package=" + name);
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
    
    setCurrency("NGN");
    getNairaValue();
    }, []);

    return ( 
        <>
        <div className="w-full h-max flex justify-center items-center mb-10">
            <div className="h-ma w-max flex items-center gap-3">
            <label htmlFor="billing" className="text-accent text-sm">Billing Cycle:</label>
            <select name="" id="billing" className="bg-transparent outline-none  border-none text-accent text-xl font-semibold">
                <option value="yearly" className="text-text">Yearly</option>
            </select>
            </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="h-max w-full flex flex-col sm:flex-row px-3 justify-evenly items-center">
            <div className="card border w-full mb-5 sm:mb-0 rounded border-grey py-8 px-2 sm:w-[30%] h-[160vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">Starter</h2>
                <input type="text" value={ Number(hostingStarterPrice * nairaValue).toLocaleString()} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingStarterPrice * nairaValue).toLocaleString()}<span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>1 mailbox</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>10 GB / Account</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Mobile apps - Webmail, iOS and Android apps</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Inbuilt Calendar and Contacts</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Email Forwarding</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Multi-account Support</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>50 Read Receipts</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Undo Send</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Block Sender</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Allowlist</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Email Aliases</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Auto-reply</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Advanced Anti-virus and Anti-spam</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={() => emailClicked("Starter", {
                        price: hostingStarterPrice * nairaValue})} value={"starter"} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-primary py-8 px-3 sm:w-[30%] h-[160vh] relative">
                <div className="absolute -top-5 left-0 h-max w-full flex items-center justify-center">
                    <span className="bg-primary text-accent rounded text-sm sm:text-base font-semibold py-2 px-4">Most Popular</span>
                </div>
                <h2 className="text-2xl font-semibold text-accent mb-4">Professional</h2>
                <input type="text" value={ Number(hostingGrowthPrice * nairaValue).toLocaleString()} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦{ Number(hostingGrowthPrice * nairaValue).toLocaleString()}<span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>5 mailbox</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>25 GB / Account</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Mobile apps - Webmail, iOS and Android apps</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Inbuilt Calendar and Contacts</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Email Forwarding</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Multi-account Support</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Read Receipts</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Undo Send</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Block Sender</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Allowlist</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Email Aliases</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Auto-reply</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Advanced Anti-virus and Anti-spam</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Turbo Search</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Email Templates</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>HTML in Composer</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Follow-up Reminders</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Priority Inbox</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Two-Factor Authentication</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Contact Groups</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Send Later</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Send as Alias</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={() => emailClicked("Professional", {
                        price: hostingGrowthPrice * nairaValue
                        })} value={"professional"} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[30%] h-[160vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">Premium</h2>
                <input type="text" value={ Number(hostingProPrice * nairaValue).toLocaleString()} hidden />
                <h2 className="text-3xl text-accent text-semibold mb-4">₦{ Number(hostingProPrice * nairaValue).toLocaleString()}<span className="text-base">/year</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>10 mailbox</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>50 GB / Account</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Mobile apps - Webmail, iOS and Android apps</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Inbuilt Calendar and Contacts</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Email Forwarding</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Multi-account Support</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Read Receipts</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Undo Send</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Block Sender</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Allowlist</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Email Aliases</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Auto-reply</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Advanced Anti-virus and Anti-spam</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Turbo Search</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Email Templates</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>HTML in Composer</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Follow-up Reminders</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Priority Inbox</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Two-Factor Authentication</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Contact Groups</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Send Later</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Send as Alias</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Email Campaigns</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Smart Write (Titan AI)</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Titan Bookings (Appointment booking)</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Advanced Tracking</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Signature Designer</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Email Designer</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Invoice Builder</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button onClick={() => emailClicked("Premium", {
                    price: hostingProPrice * nairaValue,
                    })} value={"premium"} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
        </form>
        </>
    );
}
 
export default EmailComponent;