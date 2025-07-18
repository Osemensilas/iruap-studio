import SSLComponent from "@/components/SSLCompent";

const SSL = () => {
    return ( 
        <>
        <section id="hero" className="h-[calc(100vh-100px)] w-screen bg-background">
            <div className="h-full w-full flex flex-col justify-center items-center px-2 sm:px-20">
                <h1 className="font-bold text-accent text-center text-3xl sm:text-5xl mb-10">Secure Your Website with SSL - Build Trust & Protect Your Visitors</h1>
                <p className="text-accent text-base text-center font-semibold mb-10">Get HTTPS, padlock security, and data encryption. Boost SEO and customer confidence instantly.</p>
                <a href="#ssl" className="bg-primary rounded text-text py-2 px-4">Choose a Plan</a>
            </div>
        </section>
        <div className="w-screen h-max py-[50px] sm:py-[100px] px-3 sm:px-10 text-accent">
            <h2 className="mb-10 text-center text-xl sm:text-3xl font-semibold">Don't let your site show “Not Secure”!</h2>
            <div className="h-max w-full flex items-center justify-center mt-10">
                <a href="#ssl" className="bg-primary rounded text-text py-2 px-4">Secure Site Now</a>
            </div>
        </div>
        <section id="ssl" className="h-max w-screen px-3 sm:px-10 py-[50px] bg-background">
            <h2 className="pb-[50px] text-center text-xl sm:text-3xl font-bold text-accent">Choose Plan</h2>
            <SSLComponent />
        </section>
        <section id="security" className="w-full bg-accent py-10 px-2 sm:px-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="mb-6">
                <h2 className="text-3xl font-bold text-text mb-4">Web Security</h2>
                </div>
                <div className="mb-6">
                <p className="text-lg text-text">Utilize Our SSL Certificate Security for Optimal Site Protection</p>
                </div>
                <div>
                    <a href="#ssl" className="bg-primary text-text rounded py-2 px-6 font-semibold shadow hover:bg-accent transition">Get Started</a>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <img src="assets/imgs/secure-sockets-layer-illustration.png" alt="ero-img" className="w-[320px] h-[320px] object-contain rounded"/>
            </div>
            </div>
            <div className="w-full flex flex-col items-center mb-10">
            <div className="w-full max-w-3xl bg-background rounded shadow p-6 mb-8">
                <h2 className="text-xl sm:text-3xl font-bold text-accent mb-4">What is an SSL?</h2>
                <div className="space-y-4 text-base text-accent">
                    <p>
                        An SSL certificate functions as external validation for a website's security measures. It confirms the effectiveness of the Secure Socket Layer encryption employed during user interactions with the site and associates this encryption
                        with the entity responsible for the website's operation and upkeep. SSL certification and validation represent essential components of web security, especially for businesses engaged in user data collection.
                    </p>
                    <p>
                        Various SSL certificates offer varying degrees of security, tailored to the specific protection and security requirements of your website and its users. While you might recognize visual indicators like Site Seals and the presence of
                        "HTTPS://" in the URL, there are also concealed functionalities that play a role in safeguarding both your website and its visitors.
                    </p>
                    <p>
                        No matter what level of security you choose, your users will recognize that your site is safe, and that leads to greater trust in your brand online.
                    </p>
                </div>
            </div>
            </div>
            <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-3xl bg-background rounded shadow p-6 space-y-8">
                <div>
                    <h2 className="text-xl sm:text-3xl font-bold text-accent mb-4">What Comes with an SSL?</h2>
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-accent mb-2">SSL Site Seal</h3>
                        <p className="text-base text-accent">
                        The site seal serves as a visual representation of the security assurance offered by your website's SSL certificate. Its significance is so pronounced that it has become a primary motivation for numerous website owners and administrators
                        to acquire an SSL certificate, given that a vast majority of web users recognize its presence. The appearance of these seals may differ based on the specific type of SSL certificate issued, yet they universally convey the same
                        message: your users' data is safeguarded.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-accent mb-2">Top-Tier Support</h3>
                        <p className="text-base text-accent">
                        Iruhost has gained a reputation for delivering exceptional customer service, attributed to our outstanding support team. The professionals at Iruhost support stand out as among the most courteous and informative individuals in
                        the industry, possessing an extensive understanding of each product and service we provide. With their around-the-clock availability, you can have peace of mind knowing that they are ready to address your inquiries and provide
                        guidance concerning your SSL certificate acquisition.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-accent mb-2">Browser Ubiquity</h3>
                        <p className="text-base text-accent">
                        Iruhost's specialists have carefully curated our range of SSL certificates to guarantee extensive compatibility with widely-used browsers. Our certificates are endorsed by all major browsers, ensuring that no matter which browser
                        you choose, Iruhost's SSL verification will be acknowledged, thus ensuring a seamless browsing experience. This eliminates any uncertainty for your users about the authenticity of the certificate issuer or the assurance of protection.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-accent mb-2">Encryption Level</h3>
                        <p className="text-base text-accent">
                        The extent of security offered by an SSL certificate hinges on the bit count utilized to formulate the encryption key, which subsequently plays a role in encrypting the data. In our array of SSL certificates, the encryption predominantly
                        employs either 256-bit or 128-bit encryption, contingent upon the capacities of both the web browser and server. Both 256-bit and 128-bit encryption stand as industry standards for ensuring data security.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
     );
}
 
export default SSL;