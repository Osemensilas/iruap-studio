import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";

const HomePage = () => {

  const [domainOperation, setDomainOperation] = useState("register");
  const [hostingOperation, setHostingOperation] =useState("web hosting");
  const [hostingOp, setHostingOp] = useState("web");
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
          <button onClick={webHost} className={`py-3 pl-3 pr-1 text-xl 
            ${hostingOperation === "web hosting" ? "bg-primary rounded-l" : "opacity-50"}`
            }>Web Hosting</button>
          <button onClick={emailHost} className={`py-3 px-3 text-xl
            ${hostingOperation === "email hosting" ? "bg-primary" : "opacity-50"}
            `}>Email Hosting</button>
          <button onClick={sslHost} className={`py-3 pr-3 pl-1 text-xl
            ${hostingOperation === "ssl hosting" ? "bg-primary rounded-r" : "opacity-50"}
            `}>SSL Certificate</button>
        </div>
      </div>
      <div className="h-max w-full">
        <div className=""></div>
        <form className="h-max w-full flex justify-between items-center">
          <div className="card border rounded border-grey py-8 px-3 w-1/4 h-[80vh] relative">
            <h2 className="text-2xl font-semibold text-accent mb-4">Starter</h2>
            <p className="text-accent text-sm mb-4">Ideal for beginner/personal website</p>
            <p className="text-grey mb-4"><span className="line-through">$9.35</span> Save 80%</p>
            <h2 className="text-3xl text-accent text-semibold mb-4">$1.87<span className="text-base">/month</span></h2>
            <div className="w-full h-max border-t border-grey pt-4">
              <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>1 Website</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>10,000 Monthly Visitors</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-microchip text-accent mr-2"></i>1GB RAM</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>FREE CPANEL</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-bolt text-accent mr-2"></i>FREE LiteSpeed</p>
              <p className="text-accent text-sm mb-1"><i className="fa fa-certificate text-accent mr-2"></i>FREE SSL</p>
            </div>
            <div className="absolute top-[90%] left-0 h-max w-full px-3">
              <button className="bg-primary w-full h-max text-text text-base font-bold py-2 rounded">ORDER NOW</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    </>
   );
}
 
export default HomePage;