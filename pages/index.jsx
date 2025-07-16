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
  const [testimonialIndex, setTestimonialIndex] = useState(0);

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

  const testimonials = [
    {
      text: "IruHost made launching my business website easy and affordable. Their support team is always available and super helpful!",
      name: "Chinedu Okafor",
    },
    {
      text: "The uptime and speed are fantastic. I moved all my client sites to IruHost and never looked back.",
      name: "Aisha Bello",
    },
    {
      text: "SSL, email, and hosting all in one place—no hidden fees. I recommend IruHost to every entrepreneur.",
      name: "Samuel Adeyemi",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const faqs = [
    {
      question: "How do I register a domain with IruHost?",
      answer: "Simply use our domain search tool above, choose your preferred domain name, and follow the prompts to complete your registration.",
    },
    {
      question: "Can I transfer my existing domain to IruHost?",
      answer: "Yes! Click the 'Transfer' button, enter your domain, and follow the instructions. Our support team can assist if you need help.",
    },
    {
      question: "Is SSL included with all hosting plans?",
      answer: "Absolutely. Every hosting plan comes with a free SSL certificate to keep your site secure.",
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, our expert support team is available 24/7 to help you with any issues or questions.",
    },
    {
      question: "Can I upgrade my hosting plan later?",
      answer: "You can upgrade your plan at any time as your business grows. No hidden fees or downtime.",
    },
  ];

  const [faqOpen, setFaqOpen] = useState(null);

  const handleFaqClick = (idx) => {
    setFaqOpen(faqOpen === idx ? null : idx);
  };

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
    <section className="h-max w-full flex flex-col sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
      <div className="h-max w-full sm:w-1/2 flex justify-start mb-10 sm:mb-0">
        <img src="/entreprenuer.jpg" className="h-[360px] w-[480px] rounded" alt="entreprenuer" />
      </div>
      <div className="h-max w-full sm:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-text text-start">Perfect for Entreprenuers, Creators and Agencies</h2>
        <p className="text-base text-text text-start mb-5">Whether you're a small business owner, a freelancer, or a growing agency, we have have flexible plans designed to grow with you. No hidden fees. No complicated setup. Just reliable hosting you can trust.</p>
      </div>
    </section>
    <section className="h-max w-full flex flex-col-reverse sm:flex-row items-center py-20 bg-accent px-2 sm:px-20">
      <div className="h-max w-full sm:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-text text-start">Plans Starting for Just $1.67/Month</h2>
        <p className="text-base text-text text-start mb-20">Get domain, hosting, email, and free SSL all in one simple package. No hidden fees. Upgrade anytime as you grow.</p>
        <Link href={"/hosting.jsx"} className="bg-primary rounded text-text py-2 px-4">Choose Your Plan</Link>
      </div>
      <div className="h-max w-full sm:w-1/2 flex justify-end mb-10 sm:mb-0">
        <img src="/started.jpg" className="h-[360px] w-[480px] rounded" alt="hosting" />
      </div>
    </section>
    <section className="w-full h-max py-20 bg-background flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-10 text-center">What Our Clients Say</h2>
      <div className="relative w-full max-w-xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${testimonialIndex * 100}%)`,
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-full px-6 py-8 bg-white rounded-xl shadow flex flex-col items-center justify-center"
              >
                <p className="text-lg text-text mb-6 text-center italic">
                  "{t.text}"
                </p>
                <div className="font-semibold text-primary text-center">
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation buttons, hidden on small screens */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 sm:flex hidden">
          <button
            aria-label="Previous"
            className="bg-primary text-white rounded-full shadow p-2 text-2xl"
            onClick={handlePrev}
          >
            ‹
          </button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 sm:flex hidden">
          <button
            aria-label="Next"
            className="bg-primary text-white rounded-full shadow p-2 text-2xl"
            onClick={handleNext}
          >
            ›
          </button>
        </div>
      </div>
    </section>
    <section className="w-full h-max py-20 bg-white flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-text mb-10 text-center">Frequently Asked Questions</h2>
      <div className="w-full max-w-2xl mx-auto">
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-4 border-b border-grey">
            <button
              className="w-full text-left py-4 px-2 text-lg font-semibold text-primary flex justify-between items-center focus:outline-none"
              onClick={() => handleFaqClick(idx)}
            >
              {faq.question}
              <span className="ml-2 text-grey">{faqOpen === idx ? "−" : "+"}</span>
            </button>
            {faqOpen === idx && (
              <div className="py-2 px-2 text-base text-text bg-grey rounded-b">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </>
   );
}
 
export default HomePage;