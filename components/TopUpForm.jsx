import axios from "axios";
import { useState, useEffect } from "react";

const TopUpForm = () => {

    const [totalAmount, setTotalAmount] = useState('');
    const [error, setError] = useState('');
    
    useEffect(() => {
        const script = document.createElement('script');
        
        script.src = "https://checkout.flutterwave.com/v3.js";
        script.async = true;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    },[])

    const topUp = async (e) => {

        e.preventDefault();

        let amountVal = /^[0-9||.]+$/;

        if (!amountVal.test(totalAmount)){
            setError("Invalid amount");
            return;
        }else{
            setError("");
            try{

                let url = "https://backend.iruhost.com/api/cart-session";

                const response = await axios.get(url, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })

                console.log(response.data);

                if (response.data.success === true){
                    const flutterEmail = response.data.user.email;
                    const flutterName = response.data.user.name;
                    const flutterUserId = response.data.user.user_id;
                    const pbk = response.data.pbk;
                    const txRef = response.data.ref;

                    FlutterwaveCheckout({
                        public_key: pbk,
                        tx_ref: txRef,
                        amount: totalAmount,
                        currency: 'NGN',
                        payment_options: 'card, mobilemoneyghana, ussd',
                        redirect_url: 'https://backend.iruhost.com/top-up-checkout?amount=' + totalAmount,
                        meta: {
                            consumer_id: flutterUserId,
                            consumer_mac: txRef,
                        },
                        customer: {
                            email: flutterEmail,
                            name: flutterName,
                        },
                        customizations: {
                            title: 'Iruap Studio',
                            description: 'Iruap Product Payment',
                            logo: 'https://backend.iruhost.com/uploads/logo.png',
                        },
                    });
                }
            }catch(error){
                console.log("Error calling flutterwave: ", error);
            }
        }
        
    }

    return ( 
        <>
        <form action="https://checkout.flutterwave.com/v3/hosted/pay" method="POST" className="px-10 rounded w-full sm:w-[500px] h-max bg-accent relative z-50">
            <header className="h-max w-full border-b border-grey py-10 mb-3">
                <h2 className="text-2xl">Account Top Up</h2>
            </header>
            <div className={`bg-danger text-accent rounded py-2 text-center
                ${error ? "" : "hidden"}
                `}>{error}</div>
            <div className="h-max w-full my-3">
                <label htmlFor="amount" className="text-base">Amount</label>
                <input type="text" id="amount" name="amount" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} className="h-10 w-full border border-grey rounded px-4" />
            </div>
            <div className="h-max w-full py-3">
                <button onClick={topUp} className="w-full bg-primary rounded text-text py-2">Submit</button>
            </div>
        </form>
        </>
     );
}
 
export default TopUpForm;