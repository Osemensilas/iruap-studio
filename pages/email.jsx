import EmailComponent from "@/components/EmailComponent";

const Email = () => {
    return ( 
        <>
        <section id="hero" className="h-[calc(100vh-100px)] w-screen bg-background">
            <div className="h-full w-full flex flex-col justify-center items-center px-2 sm:px-20">
                <h1 className="font-bold text-accent text-center text-3xl sm:text-5xl mb-10">Professional Email Hosting for Your Business</h1>
                <p className="text-accent text-base text-center font-semibold mb-10">Create a professional impression with custom email addresses using your business name. Reliable, secure, and easy to manage—perfect for businesses of all sizes.</p>
                <a href="#email" className="bg-primary rounded text-text py-2 px-4">Choose a Plan</a>
            </div>
        </section>
        <div className="w-screen h-max py-[50px] sm:py-[100px] px-3 sm:px-10 text-accent">
            <h2 className="mb-10 text-center text-xl sm:text-3xl font-semibold">Ready to look professional?</h2>
            <div className="h-max w-full flex items-center justify-center mt-10">
                <a href="#email" className="bg-primary rounded text-text py-2 px-4">Subscribe Now</a>
            </div>
        </div>
        <section id="email" className="h-max w-screen px-3 sm:px-10 py-[50px] bg-background">
            <h2 className="pb-[50px] text-center text-xl sm:text-3xl font-bold text-accent">Choose Plan</h2>
            <EmailComponent />
        </section>
        <section id="email-talk" className="w-full py-12 px-2 sm:px-10 bg-white">
            <div className="mb-12">
                <h2 className="text-xl sm:text-3xl font-bold text-center text-text mb-6">Enhance your professionalism and make your brand a favorite in everyone's inbox</h2>
            </div>
            <div className="mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/envelope.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Establish trust and personalize your experience</h3>
                    <p className="text-sm text-center text-text">
                    Begin on the right path by aligning your business email address with your website brand.
                    </p>
                </div>
                {/* Card 2 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/flow.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Efficiently manage your email flow like a pro</h3>
                    <p className="text-sm text-center text-text">
                    Consolidate all your personal and professional email accounts into one unified inbox. No more switching between accounts to send or receive emails.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/completed-task.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Experience seamless control</h3>
                    <p className="text-sm text-center text-text">
                    Tailor your email hosting to align with your business goals. Share and synchronize emails, appointments, calendars, and tasks with your contacts for better organization and collaboration.
                    </p>
                </div>
                {/* Card 4 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/operational-system.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Stay productive on the move with our mobile-friendly solutions for business</h3>
                    <p className="text-sm text-center text-text">
                    Access all your professional and personal email accounts in a unified portal view. Stay updated with social feeds, news, emails, and your busy schedule from any Windows, Android, or Apple device.
                    </p>
                </div>
                {/* Card 5 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/partners.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Ignite your team's potential</h3>
                    <p className="text-sm text-center text-text">
                    Expand your capabilities with comprehensive support for sharing emails, documents, spreadsheets, calendars, tasks, and more through our Pro and Ultimate plans.
                    </p>
                </div>
                {/* Card 6 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/member-card.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Experience a sense of belonging</h3>
                    <p className="text-sm text-center text-text">
                    We don't just offer our Professional Business Email service; we also use it ourselves. Our Ossilhost staff members across various territories are happily connected through it.
                    </p>
                </div>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-2xl sm:text-4xl font-bold text-center text-text mb-[50px]">
                Broaden your horizons
                </h2>
                <p className="text-base text-center text-text mb-8">
                Operate your business with a growth mindset. All email hosting plans come with these invaluable tools to enhance security, ensure data safety, and promote expansion.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Continue Card 1 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/password.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Safe Two-Factor Authentication (2FA)</h3>
                    <p className="text-sm text-center text-text">
                    ePrivate Email offers support for TOTP (Time-based One-Time Password) Two-Factor Authentication (2FA).
                    </p>
                </div>
                {/* Continue Card 2 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/security.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Enhanced application security</h3>
                    <p className="text-sm text-center text-text">
                    Benefit from enhanced account protection and privacy. You can set additional secure passwords for apps to safeguard your main password from compromise.
                    </p>
                </div>
                {/* Continue Card 3 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/email (2).png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Robust protection against spam</h3>
                    <p className="text-sm text-center text-text">
                    Delight in super-secure email hosting, which includes free anti-spam protection to safeguard every message.
                    </p>
                </div>
                {/* Continue Card 4 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/astrazeneca.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Brand impact</h3>
                    <p className="text-sm text-center text-text">
                    Enhance your brand presence with social media links and personalized logos, along with handwritten and HTML signatures. Craft your email with images, colors, styles, and shapes that match your brand's identity.
                    </p>
                </div>
                {/* Continue Card 5 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/address.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Free forwarding addresses</h3>
                    <p className="text-sm text-center text-text">
                    Appear even more credible by utilizing your professional email address to create aliases such as sales@yourbusiness.com, accounts@yourbusiness.com, all of which feed into one unified inbox.
                    </p>
                </div>
                {/* Continue Card 6 */}
                <div className="bg-accent rounded cards-shadow p-6 flex flex-col items-center">
                    <img src="assets/imgs/role-model.png" alt="" className="h-16 w-16 mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2 text-center">Growth with confidence</h3>
                    <p className="text-sm text-center text-text">
                    Achieve scalable growth with our Pro and Ultimate plans, which offer extra mailboxes, increased storage, ActiveSync, CalDav, and CardDav. Moreover, all additional mailboxes are available at half the subscription prices.
                    </p>
                </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Email;