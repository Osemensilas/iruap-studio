import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

const HostingList = () => {

    const [products, setProducts] = useState([]); 

    useEffect(() => {
        async function getUserProducts(){
            let url = "https://backend.iruhost.com/api/user-hosting";

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
            <title>User Hosting List - IruHost</title>
        </Head>
        <div className="h-max w-full px-2 sm:px-10 pt-10">
            <h2 className="text-2xl font-bold mb-10">Hosting List</h2>
            <div className="h-max w-full">
                <table className="h-max w-full text-xs sm:text-base">
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
                                        <button onClick={() => openCpanel(product.product_id)} className="w-full flex h-max bg-primary py-2 rounded items-center justify-center">cPanel</button>
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
 
export default HostingList;