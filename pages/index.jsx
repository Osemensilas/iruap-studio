import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import WebHostingComponent from "@/components/Hosting";
import SSLComponent from "@/components/SSLCompent";
import EmailComponent from "@/components/EmailComponent";
import DomainComponent from "@/components/DomainComponent";
import Image from "next/image";
import WebsiteComponent from "@/components/websiteComponent";
import FAQs from "@/components/Faq";
import Reviews from "@/components/Reviews";
import ResellerComponent from "@/components/ResellerComponent";
import WordPressComponent from "@/components/WordPressComponent";
import { useCurrency } from "../context/CurrencyContext";

const HomePage = () => {

  const currency = useCurrency();

  console.log(currency);

  const [hostingOperation, setHostingOperation] =useState("web hosting");

  const webHost = () => {
    setHostingOperation("web hosting");
  }

  const emailHost = () => {
    setHostingOperation("email hosting");

  }

  const sslHost = () => {
    setHostingOperation("ssl hosting");
  }

  const website = () => {
    setHostingOperation("website");
  }

  const resellHost = () => {
    setHostingOperation("reseller hosting");
  }

  const wordHost = () => {
    setHostingOperation("wordpress hosting");
  }

  useEffect(() => {
    if (hostingOperation === 'web hosting'){
      setHostingOperation("web hosting");
    }else if(hostingOperation === "email hosting"){
      setHostingOperation("email hosting");
    }else if(hostingOperation === "website"){
      setHostingOperation("website");
    }else if(hostingOperation === "wordpress hosting"){
      setHostingOperation("wordpress hosting");
    }else if(hostingOperation === "reseller hosting"){
      setHostingOperation("reseller hosting");
    }else{
      setHostingOperation("ssl hosting");
    }
  },[hostingOperation])

  const optionChanged = (e) => {
    const chosenOption = e.currentTarget.value;

    if (chosenOption === 'web hosting'){
      setHostingOperation("web hosting");
    }else if(chosenOption === "email hosting"){
      setHostingOperation("email hosting");
    }else if(chosenOption === "website"){
      setHostingOperation("website");
    }else if(chosenOption === "wordpress hosting"){
      setHostingOperation("wordpress hosting");
    }else if(chosenOption === 'reseller hosting'){
      setHostingOperation("reseller hosting");
    }else{
      setHostingOperation("ssl hosting");
    }
  }

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motio: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = document.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  },[])

  return ( 
    <>
    <Head>
      <title>Cheap Web Hosting in Nigeria | Fast & Reliable - IruHost</title>
<meta 
    name="description" 
    content="Affordable web hosting in Nigeria with 99.9% uptime, free SSL, daily backups & 24/7 local support. Shared, VPS, Reseller & Business hosting plans starting at ₦500/month. Host your website today!" 
  />
      <link rel="canonical" href="https://iruhost.com/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "IruHost",
            "url": "https://iruhost.com",
            "logo": "https://iruhost.com/logo.png",
            "image": "https://iruhost.com/logo.png",
            "sameAs": [
              "https://web.facebook.com/profile.php?id=61579213176080",
              "https://x.com/iruapsudio",
              "https://www.youtube.com/@IruapStudio"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234-816-831-8983",
              "contactType": "customer support",
              "availableLanguage": "English"
            }
          }),
        }}
      />

    </Head>
    <section id="hero" className="h-[calc(100vh-100px)] w-screen bg-background">
      <div className="h-full w-full flex flex-col justify-center items-center px-2 sm:px-20">
        <h1 className="font-bold text-accent text-center text-2xl sm:text-5xl mb-10 leading-loose">Reliable Web Hosting in Nigeria – Fast, Secure & Local Support</h1>
