import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { useLocation } from "@/components/LocationContext";

const Header = () => {
    const [userId, setUserId] = useState('');
    const [shoppingCart, setShoppingCart] = useState([]);
    const { locationDetail } = useLocation();
    const [hostingNavClick, setHostingNavClick] = useState(false);

    async function res() {

        try{
            const url = "https://backend.iruhost.com/api/session";

            const response = await axios.get(url, {
                withCredentials: true
            });

            if (response.data.success === true){
                setUserId(response.data.user.user_id);
            }else{
                setUserId("");
            }
        }catch(err){
            console.log("Could not retrieve user: ", err);
        }
    }

    res();

    useEffect(() => {
        async function userCart(){
            let url = "https://backend.iruhost.com/api/cart-items";

            const response = await axios.get(url, {
                params: { country: locationDetail },
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            const {status, items} = response.data;
            
            if (status === "success") {
                setShoppingCart(items);
            }else{
                setShoppingCart([]);
            }
        }

        const timer = setInterval(() => {
            userCart();
        }, 1000);

        return () => clearInterval(timer);
    },[])
    

    const router = useRouter();
    const currentPath = router.pathname;

    const [hamOpen, setHamOpen] = useState(false);
    const [userPresent, setUserPresent] = useState(false);
    
    const hamClicked = () => {
        if (!hamOpen){
            setHamOpen(true);
        }else{
            setHamOpen(false);
        }
    }

    const linkClicked = () => {
        setHamOpen(false);
        setHostingNavClick(false);
    }

    useEffect(() => {
        if (userId === ""){
            setUserPresent(false);
        }else{
            setUserPresent(true);
        }
    },[userId])

    const mouseEntered = (e) => {
        const parent = e.currentTarget.parentElement;
        const navContainer = parent.querySelector('.smNav');

        if (navContainer.classList.contains('hidden')){
            navContainer.classList.remove('hidden');
        }else{
            navContainer.classList.add('hidden');
        }
    }

    const minilinkClicked = (e) => {
        e.currentTarget.parentElement.classList.add('hidden');
    }

    const logout = async () => {
        let url = "https://backend.iruhost.com/api/logout";

        try{
            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            if (response.data.status === 'success'){
                window.location = '/';
            }
        }catch(error){
            console.log("Error logging out: ", error);
        }
    }

    const hostingNavigations = () => {
        if (!hostingNavClick){
            setHostingNavClick(true);
        }else{
            setHostingNavClick(false);
        }
    }

    const subClicked = () => {
        setHostingNavClick(false);
        setHamOpen(false);
    }
    
    return ( 
        <>
        <header id="header" className="relative h-[100px] w-screen bg-background px-2 sm:px-10">
            <div className="header h-full w-full flex items-center justify-between">
                <Link href={"/"} className="header-left h-[40px] w-[60px] relative">
                    <Image src="/logo.png" alt="logo" fill className="object-cover" />
                </Link>
                <nav className="h-full w-max hidden sm:block">
                    <ul className="h-full w-max flex items-center gap-10">
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link onClick={linkClicked} className={`link
                                ${currentPath === "/domain" ? "active" : ""}
                                `} href={"/domain"}>Domain</Link>
                            <span className={`h-[2px] w-full bg-primary
                                ${currentPath === "/domain" ? "" : "hidden"}
                                `}></span>
                        </li>
                        <li className="h-max w-max flex flex-col gap-1 relative">
                            <button onClick={hostingNavigations} className={`link bg-tranparent
                                ${currentPath === "/hosting" || currentPath === "/reseller-hosting" ? "active" : ""}
                                `}>Hosting</button>
                            <span className={`h-[2px] w-full bg-primary
                                ${currentPath === "/hosting" || currentPath === "/reseller-hosting" ? "" : "hidden"}
                                `}></span>
                            <ul className={`absolute flex flex-col gap-2 p-5 rounded-b w-max
                                ${hostingNavClick ? "top-5 left-0 bg-accent" : "hidden"}
                                `}>
                                <li>
                                    <Link onClick={subClicked} className={`
                                        ${currentPath === "/hosting" ? "text-primary" : "text-background"}
                                        `} href={"/hosting"}>Shared Hosting</Link>
                                    <span className={`h-[2px] w-full bg-background
                                        ${currentPath === "/hosting" ? "" : "hidden"}
                                        `}></span>
                                </li>
                                <li>
                                    <Link onClick={subClicked} className={`
                                        ${currentPath === "/wordpress-hosting" ? "text-primary" : "text-background"}
                                        `} href={"/wordpress-hosting"}>WordPress Hosting</Link>
                                    <span className={`h-[2px] w-full bg-background
                                        ${currentPath === "/wordpress-hosting" ? "" : "hidden"}
                                        `}></span>
                                </li>
                                <li>
                                    <Link onClick={subClicked} className={`
                                        ${currentPath === "/reseller-hosting" ? "text-primary" : "text-background"}
                                        `} href={"/reseller-hosting"}>Reseller Hosting</Link>
                                    <span className={`h-[2px] w-full bg-background
                                        ${currentPath === "/reseller-hosting" ? "" : "hidden"}
                                        `}></span>
                                </li>
                            </ul>
                        </li>
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link onClick={linkClicked} className={`link
                                 ${currentPath === "/ssl" ? "active" : ""}
                                `} href={"/ssl"}>SSL</Link>
                            <span className={`h-[2px] w-full bg-primary
                                ${currentPath === "/ssl" ? "" : "hidden"}
                                `}></span>
                        </li>
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link onClick={linkClicked} className={`link
                                ${currentPath === "/email" ? "active" : ""}
                                `} href={"/email"}>Email</Link>
                            <span className={`h-[2px] w-full bg-primary
                                ${currentPath === "/email" ? "" : "hidden"}
                                `}></span>
                        </li>
                        <li className="h-max w-max flex flex-col gap-1">
                            <Link onClick={linkClicked} className={`link
                                ${currentPath === "/web-development" ? "active" : ""}
                                `} href={"/web-development"}>Web Development</Link>
                            <span className={`h-[2px] w-full bg-primary
                                ${currentPath === "/web-development" ? "" : "hidden"}
                                `}></span>
                        </li>
                    </ul>
                </nav>
                <div className="header-right h-max w-max flex items-center gap-4 sm:gap-10">
                    <div className="h-max w-max flex items-center gap-1 sm:gap-4">
                        <div className="">
                            <Link href="/signin" className={`text-accent border-accent py-2 px-4 rounded border
                                ${userPresent ? "hidden" : "block"}
                                `}>Login</Link>
                        </div>
                        <div className="relative h-max w-max p-2 z-50">
                            <div onClick={mouseEntered} className={`h-max w-max cursor-pointer
                                ${userPresent ? "block" : "hidden"}
                                `}>
                                <span><i className="fa fa-user text-2xl text-accent"></i></span>
                            </div>
                            <div className={`hidden smNav h-max w-max absolute bg-accent p-2 rounded`}>
                                <Link onClick={minilinkClicked} href="/dashboard" className={`dashboard mb-3 text-xl text-text
                                ${userPresent ? "block" : "hidden"}
                                ${currentPath === "/dashboard" ? "active" : ""}
                                `}> Dashboard</Link>
                                <Link onClick={minilinkClicked} href="/expiring" className={`dashboard mb-3 text-xl text-text
                                ${userPresent ? "block" : "hidden"}
                                ${currentPath === "/expiring" ? "active" : ""}
                                `}> Expiring</Link>
                                <Link onClick={minilinkClicked} href="/domain-list" className={`dashboard mb-3 text-xl text-text
                                ${userPresent ? "block" : "hidden"}
                                ${currentPath === "/domain-list" ? "active" : ""}
                                `}> Domain List</Link>
                                <Link onClick={minilinkClicked} href="/hosting-list" className={`dashboard mb-3 text-xl text-text
                                ${userPresent ? "block" : "hidden"}
                                ${currentPath === "/hosting-list" ? "active" : ""}
                                `}> Hosting List</Link>
                                <Link onClick={minilinkClicked} href="/private-email" className={`dashboard mb-3 text-xl text-text
                                ${userPresent ? "block" : "hidden"}
                                ${currentPath === "/private-email" ? "active" : ""}
                                `}> Private Email</Link>
                                <Link onClick={minilinkClicked} href="/ssl-certificate" className={`dashboard mb-3 text-xl text-text
                                ${userPresent ? "block" : "hidden"}
                                ${currentPath === "/ssl-certificate" ? "active" : ""}
                                `}> SSL Certificate</Link>
                                <Link onClick={minilinkClicked} href="/apps" className={`dashboard mb-3 text-xl text-text
                                ${userPresent ? "block" : "hidden"}
                                ${currentPath === "/apps" ? "active" : ""}
                                `}> Apps</Link>
                                <Link onClick={minilinkClicked} href="/support" className={`dashboard mb-3 text-xl text-text
                                ${userPresent ? "block" : "hidden"}
                                ${currentPath === "/support" ? "active" : ""}
                                `}> Support Ticket</Link>
                                <div className="px-3 py-3 border-r border-grey">
                                    <button onClick={logout} className="bg-primary text-accent rounded py-3 w-full flex items-center justify-center">Logout</button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Link className="h-max w-max flex items-center" onClick={linkClicked} href={"/cart"}>
                                <i className="fa fa-shopping-cart text-2xl text-accent"></i>
                                <span className="ml-2 text-accent text-xs py-1 px-3 border border-accent rounded">{shoppingCart.length}</span>
                            </Link>
                        </div>
                    </div>
                    <button type="button" aria-label={hamOpen ? "Close menu" : "Open menu"} onClick={hamClicked} className={`hamburger
                        ${hamOpen ? "active" : ""}
                        `}>
                        <div className={`hammer
                            ${hamOpen ? "active" : ""}
                            `}></div>
                    </button>
                </div>
            </div>
            <div className={`nav-container absolute top-[100%] left-0 sm:left-1/2 w-full sm:w-1/2 bg-background z-50
                ${hamOpen ? "active":""}
                `}>
                <nav className="w-full h-full overflow-y-auto">
                    <ul className="w-full h-max flex flex-col items-center">
                        <li className={`responsive-link-container w-full sm:w-1/2
                            ${currentPath === "/domain" ? "active" : ""}
                            `}>
                            <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/domain"}>
                                <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">Domain Name</h2>
                                <p className="text-accent text-base">Register the perfect domain name for your website or business.</p>
                            </Link>
                        </li>
                        <li className={`responsive-link-container w-full sm:w-1/2
                            ${currentPath === "/hosting" ? "active" : ""}
                            `}>
                            <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/hosting"}>
                                <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">Hosting</h2>
                                <p className="text-accent text-base">Fast and reliable web hosting to keep your website online.</p>
                            </Link>
                        </li>
                        <li className={`responsive-link-container w-full sm:w-1/2
                            ${currentPath === "/wordpress-hosting" ? "active" : ""}
                            `}>
                            <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/wordpress-hosting"}>
                                <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">WordPress Hosting</h2>
                                <p className="text-accent text-base">Powerful hosting built for WordPress with fast loading, automatic setup, and easy management.</p>
                            </Link>
                        </li>
                        <li className={`responsive-link-container w-full sm:w-1/2
                            ${currentPath === "/reseller-hosting" ? "active" : ""}
                            `}>
                            <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/reseller-hosting"}>
                                <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">Reseller Hosting</h2>
                                <p className="text-accent text-base">Start your own hosting business and sell hosting to your clients.</p>
                            </Link>
                        </li>
                        <li className={`responsive-link-container w-full sm:w-1/2
                            ${currentPath === "/ssl" ? "active" : ""}
                            `}>
                            <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/ssl"}>
                                <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">SSL Certificate</h2>
                                <p className="text-accent text-base">Protect your website and visitors with secure SSL encryption.</p>
                            </Link>
                        </li>
                        <li className={`responsive-link-container w-full sm:w-1/2
                            ${currentPath === "/email" ? "active" : ""}
                            `}>
                            <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/email"}>
                                <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">Email</h2>
                                <p className="text-accent text-base">Create professional business email addresses using your domain.</p>
                            </Link>
                        </li>
                        <li className={`responsive-link-container w-full sm:w-1/2
                            ${currentPath === "/web-development" ? "active" : ""}
                            `}>
                            <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/web-development"}>
                                <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">Let Us build your website</h2>
                                <p className="text-accent text-base">Let our team design and build a modern website for your business.</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
     );
}
 
export default Header;