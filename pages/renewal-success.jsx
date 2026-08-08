import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RenewalSucces = () => {

    const router = useRouter();

    const { product_id, amount, tx_ref, transaction_id } = router.query;

    useEffect(() => {

        if (!product_id || !amount){
            return;
        }
        
        async function handleSuccess(){
            // Here you can call your backend to verify the payment and update the product status
            let url = "https://backend.iruhost.com/api/verify-renewal";

            try{
                const response = await axios.get(url, {
                    params: {
                        product_id: product_id,
                        amount: amount,
                        tx_ref: tx_ref,
                        transaction_id: transaction_id
                    },
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })
                console.log(response.data);

                if (response.data.status === 'success'){
                    router.push('/expiring');
                }
            }catch (error){
                console.log("Error verifying renewal: ", error);
            }

        }

        handleSuccess();
    },[product_id, amount])
    return ( 
        <>
        
        </>
     );
}
 
export default RenewalSucces;