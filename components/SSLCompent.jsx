import { useState } from "react";

const SSLComponent = () => {
    const [hostingStarterPrice, setHostingStarterPrice] = useState(9.59);
    const [hostingGrowthPrice, setHostingGrowthPrice] = useState(15.00);
    const [hostingProPrice, setHostingProPrice] = useState(99.99);

    return ( 
        <>
        <form className="h-max w-full flex flex-col sm:flex-row px-3 justify-evenly items-center">
            <div className="card border w-full mb-5 sm:mb-0 rounded border-grey py-8 px-2 sm:w-[30%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">Positive SSL Certificate</h2>
                <p className="text-accent text-sm mb-4">is the most cost-effective certificate. It provides a quick solution to secure your customer transactions.</p>
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
            <div className="card w-full mb-5 sm:mb-0 border rounded border-primary py-8 px-3 sm:w-[30%] h-[80vh] relative">
                <div className="absolute -top-5 left-0 h-max w-full flex items-center justify-center">
                    <span className="bg-primary text-accent rounded text-sm sm:text-base font-semibold py-2 px-4">Most Popular</span>
                </div>
                <h2 className="text-2xl font-semibold text-accent mb-4">Essential SSL Сertificate</h2>
                <p className="text-accent text-sm mb-4">provides the highest level of security with a price that is still at an entry-level rate.</p>
                <h2 className="text-3xl text-accent text-semibold mb-4">${hostingGrowthPrice}<span className="text-base">/month</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Domain Validated</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Immediate SSL Certificate issued 24/7</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Free Site Seal</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Unlimited Server License</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Free PCI & Daily Website Scanning</p>
                </div>
                <div className="absolute top-[90%] left-0 h-max w-full px-3">
                    <button className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
                </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[30%] h-[80vh] relative">
                <h2 className="text-2xl font-semibold text-accent mb-4">Extended Validation (EV) SSL</h2>
                <p className="text-accent text-sm mb-4">is a high-level SSL certificate suitable for E-commerce websites, Healthcare Industries, Government Sectors, Education & Financial Institutions.</p>
                <h2 className="text-3xl text-accent text-semibold mb-4">${hostingProPrice}<span className="text-base">/month</span></h2>
                <div className="w-full h-max border-t border-grey pt-4">
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Domain Name and Organization Name Shown On Certificate</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Extended Domain Validated</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Dynamic Site Seal</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Green Address Bar</p>
                    <p className="text-accent text-sm mb-1"><i className="fa fa-check text-accent mr-2"></i>Issuance Time up to 10 days</p>
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