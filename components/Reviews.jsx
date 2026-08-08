import Image from "next/image";

const Reviews = () => {

    const testimonials = [
        {
            service: "Web Hosting",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
            ),
            text: "The uptime and speed are fantastic. I moved all my client sites to IruHost and have zero complaints. Lightning fast load times!",
            name: "Aisha Bello",
            role: "Frontend Developer",
            image: "/aisha.png",
        },
        {
            service: "Domain Registration",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
                </svg>
            ),
            text: "Got my .com.ng domain in minutes. The process was seamless and the pricing is the best I've seen for Nigerian domains.",
            name: "Chinedu Okafor",
            role: "Business Owner",
            image: "/chinedu.png",
        },
        {
            service: "SSL Certificate",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
            ),
            text: "SSL setup was instant and painless. My customers now see the padlock and trust increased. IruHost made it effortless.",
            name: "Ngozi Eze",
            role: "E-commerce Seller",
            image: "/ngozi.png",
        },
        {
            service: "Business Email",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
            ),
            text: "Having a professional email like me@mybusiness.com changed how clients perceive us. Setup took under 5 minutes with IruHost.",
            name: "Samuel Adeyemi",
            role: "Consultant",
            image: "/adeyemi.png",
        },
        {
            service: "Website Design",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
            ),
            text: "IruHost built me a stunning website that has brought in real clients. It looks premium and loads incredibly fast.",
            name: "Fatima Yusuf",
            role: "Interior Designer",
            image: "/fatima.png",
        },
        {
            service: "Web Hosting",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
            ),
            text: "SSL, email, and hosting all under one roof — no hidden fees. I recommend IruHost to every Nigerian entrepreneur I meet.",
            name: "Emeka Obi",
            role: "Digital Marketer",
            image: "/emeka.png",
        },
    ];

    return (
        <section className="w-full py-20 bg-[#111827] flex flex-col items-center">

            {/* Header */}
            <div className="text-center mb-4 px-4">
                <p className="text-primary text-[11px] uppercase tracking-[0.2em] font-medium mb-3">Testimonials</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                    What Our Clients Say
                </h2>
                <p className="text-[#c0c0c0] text-sm mt-3 max-w-md mx-auto font-light">
                    Trusted by hundreds of individuals and businesses across Nigeria.
                </p>
            </div>

            {/* Service Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
                {["All", "Web Hosting", "Domain Registration", "SSL Certificate", "Business Email", "Website Design"].map((s) => (
                    <span
                        key={s}
                        className={`text-[11px] px-3 py-1.5 rounded-sm border tracking-wide cursor-default
                            ${s === "All"
                                ? "border-primary text-primary bg-primary/10"
                                : "border-[#1e2a3d] text-[#c0c0c0] bg-[#0d1421]"
                            }`}
                    >
                        {s}
                    </span>
                ))}
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-6xl px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="group bg-[#0d1421] border border-[#1e2a3d] rounded-lg p-5 flex flex-col gap-4 hover:border-primary hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Top row: service badge + stars */}
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-primary font-medium border border-primary/30 bg-primary/10 px-2 py-1 rounded-sm">
                                {t.icon}
                                {t.service}
                            </span>
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} className="w-3 h-3 text-primary fill-primary" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Quote mark */}
                        <svg className="w-6 h-6 text-primary/30 -mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>

                        {/* Review Text */}
                        <p className="text-[#c0c0c0] text-sm leading-relaxed font-light flex-1">
                            {t.text}
                        </p>

                        {/* Divider */}
                        <div className="h-px bg-[#1e2a3d]" />

                        {/* Reviewer */}
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/40 flex-shrink-0 bg-[#1A2E66]">
                                <Image
                                    src={t.image}
                                    fill
                                    className="object-cover rounded-full"
                                    alt={t.name}
                                    onError={(e) => { e.target.style.display = "none"; }}
                                />
                            </div>
                            <div>
                                <p className="text-white text-sm font-medium leading-tight">{t.name}</p>
                                <p className="text-[#c0c0c0] text-[11px] font-light">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom stat strip */}
            <div className="mt-16 w-full max-w-3xl mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1e2a3d] border border-[#1e2a3d] rounded-lg overflow-hidden">
                    {[
                        { value: "500+", label: "Happy Clients" },
                        { value: "99.9%", label: "Uptime" },
                        { value: "24/7", label: "Support" },
                        { value: "5★", label: "Avg. Rating" },
                    ].map((stat) => (
                        <div key={stat.label} className="bg-[#0d1421] px-4 py-5 text-center">
                            <p className="text-primary text-xl font-bold">{stat.value}</p>
                            <p className="text-[#c0c0c0] text-[11px] uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Reviews;