import { useState } from "react";

const SSLComponent = () => {
    const [hostingStarterPrice, setHostingStarterPrice] = useState(1.87);
    const [hostingGrowthPrice, setHostingGrowthPrice] = useState(2.68);
    const [hostingProPrice, setHostingProPrice] = useState(4.22);
    const [hostingEnterprisePrice, setHostingEnterprisePrice] = useState(6.16);
    const [percentReduced, setPercentReduced] = useState(80);

    const cycleChanged = (e) => {
        console.log(e.target.value);
        if (e.target.value === "monthly"){
            setPercentReduced(80);
            setHostingStarterPrice(1.87);
            setHostingGrowthPrice(2.68);
            setHostingProPrice(4.22);
            setHostingEnterprisePrice(6.16);
        }else if (e.target.value === "quarterly"){
            setPercentReduced(82);
            setHostingStarterPrice(5.05);
            setHostingGrowthPrice(7.24);
            setHostingProPrice(11.40);
            setHostingEnterprisePrice(16.65);
        }else if (e.target.value === "yearly"){
            setPercentReduced(85);
            setHostingStarterPrice(16.83);
            setHostingGrowthPrice(24.12);
            setHostingProPrice(37.98);
            setHostingEnterprisePrice(55.50);
        }
    }

    return ( 
        <>
        <div className="w-full h-max flex justify-center items-center mb-10">
            <div className="h-ma w-max flex items-center gap-3">
            <label htmlFor="billing" className="text-accent text-sm">Billing Cycle:</label>
            <select name="" onChange={cycleChanged} id="billing" className="bg-transparent outline-none  border-none text-accent text-xl font-semibold">
                <option value="monthly" className="text-text">Monthly</option>
                <option value="quarterly" className="text-text">Quarterly</option>
                <option value="yearly" className="text-text">Yearly</option>
            </select>
            </div>
        </div>
        <form className="h-max w-full flex flex-col sm:flex-row px-3 justify-evenly items-center">
            <div className="card border w-full mb-5 sm:mb-0 rounded border-grey py-8 px-2 sm:w-[30%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">Starter</h2>
                <p className="text-accent text-sm mb-4">Positive SSL Certificate</p>
                <p className="text-grey mb-4"><span className="line-through">$9.35</span> Save {percentReduced}%</p>
                <h2 className="text-3xl text-accent text-semibold mb-4">${hostingStarterPrice}<span className="text-base">/month</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Domain Validated</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Immediate SSL Certificate issued 24/7</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Free Site Seal</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[30%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">Essential SSL Сertificate</h2>
                <p className="text-accent text-sm mb-4">for small businesses starting to scale</p>
                <p className="text-grey mb-4"><span className="line-through">$13.40</span> Save {percentReduced}%</p>
                <h2 className="text-3xl text-accent text-semibold mb-4">${hostingGrowthPrice}<span className="text-base">/month</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Domain Validated</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Immediate SSL Certificate issued 24/7</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[30%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">Extended Validation (EV) SSL</h2>
                <p className="text-accent text-sm mb-4">for small businesses starting to scale</p>
                <p className="text-grey mb-4"><span className="line-through">$13.40</span> Save {percentReduced}%</p>
                <h2 className="text-3xl text-accent text-semibold mb-4">${hostingGrowthPrice}<span className="text-base">/month</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Domain Validated</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Immediate SSL Certificate issued 24/7</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
        </form>
        </>
    );
}
 
export default SSLComponent;