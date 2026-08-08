import FAQs from "@/components/Faq";

const ContactUs = () => {

    const supportData = [
    {
      category: "General Questions",
      description: "Ask or resolve general IruHost-related questions.",
      email: "support@iruhost.com",
    },
    {
      category: "Pre-Sales Inquiries",
      description: "Questions about our products and services, or help choosing the right plan.",
      email: "sales@iruhost.com",
    },
    {
      category: "Account Access",
      description: "Assistance with issues accessing your IruHost account.",
      email: "accountaccess@iruhost.com",
    },
    {
      category: "Affiliate Program",
      description: "Questions related to our affiliate program.",
      email: "affiliates@iruhost.com",
    },
    {
      category: "Feedback",
      description: "Send us your feedback, suggestions, or comments to help improve our services.",
      email: "feedback@iruhost.com",
    },
    {
      category: "Billing / Sales",
      description: "Support with payment issues, hosting billing, cancellations, and refunds.",
      email: "billing@iruhost.com",
    },
    {
      category: "Domains",
      description: "Domain registration, renewal, cancellation, or DNS/host record setup.",
      email: "domainsupport@iruhost.com",
    },
    {
      category: "Domain Transfers",
      description: "Help with domain transfers to/from other registrars.",
      email: "concierge@iruhost.com",
    },
    {
      category: "Hosting Transfers",
      description: "Support for migrating hosting from other providers to IruHost.",
      email: "hostingtransfers@iruhost.com",
    },
    {
      category: "Hosting",
      description: "Assistance with Shared, VPS, and Dedicated hosting plans.",
      email: "support@iruhost.com",
    },
    {
      category: "SSL Certificates",
      description: "Questions or issues with SSL certificates.",
      email: "sslsupport@iruhost.com",
    },
    {
      category: "Private Email",
      description: "Support for private email accounts, including free forwarding.",
      email: "pesupport@iruhost.com",
    },
    {
      category: "Managed WordPress (EasyWP)",
      description: "Support for EasyWP managed WordPress plans.",
      email: "easywp@iruhost.com",
    },
    {
      category: "Supersonic WordPress Support",
      description: "Priority support for Supersonic plan customers.",
      email: "ewpsupersonic@iruhost.com",
    },
    {
      category: "Supersonic CDN",
      description: "Support related to our CDN services.",
      email: "cdnsupport@iruhost.com",
    },
    {
      category: "VPN",
      description: "Questions or issues with VPN services.",
      email: "vpnsupport@iruhost.com",
    },
    {
      category: "Domain Vault",
      description: "Support for IruHost Domain Vault service.",
      email: "domainvault@iruhost.com",
    },
    {
      category: "Risk Management",
      description: "For security concerns, monitoring, or risk-related issues.",
      email: "security@iruhost.com",
    },
    {
      category: "Legal & Abuse",
      description: "Issues with suspended or restricted services, or to report abuse.",
      email: "legalandabuse@iruhost.com",
    },
    {
      category: "DSA Notice",
      description: "Submit notices for illegal content under EU/Member State regulations.",
      email: "dsanotice@iruhost.com",
    },
  ];

    return ( 
        <>
        <section className="h-max w-full bg-accent py-10 px-20">
            <h2 className="text-3xl text-text font-semibold my-10">Need Support?</h2>
            <p className="text-text text-base mb-5">
            Our dedicated support team at IruHost is ready to assist you around the clock, every day of the week. Whether you have a question, need guidance, or are experiencing an issue, we’re here to help via email whenever you need us.
            </p>

            <p className="text-text text-base mb-5">
            To help us address your request as quickly as possible, please choose the email that matches the service or product you need assistance with. Include a clear description of your question or issue, then send it to the appropriate address for prompt support.
            </p>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-left">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="border p-3">Category</th>
                        <th className="border p-3">Purpose / Description</th>
                        <th className="border p-3">Contact Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {supportData.map((item, index) => (
                        <tr key={index}>
                        <td className="border p-3">{item.category}</td>
                        <td className="border p-3">{item.description}</td>
                        <td className="border p-3">
                            <a href={`mailto:${item.email}`} className="text-primary underline">
                            {item.email}
                            </a>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
        <FAQs />
        </>
     );
}
 
export default ContactUs;