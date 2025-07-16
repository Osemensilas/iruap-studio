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
    </>
   );
}
 
export default HomePage;