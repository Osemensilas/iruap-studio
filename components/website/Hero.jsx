import Image from "next/image";

const Hero = () => {
    return ( 
        <>
        <section id="hero" className="h-[calc(100vh-100px)] flex w-screen bg-background px-4 sm:px-10 sm:py-20">
            <div className="h-full w-[100%] sm:w-[60%] flex items-start justify-center flex-col">
                <h1 className="text-2xl sm:text-5xl text-accent font-bold mb-10 text-center sm:text-start">Professional Web Development Services for Nigerian Businesses.</h1>
                <p className="text-center sm:text-start mb-10 text-accent text-base font-medium">From mordern business websites to powerful e-commerce stores, we create custom solutions designed to your needs.</p>
                <div className="h-max w-full flex justify-center sm:justify-start">
                    <a href="#contact-us" className="py-3 px-5 rounded bg-primary text-accent font-semibold cursor-pointer">Book a Consultation</a>
                </div>
            </div>
            <div className="h-full w-[20%] sm:w-[40%] hidden sm:block">
                <div className="relative w-full h-full">
                    <Image src="/web-des.png" className="object-fit" fill alt="web developer image" />
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Hero;