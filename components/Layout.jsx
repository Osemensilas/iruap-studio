import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({children}) => {
    return ( 
        <>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Hotel" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <Header/>
        <main className="">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;