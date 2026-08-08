import Head from "next/head";
import Link from "next/link";

export default function Support() {

  return (
    <>
      <Head>
        <title>Support | IruHost</title>
        <meta
          name="description"
          content="Get expert support for your hosting, domain, and email services. Contact IruHost through tickets, live chat, or our knowledge base."
        />
      </Head>

      <div className="min-h-screen bg-accent">
        {/* Hero Section */}
        <section className="h-max w-full px-2 sm:px-10 pt-10">
          <h2 className="text-2xl font-bold mb-10">Support</h2>
        </section>
        {/* Contact Options */}
        <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
            <img
              src="/ticket-svgrepo-com.svg"
              alt="Ticket Support"
              className="w-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Submit a Ticket</h3>
            <p className="text-grey mb-4">
              Need technical help or billing support? Submit a ticket and our
              team will respond quickly.
            </p>
            <Link
              href="/support/ticket"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Open Ticket
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
            <img
              src="/chat-chat-svgrepo-com.svg"
              alt="Live Chat"
              className="w-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Chat with our team in real time to resolve your issue faster.
              We're just a message away! Use our ChatBot
            </p>
            <Link
              href="/support/user-tickets"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              My Ticket
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
            <img
              src="/docs-svgrepo-com.svg"
              alt="Knowledge Base"
              className="w-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
            <p className="text-gray-600 mb-4">
              Browse FAQs and tutorials to solve common issues — from setup to
              advanced configurations.
            </p>
            <Link
              href="/blogs"
              className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
            >
              Visit Docs
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <details className="border rounded-lg p-4">
                <summary className="font-semibold cursor-pointer">
                  How do I access my hosting control panel (cPanel)?
                </summary>
                <p className="mt-2 text-gray-600">
                  Visit <code>https://yourdomain.com/cpanel</code> and use your
                  login credentials provided after purchase.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="font-semibold cursor-pointer">
                  How do I point my domain to IruHost?
                </summary>
                <p className="mt-2 text-gray-600">
                  Update your domain’s DNS nameservers to:
                  <br />
                  <code>nsc1.webhostingbliss.com</code>
                  <br />
                  <code>nsc2.webhostingbliss.com</code>
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="font-semibold cursor-pointer">
                  Can I transfer my existing hosting to IruHost?
                </summary>
                <p className="mt-2 text-gray-600">
                  Yes! We provide free migration for most cPanel accounts. Just
                  open a support ticket and our migration team will assist you.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="font-semibold cursor-pointer">
                  What payment methods do you accept?
                </summary>
                <p className="mt-2 text-gray-600">
                  We accept major credit/debit cards, PayPal, and local bank
                  transfers (for Nigerian customers).
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
