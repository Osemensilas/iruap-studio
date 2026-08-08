import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const Products = () => {

    const searchParams = useSearchParams();
    const mainDomain = searchParams.get('domain');

    const [products, setProducts] = useState([]);

    async function getUserProducts(){
        let url = "https://backend.iruhost.com/api/get-user-domain-products";

        const response = await axios.post(url, {'domain': mainDomain}, {
            headers: {
                "Content-Type" : "application/json",
            },withCredentials: true

        })
        
        if (response.data.status === 'success'){
            setProducts(response.data.products);
        }
    }

    getUserProducts();

    const mouseEnteredImg = (e) => {
        const cardParent = e.currentTarget.parentElement.parentElement;

        cardParent.querySelector('.card').classList.remove('hidden');
    }

    const mouseLeftImg = (e) => {
        const cardParent = e.currentTarget.parentElement.parentElement;

        cardParent.querySelector('.card').classList.add('hidden');
    }

    const mouseEnteredCard = (e) => {
        e.currentTarget.classList.remove('hidden');
    }

    const mouseLeftCard = (e) => {
        e.currentTarget.classList.add('hidden');
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
        <div className="h-max w-full min-h-screen">
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
                                                <Link href={product.url} className="w-full flex h-max bg-primary py-2 rounded items-center justify-center">{product.text}</Link>
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
        </>
     );
}
 
export default Products;