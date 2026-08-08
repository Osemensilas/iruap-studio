import Head from "next/head";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const TopUpCheckout = () => {

    const searchParams = useSearchParams();
    
    const status = searchParams.get('status');
    const ref = searchParams.get('tx_ref');
    const id = searchParams.get('transaction_id');
    const amount = searchParams.get('amount');

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useRouter();

    useEffect(() => {
    
        async function paymentDetails(){
            if (status === 'successful'){

                setIsLoading(true);

                let url = "https://backend.iruhost.com/api/topup-success";

                try{
                    const response = await axios.post(url, {'status': status, 'ref': ref, 'id': id, 'amount': amount}, {
                        headers: {
                            "Content-Type" : "application/json",
                        },withCredentials: true,
                    })
                    
                    if (response.data.status === 'successful'){
                        navigate.push('/dashboard');
                    }else{
                        navigate.push('/payment-error');
                    }
                    setIsLoading(false);
                }catch(err){
                    console.log("Error sending data: ", err);
                    setIsLoading(false);
                }
            }
        }

        paymentDetails();
    },[status, ref, id])

    return ( 
        <>
        <Head>
            <title>checkout - IruHost</title>
            <style>{`
                #header,
                #footer,
                .chatIcon {
                    display: none;
                }
            `}</style>
        </Head>
        <section className="h-screen w-screen bg-accent">
            <div className={`h-screen w-screen
                ${isLoading ? "block" : "hidden"}
                `}>
                <Loading />
            </div>
        </section>
        </>
     );
}
 
export default TopUpCheckout;