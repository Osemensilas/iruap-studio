import Domain from "@/components/domainComponents/Domain";
import Products from "@/components/domainComponents/Products";
import Share from "@/components/domainComponents/Share";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

const ManageDomain = () => {

    const searchParams = useSearchParams();
    const mainDomain = searchParams.get('domain');

    const [domain, setDomain] = useState(true);
    const [product, setProduct] = useState(false);
    const [sharing, setSharing] = useState(false);

    const domainClicked = () => {
        setDomain(true);
        setProduct(false);
        setSharing(false);
    }

    const productClicked = () => {
        setDomain(false);
        setProduct(true);
        setSharing(false);
    }

    const sharingClicked = () => {
        setDomain(false);
        setProduct(false);
        setSharing(true);
    }

    return ( 
        <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>Manage Domains - IruHost</title>
        </Head>
        <div className="h-max w-full px-2 sm:px-10 pt-10 bg-accent">
            <h2 className="font-bold text-3xl py-5"><i className="fa fa-globe"></i>{mainDomain}</h2>
            <header className="h-max w-full flex items-center justify-center mb-5 border-b border-grey border-t">
                <button type="button" onClick={domainClicked} className={`flex flex-col items-center justify-center gap-2 py-2 px-6 text-xl cursor-pointer
                    ${domain ? "bg-primary" : ""}
                    `}><i className="fa fa-globe"></i> Domain</button>
                <button type="button" onClick={productClicked} className={`flex flex-col items-center justify-center gap-2 py-2 px-6 text-xl cursor-pointer
                    ${product ? "bg-primary" : ""}
                    `}><i className="fa fa-server"></i> Products</button>
                <button type="button" onClick={sharingClicked} className={`flex flex-col items-center justify-center gap-2 py-2 px-6 text-xl cursor-pointer
                    ${sharing ? "bg-primary" : ""}
                    `}><i className="fa fa-share"></i> Sharing & Transfer</button>
            </header>
            <div className={`h-max w-full
                ${domain ? "" : "hidden"}
                `}>
                <Domain />
            </div>
            <div className={`h-max w-full
                ${product ? "" : "hidden"}
                `}>
                <Products />
            </div>
            <div className={`h-max w-full
                ${sharing ? "" : "hidden"}
                `}>
                <Share />
            </div>
        </div>
        </>
     );
}
 
export default ManageDomain;