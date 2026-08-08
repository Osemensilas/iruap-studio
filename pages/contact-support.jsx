import Link from "next/link";
import FAQs from "@/components/Faq";

export const dynamic = "force-dynamic";

const ContactSupport = () => {
    return ( 
        <>
        <section className="relative bg-background text-accent py-20 text-center">
            <h2 className="text-4xl font-bold mb-4">Get Support</h2>
            <p className="text-lg max-w-2xl mx-auto">Get premium support from our team.</p>
        </section>
        <section className="h-max w-full flex flex-col sm:flex-row gap-3 bg-background items-center justify-center pb-20">
            {/* <Link href="/" className="h-max w-[300px] p-10 rounded bg-accent">
                <div className="relative rounded-full">
                    <i className="fa fa-book text-grey"></i>
                </div>
                <div className="h-max w-full mt-2">
                    <h2 className="text-xl mb-5">Knowledge Base</h2>
                    <p>Let us guide your through out products</p>
                </div>
            </Link> */}
            <Link href="/support/contact-us" className="h-max w-[300px] p-10 rounded bg-accent">
                <div className="relative rounded-full">
                    <i className="fa fa-ticket text-grey"></i>
                </div>
                <div className="h-max w-full mt-2">
                    <h2 className="text-xl mb-5">Open a Support Ticket</h2>
                    <p>Need assistance? We are here to help.</p>
                </div>
            </Link>
            <Link href="/support/feedback" className="h-max w-[300px] p-10 rounded bg-accent">
                <div className="relative rounded-full">
                    <i className="fa fa-comment text-grey"></i>
                </div>
                <div className="h-max w-full mt-2">
                    <h2 className="text-xl mb-5">Leave Feedback</h2>
                    <p>Tell us what you notice about our service. We will love your insight.</p>
                </div>
            </Link>
            <Link href="/support/report-abuse" className="h-max w-[300px] p-10 rounded bg-accent">
                <div className="relative rounded-full">
                    <i className="fa fa-flag text-grey"></i>
                </div>
                <div className="h-max w-full mt-2">
                    <h2 className="text-xl mb-5">Report Abuse</h2>
                    <p>Report any illegal activity or suspision.</p>
                </div>
            </Link>
        </section>
        <FAQs />
        </>
     );
}
 
export default ContactSupport;