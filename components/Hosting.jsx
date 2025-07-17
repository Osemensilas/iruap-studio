import { useState } from "react";

const WebHostingComponent = () => {

    const [hostingStarterPrice, setHostingStarterPrice] = useState(1.87);
    const [hostingStarterPriceInitial, setHostingStarterPriceInitial] = useState(9.35);
    const [hostingGrowthPrice, setHostingGrowthPrice] = useState(2.68);
    const [hostingGrowthPriceInitial, setHostingGrowthPriceInitial] = useState(13.40);
    const [hostingProPrice, setHostingProPrice] = useState(4.22);
    const [hostingProPriceInitial, setHostingProPriceInitial] = useState(21.10);
    const [hostingEnterprisePrice, setHostingEnterprisePrice] = useState(6.16);
    const [hostingEnterprisePriceInitial, setHostingEnterprisePriceInitial] = useState(30.83);
    const [percentReduced, setPercentReduced] = useState(80);
    const [billingCycle, setBillingCycle] = useState("month");

    const cycleChanged = (e) => {
        console.log(e.target.value);
        if (e.target.value === "monthly"){
            setPercentReduced(80);
            setHostingStarterPrice(1.87);
            setHostingGrowthPrice(2.68);
            setHostingProPrice(4.22);
            setHostingEnterprisePrice(6.16);
            setBillingCycle("month");
            setHostingStarterPriceInitial(9.35);
            setHostingGrowthPriceInitial(13.40);
            setHostingProPriceInitial(21.10);
            setHostingEnterprisePriceInitial(30.83);
        }else if (e.target.value === "quarterly"){
            setPercentReduced(82);
            setHostingStarterPrice(5.05);
            setHostingGrowthPrice(7.24);
            setHostingProPrice(11.40);
            setHostingEnterprisePrice(16.65);
            setBillingCycle("quarter");
            setHostingStarterPriceInitial(Math.round(9.35 * 3 * 100)/100);
            setHostingGrowthPriceInitial(Math.round(13.40 * 3 * 100)/100);
            setHostingProPriceInitial(Math.round(21.10 *3 * 100)/100);
            setHostingEnterprisePriceInitial(Math.round(30.83 * 3 * 100)/100);
        }else if (e.target.value === "yearly"){
            setPercentReduced(85);
            setHostingStarterPrice(16.83);
            setHostingGrowthPrice(24.12);
            setHostingProPrice(37.98);
            setHostingEnterprisePrice(55.50);
            setBillingCycle("year");
            setHostingStarterPriceInitial(Math.round(9.35 * 12 * 100)/100);
            setHostingGrowthPriceInitial(Math.round(13.40 * 12 * 100)/100);
            setHostingProPriceInitial(Math.round(21.10 * 12 * 100)/100);
            setHostingEnterprisePriceInitial(Math.round(30.83 * 12 * 100)/100);
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
        <form className="h-max w-full flex flex-col sm:flex-row px-3 justify-between items-center">
          <div className="card border w-full mb-5 sm:mb-0 rounded border-grey py-8 px-2 sm:w-[24%] h-[110vh] relative">
            <h2 className="text-2xl font-semibold text-accent mb-4">Starter</h2>
            <p className="text-accent text-sm mb-4">Ideal for beginner/personal website</p>
            <p className="text-grey mb-4"><span className="line-through">${hostingStarterPriceInitial}</span> Save {percentReduced}%</p>
            <h2 className="text-3xl text-accent text-semibold mb-4">${hostingStarterPrice}<span className="text-base">/{billingCycle}</span></h2>
            <div className="w-full h-max border-t border-grey pt-4">
              <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>1 Website</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-signal text-accent mr-2"></i>5GB Bandwidth</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>10,000 Monthly Visitors</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-microchip text-accent mr-2"></i>1GB RAM</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>2 Sub-Domain</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>FREE CPANEL</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-bolt text-accent mr-2"></i>FREE LiteSpeed</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-certificate text-accent mr-2"></i>FREE SSL</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>30 Day Money Back</p>
            </div>
            <div className="absolute top-[90%] left-0 h-max w-full px-3">
              <button className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
            </div>
          </div>
          <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[24%] h-[110vh] relative">
            <h2 className="text-2xl font-semibold text-accent mb-4">Growth</h2>
            <p className="text-accent text-sm mb-4">for small businesses starting to scale</p>
            <p className="text-grey mb-4"><span className="line-through">${hostingGrowthPriceInitial}</span> Save {percentReduced}%</p>
            <h2 className="text-3xl text-accent text-semibold mb-4">${hostingGrowthPrice}<span className="text-base">/{billingCycle}</span></h2>
            <div className="w-full h-max border-t border-grey pt-4">
              <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>8 Website</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-signal text-accent mr-2"></i>10GB Bandwidth</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>25,000 Monthly Visitors</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-microchip text-accent mr-2"></i>2GB RAM</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>5 Sub-Domain</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>FREE CPANEL</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-bolt text-accent mr-2"></i>FREE LiteSpeed</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-certificate text-accent mr-2"></i>FREE SSL</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-exchange text-accent mr-2"></i>Free Website Migration</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>30 Day Money Back</p>
            </div>
            <div className="absolute top-[90%] left-0 h-max w-full px-3">
              <button className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
            </div>
          </div>
          <div className="card w-full mb-5 sm:mb-0 border rounded border-primary py-8 px-3 sm:w-[24%] h-[110vh] relative">
            <div className="absolute -top-5 left-0 h-max w-full flex items-center justify-center">
              <span className="bg-primary text-accent rounded text-sm sm:text-base font-semibold py-2 px-4">Most Popular</span>
            </div>
            <h2 className="text-2xl font-semibold text-accent mb-4">PRO</h2>
            <p className="text-accent text-sm mb-4">for professionals & high-performance needs</p>
            <p className="text-grey mb-4"><span className="line-through">${hostingProPriceInitial}</span> Save {percentReduced}%</p>
            <h2 className="text-3xl text-accent text-semibold mb-4">${hostingProPrice}<span className="text-base">/{billingCycle}</span></h2>
            <div className="w-full h-max border-t border-grey pt-4">
              <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>FREE Domain Name for 1 Year</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>Unlimited Website</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-signal text-accent mr-2"></i>Unlimited Bandwidth</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>50,000 Monthly Visitors</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-microchip text-accent mr-2"></i>3GB RAM</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-save text-accent mr-2"></i>10X Faster SSD Storage</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>Unlimited Sub-Domain</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>FREE CPANEL</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-bolt text-accent mr-2"></i>FREE LiteSpeed</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-certificate text-accent mr-2"></i>FREE SSL</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>30 Day Money Back</p>
            </div>
            <div className="absolute top-[90%] left-0 h-max w-full px-3">
              <button className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
            </div>
          </div>
          <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[24%] h-[110vh] relative">
            <h2 className="text-2xl font-semibold text-accent mb-4">Enterprise</h2>
            <p className="text-accent text-sm mb-4">for large-scale, mission-critical hosting</p>
            <p className="text-grey mb-4"><span className="line-through">${hostingEnterprisePriceInitial}</span> Save {percentReduced}%</p>
            <h2 className="text-3xl text-accent text-semibold mb-4">${hostingEnterprisePrice}<span className="text-base">/{billingCycle}</span></h2>
            <div className="w-full h-max border-t border-grey pt-4">
              <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>FREE Domain Name for 1 Year</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>Unlimited Website</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-signal text-accent mr-2"></i>Unlimited Bandwidth</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>100,000 Monthly Visitors</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-microchip text-accent mr-2"></i>4GB RAM</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-save text-accent mr-2"></i>10X Faster SSD Storage</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>Unlimited Sub-Domain</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>FREE CPANEL</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-bolt text-accent mr-2"></i>FREE LiteSpeed</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-certificate text-accent mr-2"></i>FREE SSL</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-shield text-accent mr-2"></i>Advanced Security Firewall & DDoS Protection</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>30 Day Money Back</p>
            </div>
            <div className="absolute top-[90%] left-0 h-max w-full px-3">
              <button className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
            </div>
          </div>
        </form>
        </>
     );
}
 
export default WebHostingComponent;