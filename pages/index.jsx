import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import WebHostingComponent from "@/components/Hosting";
import SSLComponent from "@/components/SSLCompent";
import EmailComponent from "@/components/EmailComponent";

const HomePage = () => {

  const [domainOperation, setDomainOperation] = useState("register");
  const [hostingOperation, setHostingOperation] =useState("web hosting");
  const [domainOp, setDomainOp] = useState(true);

  const domOpReg = () => {
    setDomainOperation("register");
  }

  const domOpTrans = () => {
    setDomainOperation("transfer");
  }

  const webHost = () => {
    setHostingOperation("web hosting");
  }

  const emailHost = () => {
    setHostingOperation("email hosting");
  }

  const sslHost = () => {
    setHostingOperation("ssl hosting");
  }

  useEffect(() => {
    if (domainOperation === 'register'){
      setDomainOp(true);
    }else{
      setDomainOp(false);
    }

    if (hostingOperation === 'web hosting'){
      setHostingOperation("web hosting");
    }else if(hostingOperation === "email hosting"){
      setHostingOperation("email hosting");
    }else {
      setHostingOperation("ssl hosting");
    }
  },[domainOperation, hostingOperation])

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

  const formSubmitted = (e) => {
    e.preventDefault();
  }
  return ( 
    <>
    <Head>
      <title>Home Page - IruHost</title>
    </Head>
    <section id="hero" className="h-[calc(100vh-100px)] w-screen bg-transparent">
      <div className="h-full w-full flex flex-col justify-center items-center px-2 sm:px-20">
        <h2 className="font-bold text-accent text-3xl sm:text-5xl mb-10">Find everything you need to go digital</h2>
        <form onSubmit={formSubmitted} className="h-max w-full sm:w-1/2">
          <div className="h-max w-full flex items-center justify-center mb-10">
            <div className="h-max w-max bg-grey rounded">
              <button onClick={domOpReg} className={`py-3 pl-3 pr-1 text-xl
                ${domainOp ? "bg-primary rounded-l" : "opacity-50"}
                `}>Register</button>
              <button onClick={domOpTrans} className={`py-3 pr-3 pl-1 text-xl
                ${domainOp ? "opacity-50" : "bg-primary rounded-r"}
                `}>Transfer</button>
            </div>
          </div>
          <div className="w-full h-max flex items-center">
            <input type="text" className="h-[45px] rounded-l w-[80%] outline-none text-base px-5" placeholder="Search domain name" />
            <button className="h-[45px] w-[20%] bg-primary rounded-r text-text text-base">Search</button>
          </div>
        </form>
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
                    <div className="imgs-container">
                        <div className="system-img-container">
                            <img src="assets/imgs/Screenshot (310).png" alt="" className="system-img scroller-img" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="imgs-container">
                        <div className="system-img-container">
                            <img src="assets/imgs/Screenshot (307).png" alt="" className="system-img scroller-img" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="imgs-container">
                        <div className="system-img-container">
                            <img src="assets/imgs/Screenshot (304).png" alt="" className="system-img scroller-img" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="imgs-container">
                        <div className="system-img-container">
                            <img src="assets/imgs/Screenshot (304).png" alt="" className="system-img scroller-img" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="imgs-container">
                        <div className="system-img-container">
                            <img src="assets/imgs/Screenshot (304).png" alt="" className="system-img scroller-img" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <section id="hosting" className="w-screen h-max px-2 sm:px-20 py-20 bg-background">
      <h2 className="text-center text-4xl mb-10 font-bold text-accent">Join the league</h2>
      <p className="text-center text-accent text-base text-semibold mb-10">Join the thousands of people who trust in IruHost to put their business online and make the look good doing it.</p>
      <div className="w-full h-max flex justify-center mb-20">
        <div className="h-max w-max bg-grey rounded">
          <button onClick={webHost} className={`py-3 pl-3 pr-1 text-base sm:text-xl 
            ${hostingOperation === "web hosting" ? "bg-primary rounded-l" : "opacity-50"}`
            }>Web Hosting</button>
          <button onClick={emailHost} className={`py-3 px-3 text-base sm:text-xl
            ${hostingOperation === "email hosting" ? "bg-primary" : "opacity-50"}
            `}>Email Hosting</button>
          <button onClick={sslHost} className={`py-3 pr-3 pl-1 text-base sm:text-xl
            ${hostingOperation === "ssl hosting" ? "bg-primary rounded-r" : "opacity-50"}
            `}>SSL Certificate</button>
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
      </div>
    </section>
    <section className="w-screen h-max px-2 sm:px-20 py-20 relative bg-bars">
      <div className="w-full h-max flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-10 text-accent text-center">Best Choice for Your Business</h2>
        <p className="text-xl text-center mb-12 text-accent">We combine affordable pricing, reliable infrastructure, and 24/7 support to give you everything you need to succeed online. From first domain to enterprise grade hosting, we've got you covered.</p>
        <Link href={"/"} className="bg-primary rounded text-text py-2 px-4">Get Started</Link>
      </div>
    </section>
    <section className="h-max w-full flex flex-col sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
      <div className="h-max w-full sm:w-1/2 flex justify-start mb-10 sm:mb-0">
        <img src="/online-presence.jpg" className="h-[360px] w-[480px] rounded" alt="online presence" />
      </div>
      <div className="h-max w-full sm:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-text text-start">Why Thousands Trust Us for Their Online Presence</h2>
        <p className="text-base text-text text-start mb-5">We deliver lightening-fast servers, unbeatable pricing, and friendly support so you can focus on your business-not your hosting.</p>
        <ul className="text-text text-start text-base list-disc pl-5">
          <li>99% Uptime Guarantee - Your website stays online always.</li>
          <li>Free SSL Certificate - Secure your site at no extra cost.</li>
          <li>One-Click Setup - Get started in minutes</li>
          <li>24/7 Expert Support - Real humans, ready to help anytime.</li>
        </ul>
      </div>
    </section>
    <section className="h-max w-full flex flex-col-reverse sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
      <div className="h-max w-full sm:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-text text-start">Everything You Need to go Online - In One Place</h2>
        <p className="text-base text-text text-start">From registering your domain to hosting your site and securing it with SSL, we make it simple, fast, and affordable to build your digital brand.</p>
      </div>
      <div className="h-max w-full sm:w-1/2 flex justify-end mb-10 sm:mb-0">
        <img src="/everything.jpg" className="h-[360px] w-[480px] rounded" alt="" />
      </div>
    </section>
    </>
   );
}
 
export default HomePage;