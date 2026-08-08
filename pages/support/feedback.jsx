import FAQs from "@/components/Faq";
import FeedbackComponent from "@/components/feedbackComponent";

const Feedback = () => {
    return ( 
        <>
        <section className="h-max w-full bg-accent py-10 px-3 sm:px-20">
            <h2 className="text-3xl text-text font-semibold my-10">How  is our service? Leave feedback</h2>
            <p class="text-text text-base mb-5">
            We value your thoughts! Whether it’s a suggestion, a compliment, or a concern, your feedback helps us improve our services and serve you better. Please send your comments to <a href="mailto:feedback@iruhost.com" class="text-primary underline">feedback@iruhost.com</a>, and our team will review them promptly.
            </p>
            <FeedbackComponent />
        </section>
        <FAQs />
        </>
     );
}
 
export default Feedback;