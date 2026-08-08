import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Head from "next/head";

const SSLCertificate = () => {

    const [products, setProducts] = useState([]); 

    useEffect(() => {
        async function getUserProducts(){
            let url = "https://backend.iruhost.com/api/user-ssl";

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
            <title>User SSL Certificates - IruHost</title>
        </Head>
        <div className="h-max w-full px-2 sm:px-10 pt-10">
            <h2 className="text-2xl font-bold mb-10">SSL Certificate</h2>
            <div className="h-max w-full text-xs sm:text-base">
                <table className="h-max w-full">
                    <thead className="border-b border-grey w-full">
                        <tr className="w-full">
                            <th className="py-3 px-4 mb-3 text-left">Package</th>
                            <th className="py-3 px-4 mb-3 text-left">Domain</th>
                            <th className="py-3 px-4 mb-3 text-left">Expiration</th>
                            <th className="py-3 px-4 mb-3 text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr key={index} className="border-b border-grey w-full">
                                    <td className="py-10 px-4 mb-3 text-left w-[25%]">{product.product_name}</td>
                                    <td className="py-10 px-4 mb-3 text-left w-[25%]">{product.domain}</td>
                                    <td className="py-10 px-4 mb-3 text-left w-[25%]">{product.expiry_date}</td>
                                    <td className="py-10 px-4 mb-3 text-left w-[25%]">
                                        <Link href={product.url} target="_blank" className="w-full flex h-max bg-primary py-2 rounded items-center justify-center">{product.text}</Link>
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
 
export default SSLCertificate;