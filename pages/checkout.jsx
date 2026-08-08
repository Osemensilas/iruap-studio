import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Head from "next/head";
import Loading from "@/components/Loading";

const Checkout = () => {

    const searchParams = useSearchParams();

    const status = searchParams.get('status');
    const ref = searchParams.get('tx_ref');
    const id = searchParams.get('transaction_id');

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useRouter();

    useEffect(() => {

        async function paymentDetails(){
            if (status === 'successful'){

                setIsLoading(true);

                let url = "https://backend.iruhost.com/api/payment-success";

                try{
                    const response = await axios.post(url, {'status': status, 'ref': ref, 'id': id}, {
                        headers: {
                            "Content-Type" : "application/json",
                        },withCredentials: true,
                    })

                    console.log(response.data);

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
            <meta name="robots" content="noindex, nofollow" />
            <title>Checkout - IruHost</title>
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
 
export default Checkout;