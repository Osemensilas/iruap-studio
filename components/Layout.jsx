import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router"; 
import UserNav from "./UserNav";
import Chats from "./chat";

const Layout = ({children}) => {

    const router = useRouter();
    const currentPath = router.pathname;

    return ( 
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Web Hosting Company" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        </Head>
        <Header/>
        <main className="h-max w-screen flex bg-accent">
            <div className={`h-screen 
                ${currentPath === '/dashboard' ||
                    currentPath === '/expiring' ||
                    currentPath === '/hosting-list' ||
                    currentPath === '/domain-list' ||
                    currentPath === '/ssl-certificate' ||
                    currentPath === '/private-email' ||
                    currentPath === '/apps' ||
                    currentPath === '/profile' ||
                    currentPath === '/edit-profile' ||
                    currentPath === '/manage-domain' ||
                    currentPath === '/support/user-tickets' ||
                    currentPath === '/support' ||
                    currentPath === '/support/ticket' ||
                    currentPath === '/manage-email'
                    ? "hidden sm:block w-[20%] bg-background" : "hidden"}
                `}>
                    <UserNav />
            </div>
            <div className={`h-max 
                ${currentPath === '/dashboard' ||
                    currentPath === '/expiring' ||
                    currentPath === '/hosting-list' ||
                    currentPath === '/domain-list' ||
                    currentPath === '/ssl-certificate' ||
                    currentPath === '/private-email' ||
                    currentPath === '/apps' ||
                    currentPath === '/profile' ||
                    currentPath === '/edit-profile' ||
                    currentPath === '/support/user-tickets' ||
                    currentPath === '/support' ||
                    currentPath === '/support/ticket'
                    ? "w-[100%] sm:w-[80%] bg-accent min-h-screen" : "w-[100%]"}
                `}>
                {children}
            </div>
            <div className={`
                ${currentPath === '/signin' ||
                    currentPath === '/signup' ||
                    currentPath === '/forget-password'
                    ? "hidden" : ""}
                `}>
                    <Chats />
            </div>
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;