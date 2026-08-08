import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { useLocation } from "@/components/LocationContext";

const Expiring = () => {

    const { locationDetail } = useLocation();

    const [products, setProducts] = useState([]);
    const [gateway, setGateway] = useState('flutterwave');
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        async function getUserProducts(){
            let url = "https://backend.iruhost.com/api/get-expiring";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
    
            })
            console.log(response.data);

            if (response.data.status === 'success'){
                setProducts(response.data.products);
                setTotalAmount(response.data.total_price);
            }
        }

        getUserProducts();
    },[])

    useEffect(() => {
        const script = document.createElement('script');
        
        script.src = "https://checkout.flutterwave.com/v3.js";
        script.async = true;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    },[])

    const payClicked = async (productId, amount) => {
        
        try{
            let url = "https://backend.iruhost.com/api/session-data";
            
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
                const pbk = response.data.user.pbk;
                const txRef = response.data.user.ref;
                const finalAmount = amount;

                if (gateway === 'flutterwave'){         
                    FlutterwaveCheckout({
                        public_key: pbk,
                        tx_ref: txRef,
                        amount: totalAmount,
                        currency: locationDetail && locationDetail !== "NG" ? "USD" : "NGN",
                        payment_options: 'card, mobilemoneyghana, ussd',
                        redirect_url: 'https://iruhost.com/renewal-success?product_id=' + productId + '&amount=' + finalAmount,
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
            }
        }catch(error){
            console.log("Error paying renewal: ", error);
        }
    }

    return ( 
        <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>User Expiring/Expired - IruHost</title>
        </Head>
        <div className="h-max w-full px-2 sm:px-10 pt-10">
            <h2 className="text-2xl font-bold mb-10">Expiring/Expired</h2>
            <div className="h-max w-full">
                <table className="h-max w-full text-xs sm:text-base">
                    <thead className="border-b border-grey w-full">
                        <tr className="w-full">
                            <th className="py-3 px-0 sm:px-4 mb-3 text-left">Product</th>
                            <th className="py-3 px-0 sm:px-4 mb-3 text-left">Status</th>
                            <th className="py-3 px-0 sm:px-4 mb-3 text-left">Expiration</th>
                            <th className="py-3 px-0 sm:px-4 mb-3 text-left">Price</th>
                            <th className="py-3 px-0 sm:px-4 mb-3 text-left">
                                <input type="text" hidden value="all" />
                                <button onClick={() =>payClicked("all", totalAmount)} className={`w-full flex h-max bg-primary py-2 rounded items-center justify-center
                                    ${totalAmount === 0 ? "hidden" : ""}
                                    `}>Pay All</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr key={index} className="border-b border-grey w-full">
                                    <td className="py-10 px-0 sm:px-4 mb-3 text-left w-[20%]">{product.product_name}</td>
                                    <td className="py-10 px-0 sm:px-4 mb-3 text-left w-[20%]">Active</td>
                                    <td className="py-10 px-0 sm:px-4 mb-3 text-left w-[20%]">{product.expiry_date}</td>
                                    <td className="py-10 px-0 sm:px-4 mb-3 text-left w-[20%]">₦{product.renewal_price}/{product.billing}</td>
                                    <td className="py-10 px-0 sm:px-4 mb-3 text-left w-[20%]">
                                        <input type="text" hidden value={product.product_id} />
                                        <button onClick={() =>payClicked(product.product_id, product.renewal_price)} className="w-full flex h-max bg-primary py-2 rounded items-center justify-center">Pay</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
     );
}
 
export default Expiring;