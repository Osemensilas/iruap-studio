import FAQs from "@/components/Faq";

const ReportAbuse = () => {
    return ( 
        <>
        <section className="h-max w-full bg-accent py-10 px-20">
            <h2 className="text-3xl text-text font-semibold my-10">How and where to file abuse complaints?</h2>
            <p className="text-text text-base mb-5">If you need to alert us about misuse of a domain, email service, or IP address connected to unlawful or harmful activity, we ask that you submit a clear and detailed report so we can act quickly.</p>

            <p className="text-text text-base mb-5">When abuse is suspected on any service provided by IruHost—whether it involves a registered domain or a website hosted on our platform—please contact our abuse team at <strong>abuse@iruhost.com</strong>
            . Every report is reviewed carefully and handled in line with our policies and applicable regulations.</p>

            <p className="text-text text-base mb-5">To ensure a smooth investigation, reports should include enough information to confirm the issue. Helpful details may include URLs, timestamps, screenshots, message headers, server logs, or any other data that supports your claim. The exact requirements may differ depending on the type of incident being reported.</p>

            <p className="text-text text-base mb-5">Organizations and security professionals who regularly submit phishing, fraud, or malware reports are encouraged to reach out to us for information on more efficient reporting arrangements.</p>

            <p className="text-text text-base mb-5">Below is an overview of the most common abuse cases we address, along with the general evidence needed to support each submission.</p>
            <table className="w-full border border-grey text-left">
            <thead className="bg-grey">
                <tr>
                    <th className="border p-3">Abuse Type</th>
                    <th className="border p-3">What It Involves</th>
                    <th className="border p-3">Information to Include</th>
                    <th className="border p-3">How to Report</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                <td className="border p-3">Child Exploitation</td>
                <td className="border p-3">Any content depicting minors in sexual or abusive situations.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                        <li>Domain name involved</li>
                        <li>Specific URL(s)</li>
                    </ul>
                </td>
                <td className="border p-3">Send a detailed report to <strong>abuse@iruhost.com</strong>. Immediate action will be taken.</td>
                </tr>

                <tr>
                <td className="border p-3">Copyright/DMCA</td>
                <td className="border p-3">Content published online without permission from the copyright owner.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                        <li>Valid DMCA notice</li>
                        <li>Proof of ownership</li>
                    </ul>
                </td>
                <td className="border p-3">Email a compliant DMCA request to <strong>dmca@iruhost.com</strong>.</td>
                </tr>

                <tr>
                <td className="border p-3">Email Abuse / Spam</td>
                <td className="border p-3">Unsolicited commercial emails or bulk marketing messages.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Sender email address</li>
                    <li>Recipient email address</li>
                    <li>Full email headers</li>
                    <li>Message content</li>
                    </ul>
                </td>
                <td className="border p-3">Send details to <strong>abuse@iruhost.com</strong>.</td>
                </tr>

                <tr>
                <td className="border p-3">Fraud / Scam</td>
                <td className="border p-3">Deceptive schemes designed to steal money, personal data, or gain unauthorized benefits.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Domain or URL used</li>
                    <li>Proof of payment or invoices</li>
                    <li>Screenshots of the site</li>
                    <li>Email messages with headers</li>
                    </ul>
                </td>
                <td className="border p-3">Report to <strong>abuse@iruhost.com</strong>. Victims may also notify local authorities.</td>
                </tr>

                <tr>
                <td className="border p-3">Phishing</td>
                <td className="border p-3">Fake websites or emails designed to steal usernames, passwords, or financial information.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Malicious domain or URL</li>
                    <li>Targeted legitimate site</li>
                    <li>Device type / browser used</li>
                    <li>IP address location if known</li>
                    </ul>
                </td>
                <td className="border p-3">If you clicked a link, scan your system. Email reports to <strong>abuse@iruhost.com</strong>.</td>
                </tr>

                <tr>
                <td className="border p-3">Illegal Pharmaceuticals</td>
                <td className="border p-3">Websites selling unlicensed, counterfeit, or expired medications.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Domain or URL</li>
                    <li>Screenshot of the page</li>
                    </ul>
                </td>
                <td className="border p-3">Submit reports to <strong>abuse@iruhost.com</strong>.</td>
                </tr>

                <tr>
                <td className="border p-3">Malware</td>
                <td className="border p-3">Software intended to damage systems, steal data, or gain unauthorized access.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Domain or URL involved</li>
                    </ul>
                </td>
                <td className="border p-3">Send reports to <strong>abuse@iruhost.com</strong>.</td>
                </tr>

                <tr>
                <td className="border p-3">Hacking / Network Attacks</td>
                <td className="border p-3">Activities like port scanning, brute force, or DDoS attacks.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Domain, URL, or IP</li>
                    <li>Date and time (with timezone)</li>
                    <li>Complete server or firewall logs</li>
                    </ul>
                </td>
                <td className="border p-3">Send detailed logs to <strong>abuse@iruhost.com</strong>.</td>
                </tr>

                <tr>
                <td className="border p-3">Trademark Infringement</td>
                <td className="border p-3">Unauthorized use of a brand or trademark that may cause confusion.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Formal complaint notice</li>
                    </ul>
                </td>
                <td className="border p-3">UDRP or URS processes may apply. Reports to <strong>abuse@iruhost.com</strong>.</td>
                </tr>

                <tr>
                <td className="border p-3">Whois Inaccuracy</td>
                <td className="border p-3">Incorrect or outdated contact information in domain registration records.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Affected domain name</li>
                    <li>Incorrect contact details</li>
                    <li>Bounced email evidence</li>
                    </ul>
                </td>
                <td className="border p-3">Send evidence to <strong>whois@iruhost.com</strong>.</td>
                </tr>

                <tr>
                <td className="border p-3">Other Abuse</td>
                <td className="border p-3">Any inappropriate or illegal activity not listed above (defamation, identity theft, malware, etc.).</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Domain or URL</li>
                    <li>Screenshots or proof</li>
                    </ul>
                </td>
                <td className="border p-3">Send all details to <strong>abuse@iruhost.com</strong>.</td>
                </tr>

                <tr>
                <td className="border p-3">Data Disclosure Requests</td>
                <td className="border p-3">Requests for domain registration or Whois data under legal requirements.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Formal request meeting policy requirements</li>
                    </ul>
                </td>
                <td className="border p-3">Send to <strong>legal@iruhost.com</strong>.</td>
                </tr>

                <tr>
                <td className="border p-3">Non-Consensual Intimate Images</td>
                <td className="border p-3">Private or intimate images shared without consent, including AI-generated content.</td>
                <td className="border p-3">
                    <ul className="list-disc ml-5">
                    <li>Official removal request with required details</li>
                    </ul>
                </td>
                <td className="border p-3">Submit removal requests to <strong>takeitdown@iruhost.com</strong>.</td>
                </tr>
            </tbody>
            </table>
        </section>
        <FAQs />
        </>
     );
}
 
export default ReportAbuse;