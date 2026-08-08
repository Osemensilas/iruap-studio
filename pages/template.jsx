import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";

const Templates = () => {

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

    useEffect(() => {
        if (activeProject){
            getWebsites();
        }
    },[activeProject])

    const removeProject = () => {
        setTempFrame("unshow");
    }

    async function getWebsites(){
        let url = "https://backend.iruhost.com/api/get-websites-all";

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
            <Head>
                <title>Wensite Templates - IruHost</title>
            </Head>
            <div className="h-max w-full bg-background">
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
                    <select name="" id="" className="w-[80%] h-[40px] rounded border border-accent px-5 outline-none bg-transparent text-grey">
                        <option value="business">BUSINESS</option>
                        <option value="ecommerce">ECOMMERCE</option>
                        <option value="portfolio">PORTFOLIO</option>
                    </select>
                </div>
                <div className="h-max w-full grid grid-cols-1 sm:grid-cols-2 py-[50px] justify-between px-3 sm:px-20">
                    {
                        webApps.map((app, index) => (
                            <div key={index} onClick={projectClicked} className="relative w-[95%] h-[350px] bg-accent rounded after-css group mb-10">
                                <img src={`https://backend.iruhost.com/uploads/${app.image}`} className="h-full w-full rounded" alt="" />
                                <button value={app.web_id} className="template-btn z-50 hidden group-hover:block transition-all duration-500 py-2 px-5 border border-background text-background rounded">View Template</button>
                            </div>
                        ))
                    }
                </div>
                <div className={`fixed top-0 left-0 h-screen w-screen z-50 
                    ${tempFrame === "show" ? "flex flex-col sm:flex-row" : "hidden"}
                    `}>
                    <div className="h-[100px] sm:block flex justify-between sm:h-full w-full sm:w-[20%] bg-background">
                        <div className="h-[100px] w-max sm:w-full flex items-center justify-end px-5">
                            <div onClick={removeProject} className="h-10 w-10 relative cursor-pointer">
                                <div className="cancel"></div>
                            </div>
                        </div>
                        <div className="h-full sm:h-[calc(100%-100px)] w-max sm:w-full flex sm:block items-center text-accent px-5">
                            <h4 className="text-xl mb-5 hidden sm:block capitalize">{single.category}</h4>
                            <h2 className="text-3xl mb-5 hidden sm:block">{single.web_name}</h2>
                            <p className="text-base mb-5 hidden sm:block">{single.description}</p>
                            <h2 className="text-3xl mb-0 mr-3 sm:mr-0 sm:mb-5">₦{Number(single.price).toLocaleString()}</h2>
                            <div className="h-max w-full mt-0 sm:mt-5">
                                <button onClick={addWebToCart} value={single.web_id} className="py-3 px-5 rounded bg-primary text-text font-semibold">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="h-[calc(100%-100px)] sm:h-full w-full sm:w-[80%]">
                        <iframe className="h-full w-full" src={single.url} frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Templates;