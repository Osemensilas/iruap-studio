import FAQs from "@/components/Faq";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
    <Head>
        <title>About Us - IruHost</title>
    </Head>
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-background to-bars text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">Reliable Hosting. Simple Pricing. Trusted Service.</p>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          <strong>IruHost</strong> is a Nigerian-registered web solutions company and the official 
          web hosting division of <strong>Iruap Tech Studio Limited</strong> (RC: <strong>8776122</strong>). 
          We provide secure and affordable web hosting, domain registration, SSL certificates, 
          and professional web design services.
        </p>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[ 
            { title: "Web Hosting", desc: "Fast, secure & scalable hosting plans." },
            { title: "Domain Registration", desc: "Find the perfect domain name for your brand." },
            { title: "SSL & Email", desc: "Secure your site & get business email hosting." },
            { title: "Web Design", desc: "Custom websites & ready-made solutions." }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-xl text-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            "Affordable & scalable plans",
            "99.9% uptime guarantee",
            "Free SSL & site migration",
            "24/7 friendly support",
          ].map((reason, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Osemen Oseobonoite",
              title: "Chief Technical Officer (CFO)",
              image: "/ceo.JPG",
              linkedin: "https://www.linkedin.com/in/osemensilas/"
            },
            {
              name: "Edeh Chinecherem",
              title: "Public Relations Officer (PRO)",
              image: "/jane.jpg",
              linkedin: "https://www.linkedin.com/in/chinecherem-edeh/"
            }
          ].map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600">{member.title}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-gray-500 hover:text-blue-600"
              >
                LinkedIn →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-blue-600 text-white text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto">
          We aim to make professional web solutions accessible to everyone—startups, entrepreneurs, 
          and established businesses alike. With our hosting and design services, 
          you can focus on growing your business while we handle the tech.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Launch your website today with our reliable hosting and design solutions.
        </p>
        <a
          href="/hosting"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Hosting Plans
        </a>
      </section>
    </div>
    <FAQs />
    </>
  );
}
