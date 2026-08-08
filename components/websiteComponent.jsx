import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const WebsiteComponent = () => {

    const router = useRouter();

    const [hostingStarterPrice, setHostingStarterPrice] = useState(150000);
    const [hostingGrowthPrice, setHostingGrowthPrice] = useState(250000);
    const [hostingProPrice, setHostingProPrice] = useState(300000);
    const [hostingEnterprisePrice, setHostingEnterprisePrice] = useState(650000);
    const [billingCycle, setBillingCycle] = useState("year");
    const [freeDomain, setFreeDomain] = useState(false);
    const [showConsult, setShowConsult] = useState(false);

    const [mainName, setMainName] = useState('');
    const [mainPrice, setMainPrice] = useState('');
    const [mainBilling, setMainBilling] = useState('');

    const hostingClicked = async (name, price,renew) => {

      setShowConsult(true);
    }

    const removeConsult = () => {
      setShowConsult(false);
    }

    const [expandTerms, setExpandTerms] = useState(false);
    const [error, setError] = useState('');
    const [noError, setNoError] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [formData, setFormData] = useState({
        'firstname': '',
        'lastname': '',
        'phone': '',
        'code': '',
        'email': '',
    });

    const cancelClicked = () => {
        setExpandTerms(false);
    }

    const showTerms = () => {
        setExpandTerms(true);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value})
    }

    const formSubmitted = async () => {
      setBtnClicked(true);

      let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (formData.firstname === '' || formData.lastname === '' || formData.email === '' || 
          formData.code === '' || formData.phone === ''
      ){
          setError("All field required");
          setBtnClicked(false);
          return;
      }else{
          setError("");
      }

      if (!emailVal.test(formData.email)){
          setError("Invalid email address");
          setBtnClicked(false);
          return;
      }else{
          setError("");
      }
      
      try {
          let url = "https://backend.iruhost.com/api/consult";

          const response = await axios.post(url, formData, {
              headers: {
                  "Content-Type" : "application/json",
              },withCredentials: true
          })

          if (response.data.status === 'error'){
              setError(response.data.message);
          }else{
              setError("");
              setNoError(true);
              setFormData({
                'firstname': '',
                'lastname': '',
                'phone': '',
                'code': '',
                'email': '',
              });
          }
          setBtnClicked(false);
      } catch (error) {
          console.log("Error sending data: ", error);
          setBtnClicked(false);
      }
  }

    useEffect(() => {
      if (noError){
          setTimeout(() => {
              setNoError(false);
          }, 10000);
      }
    },[noError])
  
    return ( 
        <>
        <form onSubmit={(e) => e.preventDefault()} className="h-max w-full">
          <input type="text" name="mainName" value={mainName} onChange={(e) => setMainName(e.target.value)} hidden/>
          <input type="text" name="mainPrice" value={mainPrice} onChange={(e) => setMainPrice(e.target.value)} hidden/>
          <input type="text" name="mainBilling" value={mainBilling} onChange={(e) => setMainBilling(e.target.value)} hidden/>
          <div className="h-max w-full flex flex-col sm:flex-row px-3 justify-between items-start">
            <div className="card border w-full mb-5 sm:mb-0 rounded border-grey py-8 px-2 sm:w-[24%] h-max sm:h-[125vh] relative">
              <h2 className="text-2xl font-semibold text-accent mb-4">Starter</h2>
              <p className="text-accent text-sm mb-4">Small businesses, consultants, professional services</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingStarterPrice).toLocaleString()}<span className="text-base"></span></h2>
              <h2 className="text-xl text-accent text-semibold mb-4">Renewal at ₦{Number(50000).toLocaleString()}<span className="text-base">/{billingCycle}</span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>5-page professional website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-paint-brush text-accent mr-2"></i>Custom design</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-mobile text-accent mr-2"></i>Mobile responsive</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-address-book text-accent mr-2"></i>Contact form & social media integration</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>Domain registration</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>1 year hosting</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>Professional Email(3 acounts)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-lock text-accent mr-2"></i>FREE SSL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-search text-accent mr-2"></i>Best SEO setup</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>2 rounds of revision</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-life-ring text-accent mr-2"></i>30 days post-launch support</p>
              </div>
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={() => hostingClicked("Starter", {
                        price: hostingStarterPrice},
                        {
                        renew: 50000 })} value={"starter"} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">BOOK CONSULTATION</button>
              </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-primary py-8 px-3 sm:w-[24%] h-max sm:h-[125vh] relative">
              <div className="absolute -top-5 left-0 h-max w-full flex items-center justify-center">
                <span className="bg-primary text-accent rounded text-sm sm:text-base font-semibold py-2 px-4">Most Popular</span>
              </div>
              <h2 className="text-2xl font-semibold text-accent mb-4">Business PRO</h2>
              <p className="text-accent text-sm mb-4">Growing businesses, agencies, organisation</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingGrowthPrice).toLocaleString()}<span className="text-base"></span></h2>
              <h3 className="text-xl text-accent text-semibold mb-4">Renews at ₦{Number(80000)}<span className="text-base">/{billingCycle}</span></h3>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>10-page professional Website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-paint-brush text-accent mr-2"></i>Custom design & advanced features</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-calendar text-accent mr-2"></i>Booking/contact systems</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-bullhorn text-accent mr-2"></i>Blog/news section</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-credit-card text-accent mr-2"></i>Payment Integration(Optional)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>Domain Registration</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>1 year premium hosting</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>Professional Email(5 account)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-lock text-accent mr-2"></i>SSL Certificate</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-search text-accent mr-2"></i>Advanced SEO & analytics</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>3 rounds revisions</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-life-ring text-accent mr-2"></i>60 days post-launch support</p>
              </div>
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={() => hostingClicked("Business Pro", {
                        price: hostingGrowthPrice},
                        {
                        renew: 80000})} value={"Business Pro"} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">BOOK CONSULTATION</button>
              </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[24%] h-max sm:h-[125vh] relative">
              <h2 className="text-2xl font-semibold text-accent mb-4">E-commerce Standard</h2>
              <p className="text-accent text-sm mb-4">Online stores, retailer, product businesses</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingProPrice).toLocaleString()}<span className="text-base"></span></h2>
              <h3 className="text-xl text-accent text-semibold mb-4">Renews at ₦{Number(120000).toLocaleString()}<span className="text-base">/{billingCycle}</span></h3>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-shopping-bag text-accent mr-2"></i>Full e-commerce website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-shopping-cart text-accent mr-2"></i>Shopping cart & secure checkout</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-credit-card text-accent mr-2"></i>Payment gateway integration (Paystack/Flutterwave)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-th-large text-accent mr-2"></i>Product catalog (up to 100 products)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-tags text-accent mr-2"></i>Inventory management</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-columns text-accent mr-2"></i>Order management dashboard</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>Custom accounts</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-truck text-accent mr-2"></i>Shipping options</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>Domain registration</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>1 year e-commerce hosting</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>Professional email (5 account)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-lock text-accent mr-2"></i>SSL Certificate</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-cubes text-accent mr-2"></i>Product upload (first 20 products)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-life-ring text-accent mr-2"></i>90 days post-launch support</p>
              </div>
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={() => hostingClicked("E-commerce Standard", {
                        price: hostingProPrice},
                        {
                        renew: 120000})} value={"E-commerce Standard"} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">BOOK CONSULTATION</button>
              </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[24%] h-max sm:h-[125vh] relative">
              <h2 className="text-2xl font-semibold text-accent mb-4">E-commerce Premium</h2>
              <p className="text-accent text-sm mb-4">Serious retailers, Scaling businesses</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(hostingEnterprisePrice).toLocaleString()}<span className="text-base"></span></h2>
              <h3 className="text-xl text-accent text-semibold mb-4">Renews at ₦{Number(200000).toLocaleString()}<span className="text-base">/{billingCycle}</span></h3>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className={`text-accent text-sm mb-1
                  ${freeDomain ? "" : "hidden"}
                  `}><i className="fa fa-globe text-accent mr-2"></i>FREE Domain Name for 1 Year</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-gift text-accent mr-2"></i>Everything in e-commerce standard</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-th-large text-accent mr-2"></i>Unlimited product</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-cogs text-accent mr-2"></i>Advanced features (multi-vendor marketplace option)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-mobile text-accent mr-2"></i>Mobile app (PWA)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-bullhorn text-accent mr-2"></i>Marketing automation</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-table text-accent mr-2"></i>Advanced analytics & reports</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-star text-accent mr-2"></i>Custom reviews & ratings</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-gift text-accent mr-2"></i>Loyalty program</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-shopping-cart text-accent mr-2"></i>Advanced cart recovery</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-camera text-accent mr-2"></i>Product photography assistance</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-life-ring text-accent mr-2"></i>6 months post-launch support</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-phone text-accent mr-2"></i>monthly strategy calls</p>
              </div>
              <div className="relative sm:absolute top-0 sm:top-[90%] left-0 h-max w-full mt-10 sm:mt-0 px-3">
                <button onClick={() => hostingClicked("E-commerce Premium", {
                        price: hostingEnterprisePrice},
                        {
                        renew: 200000})} value={"E-commerce Premium"} className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">BOOK CONSULTATION</button>
              </div>
            </div>
          </div>
        </form>
        <section className={`"h-screen w-screen absolute top-0 left-0
          ${showConsult ? "" : "hidden"}
          `}>
          <div className="h-screen w-screen flex items-center justify-center px-3 sm:px-0">
            <div className="h-max w-max mx-auto bg-accent rounded cards-shadow p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-text text-center">Let a professional contact you</h2>
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-full sm:w-[450px] space-y-6 mt-10">
                    <div className={`bg-danger text-accent rounded py-2 text-center
                    ${error ? "" : "hidden"}
                    `}>{error}</div>
                    <div className={`bg-green-500 text-accent rounded py-2 text-center
                    ${noError ? "" : "hidden"}
                    `}>Thank you, Our agent will contact you.</div>
                    <div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-1">
                                        <label htmlFor="firstname" className="block text-sm font-medium text-grey mb-1">First Name:</label>
                                        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} id="firstname" className="w-full border border-grey rounded px-3 py-2 outline-none" />
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="lastname" className="block text-sm font-medium text-grey mb-1">Last Name:</label>
                                        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} id="lastname" className="w-full border border-grey rounded px-3 py-2 outline-none" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-grey mb-1">Phone Number:</label>
                                <div className="flex gap-2">
                                    <input name="code" value={formData.code} onChange={handleChange} className="border border-grey w-[20%] rounded px-2 py-2 bg-transparent outline-none" placeholder="+1" />
                                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} id="phone" className="flex-1 w-[80%] border border-grey rounded px-3 py-2 outline-none" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-grey mb-1">Email:</label>
                                <input type="text" name="email" value={formData.email} onChange={handleChange} id="email" className="w-full border border-grey rounded px-3 py-2 outline-none" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-neutralDark">
                            *By submitting your information you provide written consent to IruHost.com and its affiliates contacting you.
                            <span onClick={showTerms} className="text-primary underline cursor-pointer full-details ml-1">See full details.</span>
                        </p>
                    </div>
                    <div className="w-full h-max flex items-center gap-3">
                        <button type="submit" onClick={formSubmitted} className="bg-primary text-white rounded py-2 px-6 font-semibold">{
                            btnClicked ? (
                                <img src="/loading.gif" alt="loading image" className="h-5 w-5" />
                            ) : (
                                <span>Let's Discuss</span>
                            )
                            }</button>
                          <button onClick={removeConsult} type="button" className="bg-danger text-white rounded py-2 px-6 font-semibold">Cancel</button>
                    </div>
                </form>
            </div>
            <div className={`fixed top-0 left-0 w-screen h-screen items-center justify-center after-css
                ${expandTerms ? "flex" : "hidden"}
                `}>
                <div className="relative z-50 bg-accent w-[450px] h-max rounded shadow p-6 full-detail">
                    <div className="flex items-center justify-between mb-4 full-detail-top">
                        <h2 className="text-xl font-bold text-primary">Information Details</h2>
                        <div onClick={cancelClicked} className="full-detail-close-container">
                            <div className="text-red-500 cursor-pointer full-detail-close">Close</div>
                        </div>
                    </div>
                    <div className="full-detail-content">
                        <p className="text-sm text-neutralDark">
                        *By submitting your information you expressly consent to IruHost.com and its affiliates contacting you regarding our services and offering through your email address, voice (which may be auto-dialed or pre-recorded), text(WhatsApp or text message). Your are not required to give consent to make purchase with us and you can find additional information on our <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
     );
}
 
export default WebsiteComponent;