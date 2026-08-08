import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export default function OpenTicket() {

    const [error, setError] = useState('');
    const [status, setStatus] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        department: "Technical Support",
        priority: "Normal",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setBtnClicked(true);

        try {
            let url = "https://backend.iruhost.com/api/send-ticket";

            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            if (response.data.status === 'error'){
                setError(response.data.message);
                setBtnClicked(false);
            }else{
                setError("");
            }

            if (response.data.status === 'success'){
                setStatus(true);
                setBtnClicked(false);

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    department: "Technical Support",
                    priority: "Normal",
                    message: "",
                });
            }else{
                setStatus(false);
            }
        } catch (error) {
            console.error("Error submiting ticket: ",error);
        }
    };

  return (
    <>
      <Head>
        <title>Open Support Ticket | IruHost</title>
        <meta
          name="description"
          content="Submit a support ticket to IruHost for help with your hosting, domain, or email services."
        />
      </Head>

      <div className="min-h-screen pb-20 bg-accent">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-background to-bars text-white py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Open a Support Ticket</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Our support team is available 24/7 to help you resolve technical,
            billing, or account issues.
          </p>
        </section>

        {/* Ticket Form */}
        <section className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Submit Your Ticket
            </h2>

            <div id="error" className={`bg-danger text-center text-accent py-2 px-4 rounded w-full h-max mb-2
                ${error ? "block" : "hidden"}
                `}>
                {error}
            </div>

          {status ? (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center">
              ✅ Your support ticket has been submitted successfully. Our team
              will get back to you shortly.
            </div>
          ): ""}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-grey font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-grey rounded-lg px-4 py-2 outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-grey font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-grey rounded-lg px-4 py-2 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-grey font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-grey rounded-lg px-4 py-2 outline-none"
                placeholder="e.g. Hosting setup issue"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-grey font-medium mb-2">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full border border-grey rounded-lg px-4 py-2 outline-none"
                >
                  <option>Technical Support</option>
                  <option>Billing</option>
                  <option>Sales</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-grey font-medium mb-2">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full border border-grey rounded-lg px-4 py-2 outline-none"
                >
                  <option>Low</option>
                  <option>Normal</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-grey font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full border border-grey rounded-lg px-4 py-2 outline-none"
                placeholder="Describe your issue in detail..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full bg-primary text-text py-3 rounded-lg font-semibold transition flex items-center justify-center`}
            >
            {
                btnClicked ? (
                    <img src="/loading.gif" alt="loading image" className="h-5 w-5" />
                ) : (
                    <span>Submit Ticket</span>
                )
            }
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
