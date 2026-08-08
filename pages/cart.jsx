import axios from "axios";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useLocation } from "@/components/LocationContext";

const Cart = () => {

    const { locationDetail } = useLocation();
    
    const navigate = useRouter();

    const [shoppingCart, setShoppingCart] = useState([]);
    const [updateCart, setUpdateCart] = useState(false);
    const [itemId, setItemId] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalDomainAmount, setTotalDomainAmount] = useState(0);
    const [displayDomain, setDisplayDomain] = useState(false);
    const [totalHostingAmount, setTotalHostingAmount] = useState(0);
    const [displayHosting, setDisplayHosting] = useState(false);
    const [totalEmailAmount, setTotalEmailAmount] = useState(0);
    const [displayEmail, setDisplayEmail] = useState(false);
    const [totalSslAmount, setTotalSslAmount] = useState(0);
    const [displaySSL, setDisplaySSL] = useState(false);
    const [totalWebAppAmount, setTotalWebAppAmount] = useState(0);
    const [displayWebApp, setDisplayWebApp] = useState(false);
    const [updateCartTotal, setUpdateCartTotal] = useState(false);
    const [gateway, setGateWay] = useState('flutterwave');
    const [vat, setVat] = useState(0);
    const [showVat, setShowVat] = useState(false);

    async function totalData(){
        try{
            let url = "https://backend.iruhost.com/api/cart-total-price";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true,
            })

            if (response.data.status === "success"){

                setTotalAmount(response.data.main_total);
                setVat(response.data.vat);

                if (response.data.totalDomainPrice < 1){
                    setDisplayDomain(false);
                }else{
                    setDisplayDomain(true);
                    setTotalDomainAmount(response.data.totalDomainPrice)
                }

                if (response.data.hosting_present === false){
                    setDisplayHosting(false);
                }else{
                    setDisplayHosting(true);
                    setTotalHostingAmount(response.data.totalHostingPrice)
                }

                if (response.data.totalEmailPrice < 1){
                    setDisplayEmail(false);
                }else{
                    setDisplayEmail(true);
                    setTotalEmailAmount(response.data.totalEmailPrice)
                }

                if (response.data.totalSslPrice < 1){
                    setDisplaySSL(false);
                }else{
                    setDisplaySSL(true);
                    setTotalSslAmount(response.data.totalSslPrice)
                }

                if (response.data.totalWebAppPrice < 1){
                    setDisplayWebApp(false);
                }else{
                    setDisplayWebApp(true);
                    setTotalWebAppAmount(response.data.totalWebAppPrice)
                }
            }
        }catch(err){
            console.log("Error retrieving total price data: ", err);
        }
    }

    useEffect(() => {
        totalData();

        if (updateCartTotal){
            totalData();
        }

        function getVat(){
            if (displayDomain === true || displayHosting === true || 
                displayEmail === true || displaySSL === true || displayWebApp === true) {
                setShowVat(true);
            }else{
                setShowVat(false);
            }
        }

        getVat();
    }, [updateCartTotal, displayDomain, displayEmail, displayHosting, displaySSL, displayWebApp])
    

    async function cartItems(){
        
        try{
            let url = "https://backend.iruhost.com/api/cart-items";

            const response = await axios.get(url, {
                params: { country: locationDetail },
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            
            const {status, items} = response.data;
           
            if (status === "success") {
                setShoppingCart(items);
            }else{
                setShoppingCart([]);
            }

            if (items.length < 1){
                document.querySelector('.checkout-btn').disabled = true;
                document.querySelector('.checkout-btn').classList.add('cursor-not-allowed');
                document.querySelector('.checkout-btn').classList.add('opacity-50');
                return;
            }

        }catch(err){
            console.log("Error retireving cart items: ", err);
        }
    }

    useEffect(() => {
        cartItems();

        if (updateCart){
            cartItems();
        }
    },[updateCart]);

    const trashClicked = async (e) => {
        e.preventDefault();
        
        const itemId = e.currentTarget.value;

        try{
            let url = "https://backend.iruhost.com/api/remove-item";

            const response = await axios.post(url, {action: itemId}, {
                headers: {
                    "Content-type" : "application/json",
                },withCredentials: true
            })

            if (response.data.status === 'success'){
                setUpdateCart(true);
                setUpdateCartTotal(true);
            }
        }catch(err){
            console.log('Error deleting item: ', err);
        }
    }

    const continueShopping = () => {
        navigate.push('/');
    }

    const emptyCart = async () => {
        let url = "https://backend.iruhost.com/api/empty-user-cart";

        try{
            const response = await axios.post(url, {action: 'empty cart'}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            if (response.data.status === 'success'){
                setUpdateCart(true);
                setUpdateCartTotal(true);
            }
        }catch(err){
            console.log("Fail to clear cart: ", err);
        }
    }

    useEffect(() => {
        const script = document.createElement('script');
        
        script.src = "https://checkout.flutterwave.com/v3.js";
        script.async = true;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    },[])

    const checkoutClicked = async (e) => {

        e.preventDefault();

        try{
            let url = "https://backend.iruhost.com/api/cart-session";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
 
            })
            if (response.data.success === true){

                const flutterEmail = response.data.user.email;
                const flutterName = response.data.user.name;
                const flutterUserId = response.data.user.user_id;
                const pbk = response.data.pbk;
                const txRef = response.data.ref;
                const totalAmount = response.data.totalPrice;

                if (totalAmount === 0){
                    navigate.push("/free-month")
                    return;
                }

                if (gateway === 'flutterwave'){         
                    FlutterwaveCheckout({
                        public_key: pbk,
                        tx_ref: txRef,
                        amount: totalAmount + vat,
                        currency: locationDetail && locationDetail !== "NG" ? "USD" : "NGN",
                        payment_options: 'card, mobilemoneyghana, ussd',
                        redirect_url: 'https://iruhost.com/checkout',
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
            }else{
                navigate.push('/signin?redirect=cart');
            }
        }catch(err){
            console.log("Error retrieving user: ", err);
        }
    }

    return ( 
        <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>Cart - IruHost</title>
        </Head>
        <section id="cart" className="min-h-[calc(100vh-100px)] w-screen py-20 px-3 sm:px-20 bg-accent">
            <h2 className="text-text mb-10 text-xl sm:text-4xl font-bold">Review & Checkout</h2>
            <form action="https://checkout.flutterwave.com/v3/hosted/pay" method="POST" className="w-full h-max flex flex-col sm:flex-row mb-[50px]">
                <input name="itemId" value={itemId} onChange={(e) => setItemId(e.target.value)} hidden/>
                <div className="sm:w-[70%] w-full h-max mb-10 sm:mb-0">
                    <div className="cart-card w-full sm:w-[95%] cards-shadow rounded p-2">
                        <table className="h-max w-full">
                            <thead className="border-b border-grey h-max w-full">
                                <tr className="">
                                    <th className="py-3 px-4 w-[60%] text-left text-grey">Products/Option</th>
                                    <th className="py-3 px-4 w-[25%] text-left text-grey">Price/Cycle</th>
                                    <th className="py-3 px-4 w-[25%] text-right"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                        shoppingCart.length > 0 ? (
                                        shoppingCart.map((item, index) => (
                                            <tr key={index}>
                                                <td className="py-2 px-4 border-b">
                                                    <ul>
                                                        <li className="text-sm font-bold">{item.product}</li>
                                                        <li className="text-sm text-background">{item.product_name}</li>
                                                        <li className={`text-sm text-background
                                                            ${item.product === "Email Registration" || item.product === "Hosting Registration" ? '' : 'hidden'}
                                                            `}>{item.domain}</li>
                                                    </ul>
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    <ul>
                                                        <li className="text-sm">
                                                            <select name="" id="" className="h-10 w-20 outline-none rounded border border-grey px-2 mb-2">
                                                                <option value="yearly">{locationDetail && locationDetail !== "NG" ? "$" : "₦"}{Number(item.amount).toLocaleString()}/{item.billing}</option>
                                                            </select>
                                                        </li>
                                                        <li className="text-xs text-grey">
                                                            Renewal {locationDetail && locationDetail !== "NG" ? "$" : "₦"}<span>{Number(item.renew).toLocaleString()}</span>/{item.billing}
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    <button value={item.cart_id} onClick={trashClicked}> <i className="fa fa-trash opacity-50 hover:opacity-100 transition-all duration-300"></i> </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="text-center text-grey py-4">
                                                Cart is empty
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <div className="w-full h-max pt-5 flex items-center justify-between text-sm">
                            <button type="button" onClick={continueShopping} className="px-3 cursor-pointer sm:px-10 py-3 border bg-transparent border-grey rounded">Continue Shopping</button>
                            <button type="button" onClick={emptyCart} className="px-3 cursor-pointer sm:px-10 py-3 border bg-transparent border-grey rounded"><span><i className="fa fa-trash"></i></span> Empty Cart</button>
                        </div>
                    </div>
                </div>
                <div className="sm:w-[30%] w-full h-max">
                    <div className="h-max w-full bg-background rounded text-accent p-5">
                        <h2 className="pb-4 font-semibold text-xl sm:text-2xl border-b border-grey mb-4">CART SUMMARY</h2>
                        <div className={`h-max w-full mb-2 pb-1 border-b border-grey flex items-center justify-between
                            ${displayDomain ? '' : 'hidden'}
                            `}>
                            <p className="text-accent text-sm">Domain Total:</p>
                            <div className="text-accent text-sm">{locationDetail && locationDetail !== "NG" ? "$" : "₦"}<span className="">{Number(totalDomainAmount).toLocaleString()}</span></div>
                        </div>
                        <div className={`h-max w-full mb-2 pb-1 border-b border-grey flex items-center justify-between
                            ${displayHosting ? '' : 'hidden'}
                            `}>
                            <p className="text-accent text-sm">Hosting Total:</p>
                            <div className="text-accent text-sm">{locationDetail && locationDetail !== "NG" ? "$" : "₦"}<span className="">{Number(totalHostingAmount).toLocaleString()}</span></div>
                        </div>
                        <div className={`h-max w-full mb-2 pb-1 border-b border-grey flex items-center justify-between
                            ${displayEmail ? '' : 'hidden'}
                            `}>
                            <p className="text-accent text-sm">Email Total:</p>
                            <div className="text-accent text-sm">{locationDetail && locationDetail !== "NG" ? "$" : "₦"}<span className="">{Number(totalEmailAmount).toLocaleString()}</span></div>
                        </div>
                        <div className={`h-max w-full mb-2 pb-1 border-b border-grey flex items-center justify-between
                            ${displaySSL ? '' : 'hidden'}
                            `}>
                            <p className="text-accent text-sm">SSL Total:</p>
                            <div className="text-accent text-sm">{locationDetail && locationDetail !== "NG" ? "$" : "₦"}<span className="">{Number(totalSslAmount).toLocaleString()}</span></div>
                        </div>
                        <div className={`h-max w-full mb-2 pb-1 border-b border-grey flex items-center justify-between
                            ${displayWebApp ? '' : 'hidden'}
                            `}>
                            <p className="text-accent text-sm">Web App Total:</p>
                            <div className="text-accent text-sm">{locationDetail && locationDetail !== "NG" ? "$" : "₦"}<span className="">{Number(totalWebAppAmount).toLocaleString()}</span></div>
                        </div>
                        <div className={`h-max w-full mb-2 pb-1 border-b border-grey flex items-center justify-between
                            ${showVat ? "" : "hidden"}
                            `}>
                            <p className="text-accent text-sm">Vat(7.5%):</p>
                            <div className="text-accent text-sm">{locationDetail && locationDetail !== "NG" ? "$" : "₦"}<span className="">{Number(vat).toLocaleString()}</span></div>
                        </div>
                        <div className="h-max w-full mb-4 border-b border-grey flex items-center justify-between">
                            <p className="text-accent font-semibold text-xl">Subtotal:</p>
                            <div className="text-accent font-semibold text-xl">{locationDetail && locationDetail !== "NG" ? "$" : "₦"}<span className="">{Number(totalAmount).toLocaleString()}</span></div>
                        </div>
                        <div className="w-full h-max">
                            <button onClick={checkoutClicked} type="submit" name="checkout" className="checkout-btn w-full py-3 font-semibold text-center text-accent bg-primary rounded text-base" value="checkout">Checkout</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        </>
     );
}
 
export default Cart;