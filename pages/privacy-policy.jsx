import Head from "next/head";

export default function PrivacyPolicyPage() {
  return (
    <>
    <Head>
        <title>Privacy Policy - IruHost</title>
    </Head>
    <div className="bg-white text-gray-800">
      <section className="bg-gradient-to-r from-background to-bars text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="max-w-2xl mx-auto text-lg">
          This Privacy Policy explains how we collect, use, and protect your information when you use our services.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6 space-y-10">
        {/* Introduction */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            This Privacy Policy applies to all products and services provided by 
            <strong> IruHost</strong>, the web hosting and domain services division of 
            <strong> Iruap Tech Studio Limited</strong> (RC: <strong>8776122</strong>), a company registered in Nigeria.  
            We are committed to protecting your personal data and respecting your privacy in compliance with the 
            Nigeria Data Protection Regulation (NDPR) and other applicable international data protection laws.
          </p>
        </div>

        {/* Information We Collect */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-3">We may collect the following types of information:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Personal details (name, email, phone number, address)</li>
            <li>Website usage data (IP address, browser type, device information, pages visited)</li>
            <li>Support communications and feedback</li>
          </ul>
        </div>

        {/* How We Use Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>To provide and manage hosting, domain, and related services</li>
            <li>To send service updates, invoices, and security notifications</li>
            <li>To improve our website, products, and customer support</li>
            <li>To comply with legal obligations and prevent fraud</li>
          </ul>
        </div>

        {/* Data Protection & Storage */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">4. Data Protection and Storage</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement strict technical and organizational security measures to protect your information.  
            All sensitive data, including passwords and payment information, is transmitted using secure SSL encryption.  
            We store data only for as long as necessary for business and legal purposes.
          </p>
        </div>

        {/* Data Sharing */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">5. Data Sharing and Third Parties</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell or rent your personal information. However, we may share data with trusted third parties 
            such as domain registrars, payment processors, and service partners—only as necessary to deliver our services.  
            All third parties are required to comply with strict confidentiality and data protection agreements.
          </p>
        </div>

        {/* Cookies */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">6. Cookies and Tracking</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website uses cookies to enhance user experience, analyze traffic, and personalize content.  
            You can control or disable cookies in your browser settings, but some site features may not function properly without them.
          </p>
        </div>

        {/* Your Rights */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">7. Your Data Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Under the NDPR, you have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Object to processing or data sharing</li>
            <li>Lodge complaints with the Nigeria Data Protection Bureau (NDPB)</li>
          </ul>
        </div>

        {/* International Users */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">8. International Users</h2>
          <p className="text-gray-600 leading-relaxed">
            While we are based in Nigeria, our services are available globally.  
            By using our services, you agree that your information may be transferred and processed in other countries 
            where our servers or partners are located.
          </p>
        </div>

        {/* Updates */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">9. Updates to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations.  
            Updates will be posted on this page with the revised effective date.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions or concerns about this Privacy Policy, please contact us at:
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
          <p className="text-sm text-gray-500">Effective Date: September 2nd, 2025</p>
        </div>
      </section>
    </div>
    </>
  );
}
