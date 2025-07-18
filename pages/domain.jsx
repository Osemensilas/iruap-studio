import Head from "next/head";
import DomainComponent from "@/components/DomainComponent";

const Domain = () => {
    return ( 
        <>
        <Head>
            <title>Search Domain Name - IruHost</title>
        </Head>
        <section id="hero" className="h-[calc(100vh-100px)] w-screen bg-background">
            <div className="h-full w-full flex flex-col justify-center items-center px-2 sm:px-20">
                <h1 className="font-bold text-accent text-center text-3xl sm:text-5xl mb-10">Find Your Perfect Domain Name. Your Dream Domain Starts Here</h1>
                <p className="text-accent text-base font-semibold mb-10">Own your online identity today. Cheap, fast, and hassle-free registration</p>
                <DomainComponent />
            </div>
        </section>
        <section className="relative h-max w-screen bg-accent text-text">
            <div className="hidden sm:absolute -top-[60px] left-0 w-full h-max sm:flex flex-col sm:flex-row items-center justify-center gap-10">
                <div className="card bg-accent shadow-lg rounded p-4">
                    <div className="h-max w-full">
                        <h2 className="text-2xl font-semibold">.com</h2>
                        <p className="text-sm my-2">The king of domain</p>
                    </div>
                    <div className="h-max w-full">
                        <h2 className="text-base font-semibold">$14.90/year</h2>
                    </div>
                </div>
                <div className="card bg-accent shadow-lg rounded p-4">
                    <div className="h-max w-full">
                        <h2 className="text-2xl font-semibold">.net</h2>
                        <p className="text-sm my-2">The king of domain</p>
                    </div>
                    <div className="h-max w-full">
                        <h2 className="text-base font-semibold">$14.90/year</h2>
                    </div>
                </div>
                <div className="card bg-accent shadow-lg rounded p-4">
                    <div className="h-max w-full">
                        <h2 className="text-2xl font-semibold">.org</h2>
                        <p className="text-sm my-2">The king of domain</p>
                    </div>
                    <div className="h-max w-full">
                        <h2 className="text-base font-semibold">$14.90/year</h2>
                    </div>
                </div>
            </div>
            <h2 className="pt-[50px] sm:pt-[150px] pb-[50px] text-center text-3xl font-semibold">WHY REGISTER WITH US?</h2>
            <div className="h-max w-full flex flex-col sm:flex-row items-center justify-around pb-20">
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10 sm:mb-0">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/cheap-domain.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Affordable & Transparent Pricing</h2>
                    <p className="py-3 text-center text-sm">No hidden fees, no surprises. Get your domain at the best price with free DNS management included.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-10 sm:mb-0">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/instant-registration.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Instant Registration & Easy Management</h2>
                    <p className="py-3 text-center text-sm">Register your domain in seconds and manage everything with a simple, user-friendly dashboard.</p>
                </div>
                <div className="h-[270px] w-[360px] rounded cards-shadow p-3 mb-0 sm:mb-0">
                    <div className="h-[40%] w-full flex justify-center items-center">
                        <img className="h-[80px] w-[80px]" src="/secure-domain.png" alt="" />
                    </div>
                    <h2 className="py-3 text-center text-xl font-semibold">Secure & Reliable</h2>
                    <p className="py-3 text-center text-sm">Backed by ICANN-accredited registrars with free WHOIS privacy (if supported) and SSL-ready domains.</p>
                </div>
            </div>
        </section>
        <section className="w-screen h-max py-[50px] sm:py-[100px] px-3 sm:px-10 text-accent">
            <h2 className="mb-10 text-center text-xl sm:text-5xl font-semibold">Every great website starts with the right name. What's yours?</h2>
            <div className="h-max w-full flex items-center justify-center mt-10">
                <a href="#hero" className="bg-primary rounded text-text py-2 px-4">Search Your Domain</a>
            </div>
        </section>
        <section id="education" className="w-full py-16 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
                <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <div className="flex items-center justify-center">
                        <img
                        src="domain-why.jpg"
                        alt="domain search"
                        className="w-[320px] h-[320px] object-contain rounded"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center px-4">
                    <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-text">
                        How to pick the best domain for your business or idea
                        </h2>
                    </div>
                    <div className="space-y-4 text-base text-neutralDark">
                        <p>
                        Your brand domain name is the place where your brand do business, get clients to buy your products or subscribe to your services. This is the reason why it is very important for you to pick a good domain name.
                        </p>
                        <p>What you should consider when choosing a domain name:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Make your domain easy pronounce and spell</li>
                            <li>Do not use too long domain name</li>
                            <li>Your domain should reflect your brand and be unique</li>
                            <li>Do not use hypens in a domain name</li>
                        </ul>
                        <p>
                        IruHost have an estensive list of domain extensions that you can choose from. Whether it is a .com, .biz, .org, .ai, we have it all.
                        </p>
                        <p>
                        Once you have gotten the ideal domain name register it before someone else takes it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full h-max py-20 bg-white flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-10 text-center">Checkout our domain price list</h2>
        <div className="w-full max-w-3xl overflow-x-auto">
                <table className="min-w-full border border-accent rounded shadow">
                    <thead>
                        <tr className="bg-accent text-text text-xl">
                            <th className="py-3 px-4 border-b border-accent text-left">TLD</th>
                            <th className="py-3 px-4 border-b border-accent text-left">Registration</th>
                            <th className="py-3 px-4 border-b border-accent text-left">Renewal</th>
                            <th className="py-3 px-4 border-b border-accent text-left">Transfer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">.com</td>
                            <td className="py-2 px-4 border-b">14.90</td>
                            <td className="py-2 px-4 border-b">14.90</td>
                            <td className="py-2 px-4 border-b">14.90</td>
                        </tr>
                        <tr>
                        <td className="py-2 px-4 border-b">.net</td>
                        <td className="py-2 px-4 border-b">14.90</td>
                        <td className="py-2 px-4 border-b">14.90</td>
                        <td className="py-2 px-4 border-b">14.90</td>
                        </tr>
                        <tr>
                        <td className="py-2 px-4 border-b">.org</td>
                        <td className="py-2 px-4 border-b">14.90</td>
                        <td className="py-2 px-4 border-b">14.90</td>
                        <td className="py-2 px-4 border-b">14.90</td>
                        </tr>
                        <tr>
                        <td className="py-2 px-4 border-b">.info</td>
                        <td className="py-2 px-4 border-b">13.50</td>
                        <td className="py-2 px-4 border-b">13.50</td>
                        <td className="py-2 px-4 border-b">13.50</td>
                        </tr>
                        <tr>
                        <td className="py-2 px-4 border-b">.biz</td>
                        <td className="py-2 px-4 border-b">15.00</td>
                        <td className="py-2 px-4 border-b">15.00</td>
                        <td className="py-2 px-4 border-b">15.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        </>
     );
}
 
export default Domain;