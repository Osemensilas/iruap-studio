import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const WebHostingComponent = () => {

  const navigate = useRouter();
  const currentName = navigate.pathname;

  const [hostingStarterPrice, setHostingStarterPrice] = useState(1500);
  const [hostingStarterPriceInitial, setHostingStarterPriceInitial] = useState(7500);
  const [hostingGrowthPrice, setHostingGrowthPrice] = useState(2500);
  const [hostingGrowthPriceInitial, setHostingGrowthPriceInitial] = useState(17500);
  const [hostingProPrice, setHostingProPrice] = useState(5000);
  const [hostingProPriceInitial, setHostingProPriceInitial] = useState(25000);
  const [hostingEnterprisePrice, setHostingEnterprisePrice] = useState(9000);
  const [hostingEnterprisePriceInitial, setHostingEnterprisePriceInitial] = useState(45000);
  const [percentReduced, setPercentReduced] = useState(80);
  const [billingCycle, setBillingCycle] = useState("month");
  const [freeDomain, setFreeDomain] = useState(false);
  const [hostingLitePrice, setHostingLitePrice] = useState(500);
  const [hostingLitePriceInitial, setHostingLitePriceInitial] = useState(2500);
  const [hostingEssentialPrice, setHostingEssentialPrice] = useState(850);
  const [hostingEssentialPriceInitial, setHostingEssentialPriceInitial] = useState(4250);
  const [hostingValuePrice, setHostingValuePrice] = useState(1200);
  const [hostingValuePriceInitial, setHostingValuePriceInitial] = useState(6000);
  const [hostingPlusPrice, setHostingPlusPrice] = useState(1600);
  const [hostingPlusPriceInitial, setHostingPlusPriceInitial] = useState(8000);

  useEffect(() => {
    setHostingStarterPrice(2400);
    setHostingStarterPriceInitial(12000);
    setHostingGrowthPrice(3500);
    setHostingGrowthPriceInitial(17500);
    setHostingProPrice(5000);
    setHostingProPriceInitial(25000);
    setHostingEnterprisePrice(9000);
    setHostingEnterprisePriceInitial(45000);
    setPercentReduced(80);
    setHostingLitePrice(500);
    setHostingEssentialPrice(850);
    setHostingValuePrice(1200);
    setHostingPlusPrice(1600);
    setHostingLitePriceInitial(2500);
    setHostingEssentialPriceInitial(4250);
    setHostingValuePriceInitial(6000);
    setHostingPlusPriceInitial(8000);
  }, []);

  const [mainName, setMainName] = useState('');
  const [mainPrice, setMainPrice] = useState('');
  const [mainBilling, setMainBilling] = useState('');

  const cycleChanged = (e) => {
      if (e.target.value === "monthly"){
        setPercentReduced(80);
        setHostingStarterPrice(2400);
        setHostingGrowthPrice(3500);
        setHostingProPrice(5000);
        setHostingEnterprisePrice(9000);
        setBillingCycle("month");
        setHostingStarterPriceInitial(12000);
        setHostingGrowthPriceInitial(17500);
        setHostingProPriceInitial(25000);
        setHostingEnterprisePriceInitial(45000);
        setFreeDomain(false);
        setHostingLitePrice(500);
        setHostingEssentialPrice(850);
        setHostingValuePrice(1200);
        setHostingPlusPrice(1600);
        setHostingLitePriceInitial(2500);
        setHostingEssentialPriceInitial(4250);
        setHostingValuePriceInitial(6000);
        setHostingPlusPriceInitial(8000);
      }else if (e.target.value === "quarterly"){
        setPercentReduced(82);
        setHostingStarterPrice(6480);
        setHostingGrowthPrice(9450);
        setHostingProPrice(13500);
        setHostingEnterprisePrice(24300);
        setBillingCycle("quarter");
        setHostingStarterPriceInitial(Math.round(12000 * 3 * 100)/100);
        setHostingGrowthPriceInitial(Math.round(17500 * 3 * 100)/100);
        setHostingProPriceInitial(Math.round(25000 *3 * 100)/100);
        setHostingEnterprisePriceInitial(Math.round(45000 * 3 * 100)/100);
        setFreeDomain(false);
        setHostingLitePrice(1350);
        setHostingEssentialPrice(2295);
        setHostingValuePrice(3240);
        setHostingPlusPrice(4320);
        setHostingLitePriceInitial(Math.round(2500 * 100 *3)/100);
        setHostingEssentialPriceInitial(Math.round(4250 * 100 *3)/100);
        setHostingValuePriceInitial(Math.round(6000 * 100 *3)/100);
        setHostingPlusPriceInitial(Math.round(8000 * 100 *3)/100);
      }else if (e.target.value === "yearly"){
        setPercentReduced(85);
        setHostingStarterPrice(21600);
        setHostingGrowthPrice(31500);
        setHostingProPrice(45000);
        setHostingEnterprisePrice(81000);
        setBillingCycle("year");
        setHostingStarterPriceInitial(Math.round(12000 * 12 * 100)/100);
        setHostingGrowthPriceInitial(Math.round(17500 * 12 * 100)/100);
        setHostingProPriceInitial(Math.round(25000 * 12 * 100)/100);
        setHostingEnterprisePriceInitial(Math.round(45000 * 12 * 100)/100);
        setFreeDomain(true);
        setHostingLitePrice(4500);
        setHostingEssentialPrice(7650);
        setHostingValuePrice(10800);
        setHostingPlusPrice(14400);
        setHostingLitePriceInitial(Math.round(2500 * 100 *12)/100);
        setHostingEssentialPriceInitial(Math.round(4250 * 100 *12)/100);
        setHostingValuePriceInitial(Math.round(6000 * 100 *12)/100);
        setHostingPlusPriceInitial(Math.round(8000 * 100 *12)/100);
      }
  }

  const starterClicked = () => {
    setMainName('Starter');
    setMainBilling(billingCycle);
    setMainPrice(hostingStarterPrice);
  }

  const growthCLicked = () => {
    setMainName('Growth');
    setMainBilling(billingCycle);
    setMainPrice(hostingGrowthPrice);
  }

  const proClicked = () => {
    setMainName('Pro');
    setMainBilling(billingCycle);
    setMainPrice(hostingProPrice);
  }

  const enterpriseClicked = () => {
    setMainName('Enterprise');
    setMainBilling(billingCycle);
    setMainPrice(hostingEnterprisePrice);
  }

  const liteClicked = () => {
    setMainName('Lite');
    setMainBilling(billingCycle);
    setMainPrice(hostingLitePrice);
  }

  const essentialClicked = () => {
    setMainName('Essential');
    setMainBilling(billingCycle);
    setMainPrice(hostingEssentialPrice);
  }

  const valueClicked = () => {
    setMainName('Standard');
    setMainBilling(billingCycle);
    setMainPrice(hostingValuePrice);
  }

  const plusClicked = () => {
    setMainName('Plus');
    setMainBilling(billingCycle); 
    setMainPrice(hostingPlusPrice);
  }

  useEffect(() => {
    if (mainName || mainBilling || mainPrice){
  
      navigate.push('/domain-connection?hosting=' + mainName + '&billing=' + mainBilling + '&price=' + mainPrice);
    }
  },[mainBilling, mainName, mainPrice])

    return ( 
        <>
        <form onSubmit={(e) => e.preventDefault()} className="h-max w-full">
          <input type="text" name="mainName" value={mainName} onChange={(e) => setMainName(e.target.value)} hidden/>
          <input type="text" name="mainPrice" value={mainPrice} onChange={(e) => setMainPrice(e.target.value)} hidden/>
          <input type="text" name="mainBilling" value={mainBilling} onChange={(e) => setMainBilling(e.target.value)} hidden/>
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
          <div className={`h-max w-full flex flex-col sm:flex-row px-3 justify-between items-center mb-0 sm:mb-10
            `}>
            <div className={`card w-full mb-5 sm:mb-0 border rounded py-8 px-3 sm:w-[24%] h-max sm:h-[110vh] relative
              ${billingCycle === "month" ? "border-primary" : "border-grey"}
              `}>
              <div className={`absolute -top-5 left-0 h-max w-full items-center justify-center
                ${billingCycle === "month" ? "flex" : "hidden"}
                `}>
                <span className="bg-primary text-accent rounded text-sm sm:text-base font-semibold py-2 px-4">First Month Free</span>
              </div>
              <h2 className="text-2xl font-semibold text-accent mb-4">Lite</h2>
              <p className="text-accent text-sm mb-4">Ideal for web developers testing</p>
              <p className="text-grey mb-4"><span className="line-through">₦{Number(hostingLitePriceInitial).toLocaleString()}</span> Save {percentReduced}%</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingLitePrice).toLocaleString()}<span className="text-base">/{billingCycle}</span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>1 Website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>3 Email address</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-signal text-accent mr-2"></i>1GB Bandwidth</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>1,000 Monthly Visitors</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-microchip text-accent mr-2"></i>1GB RAM</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>2 Sub-Domain</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-save text-accent mr-2"></i>1 SQL Database</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>FREE CPANEL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-bolt text-accent mr-2"></i>FREE LiteSpeed</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-certificate text-accent mr-2"></i>FREE SSL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>30 Day Money Back</p>
              </div>
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={liteClicked} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
              </div>
            </div>
            <div className={`card w-full mb-5 sm:mb-0 border rounded py-8 px-3 sm:w-[24%] h-max sm:h-[110vh] relative
              ${billingCycle === "month" ? "border-primary" : "border-grey"}
              `}>
              <div className={`absolute -top-5 left-0 h-max w-full items-center justify-center
                ${billingCycle === "month" ? "flex" : "hidden"}
                `}>
                <span className="bg-primary text-accent rounded text-sm sm:text-base font-semibold py-2 px-4">First Month Free</span>
              </div>
              <h2 className="text-2xl font-semibold text-accent mb-4">Essential</h2>
              <p className="text-accent text-sm mb-4">for portfolio website</p>
              <p className="text-grey mb-4"><span className="line-through">₦{Number(hostingEssentialPriceInitial).toLocaleString()}</span> Save {percentReduced}%</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingEssentialPrice).toLocaleString()}<span className="text-base">/{billingCycle}</span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>2 Website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>5 Email address</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-signal text-accent mr-2"></i>1GB Bandwidth</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>1,000 Monthly Visitors</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-microchip text-accent mr-2"></i>2GB RAM</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>4 Sub-Domain</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-save text-accent mr-2"></i>2 SQL Database</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>FREE CPANEL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-bolt text-accent mr-2"></i>FREE LiteSpeed</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-certificate text-accent mr-2"></i>FREE SSL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-exchange text-accent mr-2"></i>Free Website Migration</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>30 Day Money Back</p>
              </div>
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={essentialClicked} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
              </div>
            </div>
            <div className={`card w-full mb-5 sm:mb-0 border rounded py-8 px-3 sm:w-[24%] h-max sm:h-[110vh] relative
              ${billingCycle === "month" ? "border-primary" : "border-grey"}
              `}>
              <div className={`absolute -top-5 left-0 h-max w-full items-center justify-center
                ${billingCycle === "month" ? "flex" : "hidden"}
                `}>
                <span className="bg-primary text-accent rounded text-sm sm:text-base font-semibold py-2 px-4">First Month Free</span>
              </div>
              <h2 className="text-2xl font-semibold text-accent mb-4">Standard</h2>
              <p className="text-accent text-sm mb-4">for blog website</p>
              <p className="text-grey mb-4"><span className="line-through">₦{Number(hostingValuePriceInitial).toLocaleString()}</span> Save {percentReduced}%</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingValuePrice).toLocaleString()}<span className="text-base">/{billingCycle}</span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>1 Website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>7 Email address</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-signal text-accent mr-2"></i>2GB Bandwidth</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>20,000 Monthly Visitors</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-microchip text-accent mr-2"></i>2GB RAM</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>4 Sub-Domain</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-save text-accent mr-2"></i>4 SQL Database</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>FREE CPANEL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-bolt text-accent mr-2"></i>FREE LiteSpeed</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-certificate text-accent mr-2"></i>FREE SSL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>30 Day Money Back</p>
              </div>
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={valueClicked} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
              </div>
            </div>
            <div className={`card w-full mb-5 sm:mb-0 border rounded py-8 px-3 sm:w-[24%] h-max sm:h-[110vh] relative
              ${billingCycle === "month" ? "border-primary" : "border-grey"}
              `}>
              <div className={`absolute -top-5 left-0 h-max w-full items-center justify-center
                ${billingCycle === "month" ? "flex" : "hidden"}
                `}>
                <span className="bg-primary text-accent rounded text-sm sm:text-base font-semibold py-2 px-4">First Month Free</span>
              </div>
              <h2 className="text-2xl font-semibold text-accent mb-4">Plus</h2>
              <p className="text-accent text-sm mb-4">for large-scale, mission-critical hosting</p>
              <p className="text-grey mb-4"><span className="line-through">₦{Number(hostingPlusPriceInitial).toLocaleString()}</span> Save {percentReduced}%</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingPlusPrice).toLocaleString()}<span className="text-base">/{billingCycle}</span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className={`text-accent text-sm mb-1
                  ${freeDomain ? "" : "hidden"}
                  `}><i className="fa fa-globe text-accent mr-2"></i>FREE Domain Name for 1 Year</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>2 Website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>10 Email address</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-signal text-accent mr-2"></i>4GB Bandwidth</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>5,000 Monthly Visitors</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-microchip text-accent mr-2"></i>2GB RAM</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-save text-accent mr-2"></i>5 SQL Database</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>5 Sub-Domain</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>FREE CPANEL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-bolt text-accent mr-2"></i>FREE LiteSpeed</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-certificate text-accent mr-2"></i>FREE SSL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>30 Day Money Back</p>
              </div>
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={plusClicked} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
              </div>
            </div>
          </div>
          <div className={`h-max w-full flex flex-col sm:flex-row px-3 justify-between items-center
            ${currentName === "/" ? "hidden" : ""}
            `}>
            <div className={`card border w-full mb-5 sm:mb-0 rounded border-grey py-8 px-2 sm:w-[24%] h-max sm:h-[110vh] relative
              `}>
              <h2 className="text-2xl font-semibold text-accent mb-4">Starter</h2>
              <p className="text-accent text-sm mb-4">Ideal for beginner/personal website</p>
              <p className="text-grey mb-4"><span className="line-through">₦{Number(hostingStarterPriceInitial).toLocaleString()}</span> Save {percentReduced}%</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingStarterPrice).toLocaleString()}<span className="text-base">/{billingCycle}</span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>1 Website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>Unlimited Email address</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-signal text-accent mr-2"></i>5GB Bandwidth</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>10,000 Monthly Visitors</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-microchip text-accent mr-2"></i>1GB RAM</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>2 Sub-Domain</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>FREE CPANEL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-bolt text-accent mr-2"></i>FREE LiteSpeed</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-certificate text-accent mr-2"></i>FREE SSL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>30 Day Money Back</p>
              </div>
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={starterClicked} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
              </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-primary py-8 px-3 sm:w-[24%] h-max sm:h-[110vh] relative">
              <div className="absolute -top-5 left-0 h-max w-full flex items-center justify-center">
                <span className="bg-primary text-accent rounded text-sm sm:text-base font-semibold py-2 px-4">Most Popular</span>
              </div>
              <h2 className="text-2xl font-semibold text-accent mb-4">Growth</h2>
              <p className="text-accent text-sm mb-4">for small businesses starting to scale</p>
              <p className="text-grey mb-4"><span className="line-through">₦{Number(hostingGrowthPriceInitial).toLocaleString()}</span> Save {percentReduced}%</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingGrowthPrice).toLocaleString()}<span className="text-base">/{billingCycle}</span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>2 Website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>Unlimited Email address</p>
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
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={growthCLicked} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
              </div>
            </div>
            <div className={`card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[24%] h-max sm:h-[110vh] relative
`}>
              <h2 className="text-2xl font-semibold text-accent mb-4">PRO</h2>
              <p className="text-accent text-sm mb-4">for professionals & high-performance needs</p>
              <p className="text-grey mb-4"><span className="line-through">₦{Number(hostingProPriceInitial).toLocaleString()}</span> Save {percentReduced}%</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingProPrice).toLocaleString()}<span className="text-base">/{billingCycle}</span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>4 Website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>Unlimited Email address</p>
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
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={proClicked} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
              </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[24%] h-max sm:h-[110vh] relative">
              <h2 className="text-2xl font-semibold text-accent mb-4">Enterprise</h2>
              <p className="text-accent text-sm mb-4">for large-scale, mission-critical hosting</p>
              <p className="text-grey mb-4"><span className="line-through">₦{Number(hostingEnterprisePriceInitial).toLocaleString()}</span> Save {percentReduced}%</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingEnterprisePrice).toLocaleString()}<span className="text-base">/{billingCycle}</span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className={`text-accent text-sm mb-1
                  ${freeDomain ? "" : "hidden"}
                  `}><i className="fa fa-globe text-accent mr-2"></i>FREE Domain Name for 1 Year</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>8 Website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>Unlimited Email address</p>
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
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={enterpriseClicked} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
              </div>
            </div>
          </div>
        </form>
        </>
     );
}
 
export default WebHostingComponent;