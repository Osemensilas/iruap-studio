import Image from "next/image";
import Head from "next/head";

const PageNotFound = () => {
    return ( 
        <>
        <Head>
            <title>Page not Found - IruHost</title>
        </Head>
        <section className="h-[calc(100vh-100px)] w-screen flex items-center justify-center bg-background">
            <Image src="/404.png" alt="" width={600} height={300} />
        </section>
        </>
     );
}
 
export default PageNotFound;