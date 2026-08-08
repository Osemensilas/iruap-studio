import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const FreeMonth = () => {

    const navigate = useRouter();

    useEffect(() => {

        let x = 0;

        const timer = setInterval(() => {
            x++;

            if (x === 5){
                callSuccess();
            }
            
        }, 1000);

        return () => clearInterval(timer);

        async function callSuccess(){

            const status = "successful";
            const ref = `ref_${crypto.randomUUID()}`;
            const id = `${crypto.randomUUID()}`;

            let url = "https://backend.iruhost.com/api/payment-success";

            try{
                const response = await axios.post(url, {'status': status, 'ref': ref, 'id': id}, {
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
    },[])
    return ( 
        <>
        <section className="w-screen h-screen flex flex-col items-center justify-center gap-5 bg-background">
            <h2 className="text-green-500 text-3xl text-semibold">Payment Successful</h2>
            <div className="relative h-[100px] w-[100px]">
                <Image src="/loading.gif" className="object-fill" fill alt="image loading" />
            </div>
        </section>
        </>
     );
}
 
export default FreeMonth;