import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import TopUpForm from "@/components/TopUpForm";

const Dashboard = () => {

    const [products, setProducts] = useState([]);
    const [user, setUser] = useState('');
    const [accountBal, setAccountBal] = useState(0);
    const [accTopUp, setAccTopUp] = useState(false);

    const mouseEnteredCard = (e) => {
        e.currentTarget.classList.remove('hidden');
    }

    const mouseLeftCard = (e) => {
        e.currentTarget.classList.add('hidden');
    }

    const mouseEnteredImg = (e) => {
        const cardParent = e.currentTarget.parentElement.parentElement;

        cardParent.querySelector('.card').classList.remove('hidden');
    }

    const mouseLeftImg = (e) => {
        const cardParent = e.currentTarget.parentElement.parentElement;

        cardParent.querySelector('.card').classList.add('hidden');
    }

    useEffect(() => {
        async function getUserProducts(){
            let url = "https://backend.iruhost.com/api/get-dashboard";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
 
            })
            
            if (response.data.status === 'success'){
                setProducts(response.data.products);
            }
        }

        async function getUser() {
            let url = "https://backend.iruhost.com/api/session-data";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            
            if (response.data.success === true){
                setUser(response.data.user.name);
            }
        }

        async function acctBal() {
            let url = "https://backend.iruhost.com/api/acct-bal";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            if (response.data.success === true){
                setUser(response.data.user.name);
                setAccountBal(response.data.user.balance);
            }
        }

        acctBal();
        getUser();
        getUserProducts();
    },[])

    const accountTopUp = () => {
        setAccTopUp(true);
    }

    const cancelTopUp = () => {
        setAccTopUp(false);
    }

    const openCpanel = async (productId) => {

        try{
            let url = "https://backend.iruhost.com/api/cpanel-login";

            const res = await axios.post(url, {productId: productId}, {
                headers: {
                    "Content-Type" : "application/json"
                },withCredentials: true
            })

            if (res.data.success === true){
                window.open(res.data.url, "_blank"); 
            }

        }catch(error){
            console.log("Error autologining: ", error);
        }
    };


    return ( 
        <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>User Dashboard - IruHost</title>
        </Head>
        <section className="h-max w-full">
            <div className="w-full h-max px-2 sm:px-10 py-5 flex flex-col sm:flex-row mb-10 items-start justify-between">
                <div className="h-max max-w-screen mb-3 sm:mb-0 sm:max-w-[33%]">
                    <h2 className="text-2xl font-bold">{user}</h2>
                </div>
                <div className="h-max max-w-screen mb-3 sm:mb-0 sm:max-w-[33%]">
                    <h2 className="text-2xl font-bold mb-1">Account Balance</h2>
                    <p>₦{Number(accountBal).toLocaleString()}</p>
                    <button onClick={accountTopUp} className="text-primary font-bold text-base border-none bg-transparent">Top Up</button>
                </div>
                <div className="h-max max-w-screen sm:max-w-[33%]">
                    <h2 className="text-2xl font-bold mb-1">Two Factor Autentication</h2>
                    <p>OFF</p>
                    <Link href={"/two-fa-auth"} className="text-primary font-bold text-base">Manage</Link>
                </div>
            </div>
            <div className="h-max w-full px-2 sm:px-10">
                <h2 className="text-2xl font-semibold mb-3">Active Activity</h2>
                <div className="h-max w-full">
                    <table className="h-max w-full text-xs sm:text-base">
                        <thead className="border-b border-grey w-full">
                            <tr className="w-full">
                                <th className="py-3 px-4 mb-3 text-left">All</th>
                                <th className="py-3 px-4 mb-3 text-left">Products</th>
                                <th className="py-3 px-4 mb-3 text-left">Expiration</th>
                                <th className="py-3 px-4 mb-3 text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => (
                                    <tr key={index} className="border-b border-grey w-full">
                                        <td className="py-10 px-4 mb-3 text-left w-[25%]">{product.product_name}</td>
                                        <td className="py-10 px-4 mb-3 text-left w-[25%]">
                                            <div className="relative w-full">
                                                <div className="h-max w-max">
                                                    <img onMouseEnter={mouseEnteredImg} onMouseLeave={mouseLeftImg} src={`/${product.product}/icon.png`} alt="" className="h-10 w-10 cursor-pointer" />
                                                </div>
                                                <div onMouseEnter={mouseEnteredCard} onMouseLeave={mouseLeftCard} className="card z-50 absolute bg-accent rounded cards-shadow p-3 w-[350%] sm:w-full hidden">
                                                    <p>{product.domain}</p>
                                                    <p>Status: Active</p>
                                                    <p>Domain Privacy: Active</p>
                                                    <p>Expiration: {product.expiry_date}</p>
                                                    <div className="h-max w-full py-5">
                                                        {
                                                            product.text === "Cpanel" ? (
                                                               <button onClick={() => openCpanel(product.product_id)} className="w-full flex h-max bg-primary py-2 rounded items-center justify-center">cPanel</button> 
                                                            ) : (
                                                                <Link href={product.url} className="w-full flex h-max bg-primary py-2 rounded items-center justify-center">{product.text}</Link>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-10 px-4 mb-3 text-left w-[25%]">{product.expiry_date}</td>
                                        <td className="py-10 px-4 mb-3 text-left w-[25%]">
                                            {
                                                product.text === "Cpanel" ? (
                                                    <button onClick={() => openCpanel(product.product_id)} className="w-full flex h-max bg-primary py-2 rounded items-center justify-center">cPanel</button>
                                                ) : (
                                                    <Link href={product.url} className="w-full flex h-max bg-primary py-2 rounded items-center justify-center">{product.text}</Link>
                                                )
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section className={`custom-fixed
            ${accTopUp ? "" : "hidden"}
            `}>
            <div className="h-[60px] w-[100%] flex items-center justify-end px-10">
                <div onClick={cancelTopUp} className="h-max w-max text-accent z-50 relative cursor-pointer">
                    <i className="fa fa-times text-2xl"></i>
                </div>
            </div>
            <div className="h-[calc(100%-60px)] w-[100%] flex items-center justify-center">
                <TopUpForm />
            </div>
        </section>
        </>
     );
}
 
export default Dashboard;