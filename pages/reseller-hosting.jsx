import ResellerComponent from "../components/ResellerComponent";
import FAQs from "@/components/Faq";
import Head from "next/head";

const ResellerHosting = () => {
    return ( 
        <>
        <Head>
            <title>Reseller Hosting - IruHost</title>
        </Head>
        <section id="hero" className="h-[calc(100vh-100px)] w-screen bg-background">
            <div className="h-full w-full flex flex-col justify-center items-center px-2 sm:px-20">
                <h1 className="font-bold text-accent text-center text-3xl sm:text-5xl mb-10">Start Your Own Hosting Business Today</h1>
                <p className="text-accent text-base font-semibold mb-10">Sell web hosting under your own brand with powerful reseller hosting powered by cPanel & WHM.</p>
                <a href="#hostings" className="bg-primary rounded text-text py-2 px-4">Choose a Plan</a>
            </div>
        </section>
        <section id="hostings" className="h-max w-screen px-3 sm:px-10 py-[50px] bg-background">
            <h2 className="pb-[50px] text-center text-xl sm:text-3xl font-bold text-accent">Choose Plan</h2>
            <ResellerComponent />
        </section>
        <section className="relative h-max w-screen bg-accent text-text">
            <h2 className="pt-[50px] sm:pt-[150px] pb-[50px] text-center text-3xl font-semibold">WHY CHOOSE US?</h2>
            <div className="h-max w-full flex flex-col flex-wrap sm:flex-row items-center justify-around pb-20">
                <div className="cards-shadow h-[270px] w-[360px] rounded p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/new-brand.png" alt="" />
                    </div>
                    <h3 className="py-3 text-center text-xl font-semibold">Start Your Own Hosting Brand</h3>
                    <p className="py-3 text-center text-sm">Launch your own web hosting company under your own brand. Our white-label reseller hosting lets you sell hosting services without managing servers or infrastructure.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/full-control.png" alt="" />
                    </div>
                    <h3 className="py-3 text-center text-xl font-semibold">Full Control with WHM</h3>
                    <p className="py-3 text-center text-sm">Manage all your customer hosting accounts from one powerful dashboard. Create packages, allocate resources, suspend accounts, and control everything with WHM.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/unlimited-hosting.png" alt="" />
                    </div>
                    <h3 className="py-3 text-center text-xl font-semibold">Create Unlimited Hosting Plans</h3>
                    <p className="py-3 text-center text-sm">Design your own hosting packages with custom pricing. Sell shared hosting, business hosting, or developer plans to your clients.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/new-income.png" alt="" />
                    </div>
                    <h3 className="py-3 text-center text-xl font-semibold">Earn Recurring Income</h3>
                    <p className="py-3 text-center text-sm">Build a steady monthly income by charging clients for hosting services. As your clients grow, your revenue grows too.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/new-secure.png" alt="" />
                    </div>
                    <h3 className="py-3 text-center text-xl font-semibold">Free SSL for Every Client</h3>
                    <p className="py-3 text-center text-sm">Provide secure websites for all your customers with free SSL certificates included with every hosting account.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/new-reliable.png" alt="" />
                    </div>
                    <h3 className="py-3 text-center text-xl font-semibold">Reliable SSD Servers</h3>
                    <p className="py-3 text-center text-sm">Our high-performance SSD servers ensure fast loading websites and reliable uptime for your customers.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/new-management.png" alt="" />
                    </div>
                    <h3 className="py-3 text-center text-xl font-semibold">Easy Client Management</h3>
                    <p className="py-3 text-center text-sm">Quickly create, modify, or suspend hosting accounts. Manage all your customers from a single dashboard without technical complexity.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/support-icon.png" alt="" />
                    </div>
                    <h3 className="py-3 text-center text-xl font-semibold">24/7 Expert Support</h3>
                    <p className="py-3 text-center text-sm">Our technical team is available to assist you whenever you need help with servers, hosting setup, or troubleshooting.</p>
                </div>
            </div>
        </section>
        <FAQs />
        </>
     );
}
 
export default ResellerHosting;