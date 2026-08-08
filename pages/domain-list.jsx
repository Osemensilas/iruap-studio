import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";

const DomainList = () => {

    const [products, setProducts] = useState([]); 

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
            let url = "https://backend.iruhost.com/api/user-domain";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
 
            })
            
            if (response.data.status === 'success'){
                setProducts(response.data.products);
            }
        }

        getUserProducts();
    },[])

    return ( 
        <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>User Domain List - IruHost</title>
        </Head>
        <div className="h-max w-full px-2 sm:px-10 pt-10">
            <h2 className="text-2xl font-bold mb-10">Domain List</h2>
            <div className="h-max w-full">
                <table className="h-max w-full text-xs sm:text-base">
                    <thead className="border-b border-grey w-full">
                        <tr className="w-full">
                            <th className="py-3 px-4 mb-3 text-left">Domain</th>
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
                                                <img onMouseEnter={mouseEnteredImg} onMouseLeave={mouseLeftImg} src="/domain/icon.png" alt="" className="h-10 w-10 cursor-pointer" />
                                            </div>
                                            <div onMouseEnter={mouseEnteredCard} onMouseLeave={mouseLeftCard} className="card z-50 absolute bg-accent rounded cards-shadow p-3 w-[350%] sm:w-full hidden">
                                                <p>{product.domain}</p>
                                                <p>Status: Active</p>
                                                <p>Domain Privacy: Active</p>
                                                <p>Expiration: {product.expiry_date}</p>
                                                <div className="h-max w-full py-5">
                                                    <Link href={product.url} className="w-full flex h-max bg-primary py-2 rounded items-center justify-center">{product.text}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-10 px-4 mb-3 text-left w-[25%]">{product.expiry_date}</td>
                                    <td className="py-10 px-4 mb-3 text-left w-[25%]">
                                        <Link href={product.url} className="w-full flex h-max bg-primary py-2 rounded items-center justify-center">{product.text}</Link>
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
 
export default DomainList;