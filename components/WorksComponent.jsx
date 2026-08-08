import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

const WorksComponent = () => {

    const router = useRouter();

    const [activeProject, setActiveProject] = useState("business");
    const [tempFrame, setTempFrame] = useState("unshow");
    const [webApps, setWebApps] = useState([]);
    const [single, setSingle] = useState([]);

    const busiPort = () => {
        setActiveProject("business");
    }

    const ePort = () => {
        setActiveProject("ecommerce");
    }

    const pPort = () => {
        setActiveProject("portfolio");
    }

    const projectClicked = (e) => {
        const projectId = e.currentTarget.children[1].value;

        async function getWebsiteSingle(){
            let url = "https://backend.iruhost.com/api/get-single-website";

            try{
                const response = await axios.post(url, {'website': projectId}, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })

                console.log(response.data);

                if (response.data.status === 'success'){
                    setSingle(response.data.result);
                }
            }catch(error){
                console.log("Error retrieving websites: ", error);
            }
        }

        setTempFrame("show");
        getWebsiteSingle();
    }

    const removeProject = () => {
        setTempFrame("unshow");
    }

    useEffect(() => {
        if (activeProject){
            getWebsites();
        }
    },[activeProject])

    const handleChanged = (e) => {
        setActiveProject(e.target.value);
    }

    async function getWebsites(){
        let url = "https://backend.iruhost.com/api/get-websites";

        try{
            const response = await axios.post(url, {'website': activeProject}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            if (response.data.status === 'success'){
                setWebApps(response.data.result);
            }
        }catch(error){
            console.log("Error retrieving websites: ", error);
        }
    }

    const addWebToCart = async (e) => {
        const webId = e.currentTarget.value;

        let url = "https://backend.iruhost.com/api/add-website-to-cart";

        try{
            const response = await axios.post(url, {'website': webId}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            console.log(response.data);

            if (response.data.message === 'Product added to cart'){
                router.push('cart');
            }

            if (response.data.message === 'Product already in cart'){
                router.push('cart');
            }
        }catch(error){
            console.log("Error retrieving websites: ", error);
        }
    }

    return ( 
        <>
        <div className="h-max w-full">
            <h2 className="text-center font-bold text-accent text-xl mb-3">OUR TEMPLATES</h2>
            <h2 className="text-center font-bold text-accent text-3xl mb-3">Featured Website Design Projects</h2>
            <div className="w-full h-max flex justify-center mb-20">
                <div className="w-4/5 sm:w-1/2 h-max">
                    <p className="text-center text-accent font-normal text-base">Custom B2C, B2B, and eCommerce solutions designed to drive traffic, boost engagement, and maximize conversions.</p>
                </div>
            </div>
            <div className="h-max w-screen md:flex items-center justify-center gap-3 hidden mb-20">
                <div onClick={busiPort} className={`h-max w-[150px] rounded cursor-pointer p-3 text-center text-xl 
                    ${activeProject === "business" ? "bg-accent text-text transition-all duration-500" : "text-accent group"}
                    `}>
                    <i className="fa fa-briefcase group-hover:text-backgroundLight transition-all duration-500"></i>
                    <h2 className="font-semibold group-hover:text-backgroundLight transition-all duration-500">BUSINESS</h2>
                    <i className={`fa fa-caret-down
                        ${activeProject === "business" ? "transition-all duration-500" : "active"}
                        `}></i>
                </div>
                <div onClick={ePort} className={`h-max w-[150px] rounded cursor-pointer p-3 text-center text-xl 
                    ${activeProject === "ecommerce" ? "bg-accent text-text transition-all duration-500" : "text-accent group"}
                    `}>
                    <i className="fa fa-shopping-cart group-hover:text-backgroundLight transition-all duration-500"></i>
                    <h2 className="font-semibold group-hover:text-backgroundLight transition-all duration-500">ECOMMERCE</h2>
                    <i className={`fa fa-caret-down
                        ${activeProject === "ecommerce" ? "transition-all duration-500" : "active"}
                        `}></i>
                </div>
                <div onClick={pPort} className={`h-max w-[150px] rounded cursor-pointer p-3 text-center text-xl 
                    ${activeProject === "portfolio" ? "bg-accent text-text transition-all duration-500" : "text-accent group"}
                    `}>
                    <i className="fa fa-folder-open group-hover:text-backgroundLight transition-all duration-500"></i>
                    <h2 className="font-semibold group-hover:text-backgroundLight transition-all duration-500">PORTFOLIO</h2>
                    <i className={`fa fa-caret-down
                        ${activeProject === "portfolio" ? "transition-all duration-500" : "active"}
                        `}></i>
                </div>
            </div>
            <div className="md:hidden flex items-center justify-center w-full h-max mb-20">
                <select name="section" id="section" onChange={handleChanged} className="w-[80%] h-[40px] rounded border border-accent px-5 outline-none bg-transparent text-grey">
                    <option value="business">BUSINESS</option>
                    <option value="ecommerce">ECOMMERCE</option>
                    <option value="portfolio">PORTFOLIO</option>
                </select>
            </div>
            <div className="h-max w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4 sm:px-16">
            {webApps.map((app, index) => (
                <div key={index} className="relative group rounded border border-[#1e2a3d] bg-[#0d1421] overflow-hidden cursor-pointer hover:border-primary hover:-translate-y-1 transition-all duration-300">
                    <img src={`https://backend.iruhost.com/uploads/${app.image}`} alt={app.web_name} className="w-full h-[200px] object-cover" />
                    <button value={app.web_id} className="hidden" />
                    <div className="p-4">
                        <p className="text-primary text-[10px] tracking-widest uppercase mb-1">
                        {app.category}
                        </p>
                        <h3 className="text-accent font-semibold text-base mb-1">{app.web_name}</h3>
                        <p className="text-primary font-medium">₦{Number(app.price).toLocaleString()}</p>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                        <a href={`/web-app?product_id=${app.web_id}`} target="_blank" className="py-2 px-5 bg-primary text-text text-sm font-medium rounded-sm">
                        View Details
                        </a>
                        <a href={app.url} target="_blank" className="py-2 px-5 border border-white/30 text-accent text-sm rounded-sm">
                        Live Demo ↗
                        </a>
                    </div>
                </div>
            ))}
            </div>
        </div>
        <div className="h-max w-full items-center justify-center hidden">
            <Link className="text-primary border-2 border-primary font-semibold rounded py-3 px-5" href={"/template"}>See More Template</Link>
        </div>
        </>
     );
}
 
export default WorksComponent;