<p className="text-accent text-base mb-5 text-center">Lightning-fast web hosting servers in Nigeria • Free SSL certificates • 24/7 local support • Plans from ₦500/month</p>
          <DomainComponent />
        <div className="h-max w-full flex items-center justify-center mt-10">
          <p className="text-accent text-base">Popular Series:</p>
          <ul className="h-max w-max flex items-center gap-5 ml-5">
            <li className="text-accent">.com</li>
            <li className="text-accent">.net</li>
            <li className="text-accent">.org</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="scroller-container">
        <div className="scroller" data-direction="left">
            <ul className="tag-list scroller_inner">
                <li>
                    <div className="h-[70px] w-[200px]">
                        <div className="system-img-container">
                            <img src="cpanel-seeklogo.png" alt="" className="system-img scroller-img" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="imgs-container">
                        <div className="system-img-container">
                            <img src="Lets-Encrypt-Logo.png" alt="" className="system-img scroller-img" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="imgs-container">
                        <div className="system-img-container">
                            <img src="whmcs_logo_white_green.png" alt="" className="system-img scroller-img" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="imgs-container">
                        <div className="system-img-container">
                            <img src="icann-seeklogo.png" alt="" className="system-img scroller-img" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="h-[100px] w-[60px]">
                        <div className="system-img-container">
                            <img src="figma-seeklogo.png" alt="" className="system-img scroller-img" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <section id="hosting" className="w-screen h-max px-2 sm:px-20 py-20 bg-background">
      <h2 className="text-center text-4xl mb-10 font-bold text-accent">Join Businesses Growing Online with IruHost</h2>
      <p className="text-center text-accent text-base text-semibold mb-10">Join hundreds of individuals, startups, and businesses in Nigeria who trust IruHost for fast, secure, and affordable web hosting solutions.</p>
      <div className="w-full h-max flex justify-center mb-20">
        <div className="h-max w-max bg-grey rounded sm:block hidden">
          <button onClick={webHost} className={`py-3 pl-3 pr-1 text-sm sm:text-xl 
            ${hostingOperation === "web hosting" ? "bg-primary rounded-l" : "opacity-50"}`
            }>Shared Hosting</button>
          <button onClick={wordHost} className={`py-3 pl-3 pr-1 text-sm sm:text-xl 
            ${hostingOperation === "wordpress hosting" ? "bg-primary rounded-l" : "opacity-50"}`
            }>WordPress Hosting</button>
          <button onClick={resellHost} className={`py-3 pl-3 pr-1 text-sm sm:text-xl 
            ${hostingOperation === "reseller hosting" ? "bg-primary rounded-l" : "opacity-50"}`
            }>Reseller Hosting</button>
          <button onClick={emailHost} className={`py-3 px-3 text-sm sm:text-xl
            ${hostingOperation === "email hosting" ? "bg-primary" : "opacity-50"}
            `}>Email Hosting</button>
          <button onClick={sslHost} className={`py-3 pr-3 pl-1 text-sm sm:text-xl
            ${hostingOperation === "ssl hosting" ? "bg-primary rounded-r" : "opacity-50"}
            `}>SSL Certificate</button>
          <button onClick={website} className={`py-3 pr-3 pl-1 text-sm sm:text-xl
            ${hostingOperation === "website" ? "bg-primary rounded-r" : "opacity-50"}
            `}>Website</button>
        </div>
        <div className="h-max w-max bg-grey rounded sm:hidden block">
          <select name="hostingOptions" className="w-max h-10 rounded border border-accent px-5 bg-transparent" onChange={optionChanged} id="hostingOptions">
            <option value="web hosting">Shared Hosting</option>
            <option value="wordpress hosting">WordPress Hosting</option>
            <option value="reseller hosting">Reseller Hosting</option>
            <option value="email hosting">Email Hosting</option>
            <option value="ssl hosting">SSL Certificate</option>
            <option value="website">Website</option>
          </select>
        </div>
      </div>
      <div className="h-max w-full">
        <div className={`h-max w-full
          ${hostingOperation === "web hosting" ? "block" : "hidden"}
          `}>
          <WebHostingComponent />
        </div>
        <div className={`h-max w-full
          ${hostingOperation === "ssl hosting" ? "block" : "hidden"}
          `}>
          <SSLComponent />
        </div>
        <div className={`h-max w-full
          ${hostingOperation === "email hosting" ? "block" : "hidden"}
          `}>
          <EmailComponent />
        </div>
        <div className={`h-max w-full
          ${hostingOperation === "website" ? "block" : "hidden"}
          `}>
          <WebsiteComponent />
        </div>
        <div className={`h-max w-full
          ${hostingOperation === "reseller hosting" ? "block" : "hidden"}
          `}>
          <ResellerComponent />
        </div>
        <div className={`h-max w-full
          ${hostingOperation === "wordpress hosting" ? "block" : "hidden"}
          `}>
          <WordPressComponent />
        </div>
      </div>
    </section>
    <section className="w-screen h-max px-2 sm:px-20 py-20 relative bg-bars">
      <div className="w-full h-max flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-10 text-accent text-center">A Better Hosting Experience for Your Business</h2>
        <p className="text-xl text-center mb-12 text-accent">We combine affordable pricing, fast servers, and reliable 24/7 support to give you everything you need to build and grow your website with confidence.</p>
        <Link href={"/domain"} className="bg-primary rounded text-text py-2 px-4">Get Started</Link>
      </div>
    </section>
    <section className="h-max w-screen bg-accent py-20 px-2 sm:px-20">
      <h2 className="text-center text-3xl text-text mb-5 font-semibold">Everything you need for your online success</h2>
      <p className="text-center text-xl text-grey mb-5 font-normal">We have got you covered</p>
      <div className="h-max w-full flex flex-col sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
        <div className="h-max w-full sm:w-1/2 flex justify-start mb-10 sm:mb-0">
          <Image src="/home/domain-illustration.png" height={360} width={480} alt="online presence" />
        </div>
        <div className="h-max w-full sm:w-1/2">
          <h2 className="text-3xl font-semibold mb-10 text-text text-start">Buy your domain name</h2>
          <p className="text-base text-text text-start">Secure the perfect domain name for your business or brand in minutes. Easily search, register, and manage your domain with transparent pricing and reliable support.</p>
          <Link href={"/domain"} className="text-xl text-primary mt-10">Search domain name <i className="fa fa-arrow-right"></i></Link>
        </div>
      </div>
      <div className="h-max w-full flex flex-col-reverse sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
        <div className="h-max w-full sm:w-1/2">
          <h2 className="text-3xl font-semibold mb-10 text-text text-start">Select the perfect hosting for your domain</h2>
          <p className="text-base text-text text-start mb-5">Choose fast and reliable web hosting in that grows with your website. Enjoy secure performance, uptime, and full control with every plan.</p>
          <Link href={"/hosting"} className="text-xl text-primary mt-5 flex items-center gap-3">Select hosting <i className="fa fa-arrow-right font-thin"></i></Link>
        </div>
        <div className="h-max w-full sm:w-1/2 flex justify-end mb-10 sm:mb-0">
          <Image src="/home/hosting-illustration.png" height={360} width={480} alt="" />
        </div>
      </div>
      <div className="h-max w-full flex flex-col sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
        <div className="h-max w-full sm:w-1/2 flex justify-start mb-10 sm:mb-0">
          <Image src="/home/professional-email-illustration.png" height={360} width={480} alt="entreprenuer" />
        </div>
        <div className="h-max w-full sm:w-1/2">
          <h2 className="text-3xl font-semibold mb-10 text-text text-start">Use professional email</h2>
          <p className="text-base text-text text-start mb-5">Get a custom email address that matches your domain and brand. Communicate with clients confidently and make every message look professional.</p>
          <Link href={"/email"} className="text-xl text-primary mt-5">Buy professional email <i className="fa fa-arrow-right"></i></Link>
        </div>
      </div>
      <div className="h-max w-full flex flex-col-reverse sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
        <div className="h-max w-full sm:w-1/2">
          <h2 className="text-3xl font-semibold mb-10 text-text text-start">Secure your website with SSL</h2>
          <p className="text-base text-text text-start mb-20">Protect your website and your visitors with SSL encryption. Build trust, boost SEO, and keep your data safe with a secure connection for every page.</p>
          <Link href={"/ssl"} className="text-xl text-primary mt-5">choose your plan <i className="fa fa-arrow-right"></i></Link>
        </div>
        <div className="h-max w-full sm:w-1/2 flex justify-end mb-10 sm:mb-0">
          <Image src="/home/ssl-illustration.png" height={360} width={480} alt="hosting" />
        </div>
      </div>
      <div className="h-max w-full flex flex-col sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
        <div className="h-max w-full sm:w-1/2 flex justify-start mb-10 sm:mb-0">
          <Image src="/home/web-dev-illustration.png" height={360} width={480} alt="entreprenuer" />
        </div>
        <div className="h-max w-full sm:w-1/2">
          <h2 className="text-3xl font-semibold mb-10 text-text text-start">Hire us to build your website</h2>
          <p className="text-base text-text text-start mb-5">Let our team design and build a modern, high-performing website that aligns with your brand. From concept to launch, we handle everything so you can focus on growing your business.</p>
          <Link href={"/web-development"} className="text-xl text-primary mt-5">Hire us <i className="fa fa-arrow-right"></i></Link>
        </div>
      </div>
    </section>
    <section className="h-max w-screen bg-accent py-20 px-2 sm:px-20">
      <h2 className="text-center text-3xl text-text mb-5 font-semibold">Why Choose IruHost</h2>
      <p className="text-center text-xl text-grey mb-5 font-normal">It's simple. You are at the center of our thought process.</p>
      <div className="h-max w-full flex flex-col sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
        <div className="h-max w-full sm:w-1/2 flex justify-start mb-10 sm:mb-0">
          <Image src="/home/why1.png" height={360} width={480} alt="online presence" />
        </div>
        <div className="h-max w-full sm:w-1/2">
          <h2 className="text-3xl font-semibold mb-10 text-text text-start">Secure Web Hosting You Can Trust</h2>
          <p className="text-base text-text text-start">Your website is protected with advanced security systems, free SSL certificates, and continuous monitoring to prevent threats. Our secure hosting environment ensures your data and customers stay safe at all times.</p>
        </div>
      </div>
      <div className="h-max w-full flex flex-col-reverse sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
        <div className="h-max w-full sm:w-1/2">
          <h2 className="text-3xl font-semibold mb-10 text-text text-start">Reliable Hosting for Your Business</h2>
          <p className="text-base text-text text-start mb-5">We provide fast and reliable web hosting in Nigeria designed to help businesses launch, manage, and grow online. From domain registration to scalable hosting, everything you need is in one place.</p>
        </div>
        <div className="h-max w-full sm:w-1/2 flex justify-end mb-10 sm:mb-0">
          <Image src="/home/why2.png" height={360} width={480} alt="" />
        </div>
      </div>
      <div className="h-max w-full flex flex-col sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
        <div className="h-max w-full sm:w-1/2 flex justify-start mb-10 sm:mb-0">
          <Image src="/home/why3.png" height={360} width={480} alt="entreprenuer" />
        </div>
        <div className="h-max w-full sm:w-1/2">
          <h2 className="text-3xl font-semibold mb-10 text-text text-start">24/7 Local Support</h2>
          <p className="text-base text-text text-start mb-5">Get real help whenever you need it. Our local support team is available 24/7 to assist with technical issues, questions, and upgrades so your website never slows you down.</p>
          <Link href={"/contact-support"} className="text-xl text-primary mt-5">Goto Support</Link>
        </div>
      </div>
    </section>
    <Reviews />
    <FAQs />
    <section className="h-max w-screen py-10 px-3 sm:px-20 bg-bars">
        <div className="h-full w-full flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="h-max w-max">
                <h2 className="font-bold text-base sm:text-3xl text-accent mb-5 sm:mb-0">Buy your domain. Build your brand.</h2>
            </div>
            <div className="h-max w-max">
                <Link href={"/domain"} className="bg-primary rounded text-text py-2 px-4">Find your domain</Link>
            </div>
        </div>
    </section>
    </>
   );
}
 
export default HomePage;