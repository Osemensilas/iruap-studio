import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter();
    const currentPath = router.pathname;

    let userId = "";

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
    }

    useEffect(() => {
        if (userId === ""){
            setUserPresent(false);
        }else{
            setUserPresent(true);
        }
    },[userId])
    
    return ( 
        <>
        <header id="header" className="relative h-[100px] w-screen bg-background px-2 sm:px-10">
            <div className="header h-full w-full flex items-center justify-between">
                <Link href={"/"} className="header-left h-[40px] w-[60px]">
                    <img src="./logo.png" alt="" className=" h-full w-full cursor-pointer" />
                </Link>
                <nav className="h-full w-max hidden sm:block">
                    <ul className="h-full w-max flex items-center gap-10">
                        <li>
                            <Link onClick={linkClicked} className={`link
                                ${currentPath === "/domain" ? "active" : ""}
                                `} href={"/domain"}>Domain</Link>
                        </li>
                        <li>
                            <Link onClick={linkClicked} className={`link
                                ${currentPath === "/hosting" ? "active" : ""}
                                `} href={"/hosting"}>Hosting</Link>
                        </li>
                        <li>
                            <Link onClick={linkClicked} className={`link
                                 ${currentPath === "/ssl" ? "active" : ""}
                                `} href={"/ssl"}>SSL</Link>
                        </li>
                        <li>
                            <Link onClick={linkClicked} className={`link
                                ${currentPath === "/email" ? "active" : ""}
                                `} href={"/email"}>Email</Link>
                        </li>
                        <li>
                            <Link onClick={linkClicked} className={`link
                                ${currentPath === "/web-development" ? "active" : ""}
                                `} href={"/web-development"}>Web Development</Link>
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
                        <div className="">
                            <Link onClick={linkClicked} href="/dashboard" className={`dashboard text-accent
                                ${userPresent ? "block" : "hidden"}
                                ${currentPath === "/dashboard" ? "active" : ""}
                                `}><span><i className="fa fa-user text-2xl"></i></span> Dashboard</Link>
                        </div>
                        <div className="">
                            <Link onClick={linkClicked} href={"/cart"}>
                                <i className="fa fa-shopping-cart text-2xl text-accent"></i>
                                <span>0</span>
                            </Link>
                        </div>
                    </div>
                    <button onClick={hamClicked} className={`hamburger
                        ${hamOpen ? "active" : ""}
                        `}>
                        <div className={`hammer
                            ${hamOpen ? "active" : ""}
                            `}></div>
                    </button>
                </div>
            </div>
            <div className={`nav-container absolute top-[100%] left-0 w-screen bg-background
                ${hamOpen ? "active":""}
                `}>
                    <nav className="w-full h-full overflow-y-auto">
                        <ul className="w-full h-max flex flex-wrap items-center">
                            <li className={`responsive-link-container w-full sm:w-1/2
                                ${currentPath === "/domain" ? "active" : ""}
                                `}>
                                <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/domain"}>
                                    <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">Domain Name</h2>
                                    <p className="text-accent text-base">Get good domain name</p>
                                </Link>
                            </li>
                            <li className={`responsive-link-container w-full sm:w-1/2
                                ${currentPath === "/hosting" ? "active" : ""}
                                `}>
                                <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/domain"}>
                                    <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">Hosting</h2>
                                    <p className="text-accent text-base">Get good domain name</p>
                                </Link>
                            </li>
                            <li className={`responsive-link-container w-full sm:w-1/2
                                ${currentPath === "/ssl" ? "active" : ""}
                                `}>
                                <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/ssl"}>
                                    <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">SSL Certificate</h2>
                                    <p className="text-accent text-base">Secure your website</p>
                                </Link>
                            </li>
                            <li className={`responsive-link-container w-full sm:w-1/2
                                ${currentPath === "/email" ? "active" : ""}
                                `}>
                                <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/email"}>
                                    <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">Email</h2>
                                    <p className="text-accent text-base">Get professional email address</p>
                                </Link>
                            </li>
                            <li className={`responsive-link-container w-full sm:w-1/2
                                ${currentPath === "/web-development" ? "active" : ""}
                                `}>
                                <Link onClick={linkClicked} className="w-full h-full p-3 flex flex-col" href={"/web-development"}>
                                    <h2 className="py-3 border-b border-grey mb-2 text-2xl font-bold text-accent">Let Us build your website</h2>
                                    <p className="text-accent text-base">Get good good website</p>
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