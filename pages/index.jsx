import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";


const slides = [
  { 
    id: 1, title: "Your Vision, Online",
    text: "We turn ideas into clean, functional websites that drive results", 
    image: "/hero1.jpg",
    link: '/hire-us' 
  },
  { 
    id: 2, 
    title: "Join Thousands Using Our Online Solutions", 
    text: "Easy to use. Designed to deliver",
    image: "/hero2.jpg",
    link: "/products" 
  },
];


export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Head>
      <title>Home Page | The Palm Haven Hotel</title>
    </Head>
    <section id="home-hero" className="w-screen h-screen relative">
      <div className="absolute z-10 flex justify-between w-full px-4 top-1/2 -translate-y-1/2">
        <button className="p-8 border border-accent rounded-full text-4xl" onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}>‹</button>
        <button className="p-8 border border-accent rounded-full text-4xl" onClick={() => setIndex((prev) => (prev + 1) % slides.length)}>›</button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <motion.h2 
          className="text-5xl z-10 text-accent font-bold mb-10 text-center" 
          initial={{ x: -100 }} animate={{ x: 0 }} 
          transition={{ duration: 1 }}
          style={{paddingRight: '10px', paddingLeft: '10px'}}>
            {slides[index].title}
          </motion.h2>
          <motion.h3 
          className="text-xl text-center text-accent z-10 mb-20" 
          initial={{ x: -100 }} animate={{ x: 0 }} 
          transition={{ duration: 1.5 }}
          style={{paddingRight: '10px', paddingLeft: '10px'}}>
            {slides[index].text}
          </motion.h3>
          <motion.div className="z-10" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.8 }}>
            <Link href={slides[index].link} className="px-10 py-4 border-[2px] border-primary hover:border-none bg-transparent hover:bg-primary rounded-full text-primary hover:text-text transition-all duration-300 ease-in-out">
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
    <section id="services" className="w-screen py-20 bg-offWhite flex flex-col items-center">
      <h2 className="relative z-40 text-4xl font-bold text-accent mb-8 text-center">Our Services</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        <div className="z-40 bg-white rounded-lg shadow p-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
          <img src="/service-web.jpg" alt="Web Development" className="w-20 h-20 object-cover rounded-full mb-4" />
          <i className="fa fa-laptop-code text-4xl text-primary mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2 text-accent">Web Development</h3>
          <p className="text-base text-center text-gray-700 mb-4">
            Custom, responsive websites built for your business goals using modern technologies.
          </p>
        </div>
        <div className="z-40 bg-white rounded-lg shadow p-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
          <img src="/service-mobile.jpg" alt="Mobile Solutions" className="w-20 h-20 object-cover rounded-full mb-4" />
          <i className="fa fa-mobile-alt text-4xl text-primary mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2 text-accent">Mobile Solutions</h3>
          <p className="text-base text-center text-gray-700 mb-4">
            Mobile-friendly designs and progressive web apps for seamless user experiences on any device.
          </p>
        </div>
        <div className="z-40 bg-white rounded-lg shadow p-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
          <img src="/service-seo.jpg" alt="SEO & Marketing" className="w-20 h-20 object-cover rounded-full mb-4" />
          <i className="fa fa-search-dollar text-4xl text-primary mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2 text-accent">SEO & Marketing</h3>
          <p className="text-base text-center text-gray-700 mb-4">
            Boost your online presence and reach more customers with our SEO and digital marketing services.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
