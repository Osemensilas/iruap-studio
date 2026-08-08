import FAQs from "@/components/Faq";
import WordPressComponent from "@/components/WordPressComponent";
import Head from "next/head";

const WordPress = () => {
    return ( 
        <>
        <Head>
            <title>WordPress Hosting - IruHost</title>
        </Head>
        <section id="hero" className="h-[calc(100vh-100px)] w-screen bg-background">
            <div className="h-full w-full flex flex-col justify-center items-center px-2 sm:px-20">
                <h1 className="font-bold text-accent text-center text-3xl sm:text-5xl mb-10">Fast & Secure WordPress Hosting</h1>
                <p className="text-accent text-base font-semibold mb-10">Launch your WordPress website in minutes with optimized hosting, free SSL, and powerful performance.</p>
                <a href="#hostings" className="bg-primary rounded text-text py-2 px-4">Choose a Plan</a>
            </div>
        </section>
        <section id="hostings" className="h-max w-screen px-3 sm:px-10 py-[50px] bg-background">
            <h2 className="pb-[50px] text-center text-xl sm:text-3xl font-bold text-accent">Choose Plan</h2>
            <WordPressComponent />
        </section>
        <section className="relative h-max w-screen bg-accent text-text">
            <h2 className="pt-[50px] sm:pt-[150px] pb-[50px] text-center text-3xl font-semibold">WHY CHOOSE US?</h2>
            <div className="h-max w-full flex flex-col flex-wrap sm:flex-row items-center justify-around pb-20">
                <div className="cards-shadow h-[270px] w-[360px] rounded p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/speed-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Optimized for WordPress</h2>
                    <p className="py-3 text-center text-sm">Our servers are configured specifically for WordPress to deliver fast loading speeds and smooth performance for your website.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/ssl-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">One-Click WordPress Installation</h2>
                    <p className="py-3 text-center text-sm">Launch your WordPress website in minutes with a simple one-click installer. No technical experience required.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/email-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Free SSL Security</h2>
                    <p className="py-3 text-center text-sm">Every WordPress hosting plan includes a free SSL certificate to protect your website and keep visitor data secure.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/install-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Reliable Performance</h2>
                    <p className="py-3 text-center text-sm">Enjoy stable and reliable hosting designed to keep your WordPress site online and running smoothly.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/support-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Easy Website Management</h2>
                    <p className="py-3 text-center text-sm">Manage your files, emails, and databases easily through a powerful and user-friendly control panel.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/money-back-icon.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Expert Support</h2>
                    <p className="py-3 text-center text-sm">Our support team is ready to help you with any hosting or WordPress related questions whenever you need assistance.</p>
                </div>
            </div>
        </section>
        <FAQs />
        </>
     );
}
 
export default WordPress;