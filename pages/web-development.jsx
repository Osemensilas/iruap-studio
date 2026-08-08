import { useState } from "react";
import ConsultComponent from "@/components/ConsultComponent";
import WorksComponent from "@/components/WorksComponent";
import Head from "next/head";
import WebsiteComponent from "@/components/websiteComponent";
import FAQs from "@/components/Faq";
import Reviews from "@/components/Reviews";
import Scroller from "@/components/website/Scroller";
import Hero from "@/components/website/Hero";

const WebDevelopment = () => {

    const [testimonialIndex, setTestimonialIndex] = useState(0);

    return ( 
        <>
        <Head>
            <title>Web Development Services in Nigeria | IruHost</title>
        </Head>
        <Hero />
        <section className="relative h-max w-screen bg-background text-text">
            <h2 className="pt-[50px] sm:pt-[150px] pb-[50px] text-accent text-center text-3xl font-semibold">WHY CHOOSE US?</h2>
            <div className="h-max w-full flex flex-col flex-wrap sm:flex-row items-center justify-around pb-20">
                <div className="cards-shadow bg-accent h-[270px] w-[360px] rounded p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/speed-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Fast & SEO-friendly websites</h2>
                    <p className="py-3 text-center text-sm">Optimized servers for speed</p>
                </div>
                <div className="h-[270px] w-[360px] bg-accent rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/ssl-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Secure & scalable solution</h2>
                    <p className="py-3 text-center text-sm"> Keep your site secure at no extra cost</p>
                </div>
                <div className="h-[270px] w-[360px] bg-accent rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/email-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Custom design that matches your brand</h2>
                    <p className="py-3 text-center text-sm">Look professional with email @yourdomain</p>
                </div>
                <div className="h-[270px] w-[360px] bg-accent rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/install-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Affordable & transparent pricing</h2>
                    <p className="py-3 text-center text-sm">WordPress, Joomla, and 400+ apps</p>
                </div>
                <div className="h-[270px] w-[360px] bg-accent rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/support-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Ongoing support & maintenance</h2>
                    <p className="py-3 text-center text-sm">Always here when you need help</p>
                </div>
            </div>
        </section>
        <section className="h-max w-screen bg-accent px-3 sm:px-20 flex flex-col-reverse sm:flex-row items-center py-10">
            <div className="h-max w-full sm:w-1/2">
                <h2 className="text-start py-[30px] font-bold text-text text-3xl">Our Design Process</h2>
                <p className="text-start py-5 font-normal text-text text-base">We follow a simple, effective process to create websites that look great and deliver results:</p>
                <ul className="w-full h-max ml-6 list-disc marker:text-background font-normal">
                    <li className="mb-2"><span className="text-background font-semibold">Discovery</span> - We learn about your business, goals, and audience.</li>
                    <li className="mb-2"><span className="text-background font-semibold">Planning</span> - We create a sitemap and content outline for a clear structure.</li>
                    <li className="mb-2"><span className="text-background font-semibold">Design</span> - Custom, mobile-friendly designs that reflect your brand.</li>
                    <li className="mb-2"><span className="text-background font-semibold">Development</span> - Fast, SEO-friendly websites built with clean code.</li>
                    <li className="mb-2"><span className="text-background font-semibold">Testing</span> - We check speed, usability, and compatibility on all devices.</li>
                    <li className="mb-2"><span className="text-background font-semibold">Launch & Support</span> - We deploy your site and provide post-launch support.</li>
                </ul>
                <p className="text-start py-5 font-normal text-text text-base">This process keeps you involved at every step while ensuring a smooth and professional outcome.</p>
            </div>
            <div className="h-max w-full sm:w-1/2 flex items-center justify-end">
                <img src="/design.jpg" alt="" className="h-[360px] w-[480px] rounded" />
            </div>
        </section>
        <section id="our-works" className="w-full h-max py-16 bg-background px-3 sm:px-10">
            <h2 className="text-center text-accent text-4xl mb-20">Get a fully customized design tailored to your needs</h2>
            <p className="text-center text-accent text-base mb-20 px-[10%]">With mobile-first design, built-in SEO essentials, and reliable human support, our website packages give you all you need to launch, grow, and scale your business online.</p>
            <WebsiteComponent />
        </section>
        <section id="our-works" className="w-full h-max py-16 bg-background">
            <WorksComponent />
        </section>
        <section className="h-max w-full px-3 sm:px-10 bg-background">
            <h2 className="text-accent text-4xl">Projects We've Built for Clients</h2>
        </section>
        <Scroller />
        <Reviews />
        <section id="contact-us" className="w-full h-max py-16 bg-background">
            <ConsultComponent />
        </section>
        <FAQs />
        </>
     );
}
 
export default WebDevelopment;