import Head from "next/head";

export default function TermsOfServicePage() {
  return (
    <>
    <Head>
        <title>Term of Service - IruHost</title>
    </Head>
    <div className="bg-white text-gray-800">
      <section className="bg-gradient-to-r from-background to-bars text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="max-w-2xl mx-auto text-lg">
          These Terms govern your use of IruHost’s web hosting, domain registration, and related services.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6 space-y-10">
        {/* Introduction */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms of Service (“Terms”) apply to all services provided by 
            <strong> IruHost</strong>, the hosting and web solutions division of 
            <strong> Iruap Tech Studio Limited</strong> (RC: <strong>8776122</strong>), a company 
            registered under the laws of the Federal Republic of Nigeria.  
            By using our website, hosting, domain, or related services, you agree to comply with these Terms.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">2. Our Services</h2>
          <p className="text-gray-600 leading-relaxed">
            IruHost provides website hosting, domain registration, SSL certificates, and website design services.  
            The availability and features of our services are described on our website.  
            We may modify or discontinue certain services at any time, with or without notice.
          </p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">3. Account Responsibility</h2>
          <p className="text-gray-600 leading-relaxed">
            You must create an account to use our services. You are responsible for maintaining the 
            confidentiality of your login credentials and for all activities that occur under your account.  
            You must immediately notify us if you suspect unauthorized access to your account.
          </p>
        </div>

        {/* Acceptable Use */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">4. Acceptable Use Policy</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            You agree not to use our services for:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Hosting or distributing illegal, harmful, or copyrighted material without authorization</li>
            <li>Sending spam, phishing, or malicious software</li>
            <li>Engaging in fraud, scams, or deceptive activities</li>
            <li>Hosting adult content, hate speech, or abusive material</li>
            <li>Interfering with or disrupting our systems or other users’ services</li>
          </ul>
          <p className="text-gray-600 mt-3">
            Violation of this policy may result in immediate account suspension or termination without refund.
          </p>
        </div>

        {/* Payment */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">5. Payment and Billing</h2>
          <p className="text-gray-600 leading-relaxed">
            All payments must be made in advance unless otherwise agreed.  
            Hosting and domain renewals are billed automatically before expiration.  
            Failure to renew may result in service interruption or data loss.  
            Prices are subject to change with reasonable prior notice.
          </p>
        </div>

        {/* Refund Policy */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">6. Refund Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We offer refunds only for hosting accounts canceled within 7 days of purchase, 
            provided no violation of these Terms occurred.  
            Domain registrations, SSL certificates, and custom design services are non-refundable 
            once processed, as they involve third-party providers.
          </p>
        </div>

        {/* Suspension and Termination */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">7. Suspension and Termination</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to suspend or terminate your services if you breach these Terms, 
            fail to pay fees, or engage in activities that harm our reputation or systems.  
            Upon termination, all data associated with your account may be permanently deleted.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            IruHost shall not be liable for indirect, incidental, or consequential damages, 
            including data loss, service downtime, or loss of profits.  
            Our total liability under any claim shall not exceed the amount paid by you for the service 
            during the previous 12 months.
          </p>
        </div>

        {/* Uptime and Maintenance */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">9. Uptime and Maintenance</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide a 99.9% uptime commitment for our hosting services.  
            Scheduled maintenance or unavoidable technical issues may cause temporary downtime.  
            We will take reasonable steps to minimize interruptions and notify affected users when possible.
          </p>
        </div>

        {/* Intellectual Property */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">10. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All website content, branding, software, and materials provided by IruHost remain the property of 
            Iruap Tech Studio Limited.  
            You retain ownership of your website files and content hosted on our servers.
          </p>
        </div>

        {/* Privacy */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">11. Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            Your use of our services is also governed by our 
            <a href="/privacy-policy" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>.  
            By agreeing to these Terms, you acknowledge that you have read and accepted our Privacy Policy.
          </p>
        </div>

        {/* Changes to Terms */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">12. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We may modify these Terms from time to time. Updated versions will be posted on our website 
            with a revised effective date. Continued use of our services after such updates constitutes 
            acceptance of the revised Terms.
          </p>
        </div>

        {/* Governing Law */}
        <div>
        <h2 className="text-2xl font-semibold mb-3">13. Governing Law and Dispute Resolution</h2>
        <p className="text-gray-600 leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria.  
            Any disputes arising under or in connection with these Terms shall first be resolved amicably between the parties.  
            Where amicable resolution fails, the dispute shall be submitted to the competent courts located in the Federal Capital Territory, Abuja, Nigeria, excluding Sharia Courts.
        </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">14. Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions regarding these Terms, please contact us at:
          </p>
          <div className="mt-3 text-gray-700">
            <p><strong>Iruap Tech Studio Limited</strong></p>
            <p>Email: contact@iruhost.com</p>
            <p>Website: https://www.iruhost.com</p>
            <p>Address: Along Gado Nasco Road, Kubwa, Abuja, Nigeria</p>
          </div>
        </div>

        {/* Effective Date */}
        <div className="pt-10 border-t border-gray-200">
          <p className="text-sm text-gray-500">Effective Date: October 30, 2025</p>
        </div>
      </section>
    </div>
    </>
  );
}
