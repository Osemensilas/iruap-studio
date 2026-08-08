import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const UserNav = () => {

    const router = useRouter();
    const currentPath = router.pathname;

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

    return ( 
        <>
            <div className="w-[100%] h-screen">
                <Link href={"/dashboard"} className="h-max w-full text-xl">
                    <div className={`h-max w-full py-3 flex px-3 border-b border-t
                        ${currentPath === '/dashboard' ? "bg-grey text-text" : "bg-transparent text-accent"}
                        `}>
                        <span className="mr-3">
                            <i className="fa fa-dashboard"></i>
                        </span>
                        Dashboard
                    </div>
                </Link>
                <Link href={"/expiring"} className="h-max w-full text-xl">
                    <div className={`h-max w-full py-3 flex px-3 border-b border-t
                        ${currentPath === '/expiring' ? "bg-grey text-text" : "bg-transparent text-accent"}
                        `}>
                        <span className="mr-3">
                            <i className="fa fa-hourglass-end"></i>
                        </span>
                        Expiring/Expired
                    </div>
                </Link>
                <Link href={"/domain-list"} className="h-max w-full text-xl">
                    <div className={`h-max w-full py-3 flex px-3 border-b border-t
                        ${currentPath === '/domain-list' ? "bg-grey text-text" : "bg-transparent text-accent"}
                        `}>
                        <span className="mr-3">
                            <i className="fa fa-globe"></i>
                        </span>
                        Domain List
                    </div>
                </Link>
                <Link href={"/hosting-list"} className="h-max w-full text-xl">
                    <div className={`h-max w-full py-3 flex px-3 border-b border-t
                        ${currentPath === '/hosting-list' ? "bg-grey text-text" : "bg-transparent text-accent"}
                        `}>
                        <span className="mr-3">
                            <i className="fa fa-server"></i>
                        </span>
                        Hosting List
                    </div>
                </Link>
                <Link href={"/private-email"} className="h-max w-full text-xl">
                    <div className={`h-max w-full py-3 flex px-3 border-b border-t
                        ${currentPath === '/private-email' ? "bg-grey text-text" : "bg-transparent text-accent"}
                        `}>
                        <span className="mr-3">
                            <i className="fa fa-envelope"></i>
                        </span>
                        Private Email
                    </div>
                </Link>
                <Link href={"/ssl-certificate"} className="h-max w-full text-xl">
                    <div className={`h-max w-full py-3 flex px-3 border-b border-t
                        ${currentPath === '/ssl-certificate' ? "bg-grey text-text" : "bg-transparent text-accent"}
                        `}>
                        <span className="mr-3">
                            <i className="fa fa-lock"></i>
                        </span>
                        SSL Certificate
                    </div>
                </Link>
                <Link href={"/apps"} className="h-max w-full text-xl">
                    <div className={`h-max w-full py-3 flex px-3 border-b border-t
                        ${currentPath === '/apps' ? "bg-grey text-text" : "bg-transparent text-accent"}
                        `}>
                        <span className="mr-3">
                            <i className="fa fa-th"></i>
                        </span>
                        Apps
                    </div>
                </Link>
                <Link href={"/support"} className="h-max w-full text-xl">
                    <div className={`h-max w-full py-3 flex px-3 border-b border-t
                        ${currentPath === '/support' ? "bg-grey text-text" : "bg-transparent text-accent"}
                        `}>
                        <span className="mr-3">
                            <i className="fa fa-support"></i>
                        </span>
                        Support
                    </div>
                </Link>
                <Link href={"/profile"} className="h-max w-full text-xl">
                    <div className={`h-max w-full py-3 flex px-3 border-b border-t
                        ${currentPath === '/profile' ? "bg-grey text-text" : "bg-transparent text-accent"}
                        `}>
                        <span className="mr-3">
                            <i className="fa fa-user"></i>
                        </span>
                        Profile
                    </div>
                </Link>
                <div className="px-3 py-3 border-r border-grey">
                    <button onClick={logout} className="bg-primary text-accent rounded py-3 w-full flex items-center justify-center">Logout</button>
                </div>
            </div>
        </>
     );
}
 
export default UserNav;