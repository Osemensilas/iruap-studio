import WebHostingComponent from "@/components/Hosting";

const Hosting = () => {
    return ( 
        <>
        <section id="hero" className="h-[calc(100vh-100px)] w-screen bg-transparent">
            <div className="h-full w-full flex flex-col justify-center items-center px-2 sm:px-20">
                <h1 className="font-bold text-accent text-center text-3xl sm:text-5xl mb-10">Fast, Secure & Affordable Web Hosting for Everyone</h1>
                <p className="text-accent text-base font-semibold mb-10">Get reliable hosting with free SSL, business email, and 99.9% uptime—starting at just $X/month</p>
                <a href="#hostings" className="bg-primary rounded text-text py-2 px-4">Choose a Plan</a>
            </div>
        </section>
        <section id="hostings" className="h-max w-screen px-3 sm:px-10 py-[50px] bg-background">
            <h2 className="pb-[50px] text-center text-xl sm:text-3xl font-bold text-accent">Choose Plan</h2>
            <WebHostingComponent />
        </section>
        <section className="relative h-max w-screen bg-accent text-text">
            <h2 className="pt-[50px] sm:pt-[150px] pb-[50px] text-center text-3xl font-semibold">WHY CHOOSE US?</h2>
            <div className="h-max w-full flex flex-col flex-wrap sm:flex-row items-center justify-around pb-20">
                <div className="cards-shadow h-[270px] w-[360px] rounded p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/speed-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Lightning-Fast Performance</h2>
                    <p className="py-3 text-center text-sm">Optimized servers for speed</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/ssl-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Free SSL Certificates</h2>
                    <p className="py-3 text-center text-sm"> Keep your site secure at no extra cost</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-0">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/email-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Business Email Included</h2>
                    <p className="py-3 text-center text-sm">Look professional with email @yourdomain</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/install-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">One-Click Install</h2>
                    <p className="py-3 text-center text-sm">WordPress, Joomla, and 400+ apps</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/support-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">24/7 Expert Support</h2>
                    <p className="py-3 text-center text-sm">Always here when you need help</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/money-back-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">30-Day Money-Back Guarantee</h2>
                    <p className="py-3 text-center text-sm">No risk. No hassle. Just 30 days of worry-free hosting</p>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Hosting;