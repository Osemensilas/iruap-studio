import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Payment = () => {

    const [flutterName, setFlutterName] = useState('');
    const [flutterEmail, setFlutterEmail] = useState('');
    const [flutterUserId, setFlutterUserId] = useState('');
    const [pbk, setPbk] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const formRef = useRef(null);

    const checkoutClicked = async () => {
        try{
            let url = "https://backend.iruhost.com/api/cart-session";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
    
            })
            if (response.data.success === true){
                setPbk(response.data.pbk);
                setFlutterEmail(response.data.user.email);
                setFlutterName(response.data.user.name);
                setFlutterUserId(response.data.user.user_id);
                setTotalAmount(response.data.totalPrice);
            }else{
                navigate.push('/signin?redirect=cart');
                return;
            }

            formRef.current.submit();
        }catch(err){
            console.log("Error retrieving user: ", err);
        }
    }

    useEffect(() => {
        checkoutClicked();
    },[])

    return ( 
        <>
        <form ref={formRef} method="POST" action="https://checkout.flutterwave.com/v3.js">
            <input type="hidden" name="public_key" value={pbk} />
            <input type="hidden" name="customer[email]" value={flutterEmail} />
            <input type="hidden" name="customer[name]" value={flutterName} />
            <input type="hidden" name="redirect_url" value="https://backend.iruhost.com/checkout" />
            <input type="hidden" name="tx_ref" value={flutterUserId} />
            <input type="hidden" name="amount" value={totalAmount} />
            <input type="hidden" name="currency" value="NGN" />
            <input type="hidden" name="meta[source]" value="docs-html-test" />
        </form>
        </>
     );
}
 
export default Payment;