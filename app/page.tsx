"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import StatsSection from "@/components/ui/StatsSection";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] flex flex-col justify-center overflow-hidden py-20 lg:py-0">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            src="/videos/vdo3.mp4"
            style={{ filter: "contrast(1.2)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-[#0a0a0a]/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow/80"></div>
        
        <div className="container-custom relative z-10 w-full">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            className="max-w-[900px] mx-auto text-center flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="flex justify-center items-center gap-2.5 mb-7">
              <div className="w-2 h-2 bg-yellow rounded-full animate-pulse"></div>
              <span className="font-display text-xs font-bold tracking-[3px] uppercase text-yellow">
                Mangalore & Surrounding Regions
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-[clamp(40px,6vw,72px)] font-black leading-none uppercase mb-6 drop-shadow-lg">
              Strong Foundations.
              <span className="text-yellow block">Reliable Earthmoving</span>
              Solutions.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[16px] text-[#d4d4d4] max-w-[600px] mx-auto mb-8 font-light leading-[1.6] drop-shadow-md">
              Professional excavation, land leveling, demolition, and site preparation services. Trusted by 500+ clients across Mangalore and Karnataka.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-4 flex-wrap mt-8">
              <a href="tel:+919876543210" className="btn btn-yellow text-base px-6 py-3">
                Call Now
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-outline text-base px-6 py-3">
                WhatsApp Us
              </a>
              <button className="btn btn-outline-yellow text-base px-6 py-3">
                Free Quote
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      {/* SERVICES PREVIEW */}
      <section className="bg-black min-h-screen lg:h-screen flex flex-col justify-center py-20 lg:py-0">
        <div className="container-custom">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center text-center"
          >
            <motion.span variants={fadeInUp} className="tag">What We Do</motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">Our Core <span>Services</span></motion.h2>
            <motion.div variants={fadeInUp} className="divider mx-auto"></motion.div>
            <motion.p variants={fadeInUp} className="section-sub mx-auto">From ground breaking to project completion — we handle every stage of your earthmoving requirements with precision and efficiency.</motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[ 
              { title: "Excavation", tags: ["Foundation", "Basement"], video: "/videos/vdo2.mp4" },
              { title: "Land Leveling", tags: ["Grading", "Compaction"], video: "/videos/vdo3.mp4" },
              { title: "Demolition", tags: ["Structural", "Clearance"], image: "/images/img1.jpg" }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 + (i * 0.15) }}
                className="bg-[#141414] border border-[#2a2a2a] relative overflow-hidden group transition-all duration-500 hover:border-[#facc15] hover:-translate-y-2 cursor-pointer shadow-2xl shadow-black/50"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#facc15] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 z-10" />
                {service.video ? (
                  <video autoPlay loop muted playsInline className="w-full h-[250px] object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src={service.video} />
                ) : (
                  <img className="w-full h-[250px] object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src={service.image} alt={service.title} />
                )}
                <div className="p-8 relative z-20 bg-gradient-to-t from-[#141414] via-[#141414]/90 to-transparent -mt-16 pt-20">
                  <div className="font-display text-[24px] font-extrabold uppercase mb-2 text-white group-hover:text-yellow transition-colors">{service.title}</div>
                  <p className="text-[15px] text-[#a0a0a0] leading-[1.7] mb-5">Professional {service.title.toLowerCase()} customized for luxury commercial & residential sites.</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#facc15] bg-[#facc15]/10 py-1.5 px-3 border border-[#facc15]/30 rounded-sm hover:bg-[#facc15]/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Removed the extra static blocks to keep consistent dynamic map */}
          </div>
        </div>
      </section>

      {/* MACHINERY HIGHLIGHT */}
      <section className="bg-[#141414] min-h-screen lg:h-screen flex flex-col justify-center py-20 lg:py-0">
        <div className="container-custom">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center text-center mb-12"
          >
            <motion.span variants={fadeInUp} className="tag">Heavy Fleet</motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">Our <span>Machinery</span></motion.h2>
            <motion.div variants={fadeInUp} className="divider mx-auto"></motion.div>
            <motion.p variants={fadeInUp} className="section-sub mx-auto mb-6">Equipped with state-of-the-art heavy machinery to tackle projects of any scale.</motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/machinery" className="btn btn-outline-yellow mt-4">
                View All Machines →
              </Link>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "JCB Backhoe", cap: "0.3m³ Bucket", img: "/images/img1.jpg", desc: "Premium backhoe loaders optimized for trenching and precision digging." },
              { title: "Excavator", cap: "0.8m³ Bucket", img: "/images/img2.jpg", desc: "Heavy-duty excavation machinery built for expansive commercial earthworks." },
              { title: "Bulldozer", cap: "200HP Engine", img: "/images/img1.jpg", desc: "Powerful bulldozers for precise land leveling and terrain modification." },
              { title: "Tipper Trucks", cap: "12–20 Ton", img: "/images/img2.jpg", desc: "High-capacity transportation fleets handling demanding logistical challenges." }
            ].map((machine, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                className="bg-[#1e1e1e] border-y border-[#2a2a2a] overflow-hidden transition-all duration-500 hover:border-yellow group cursor-pointer hover:shadow-[0_10px_40px_rgba(250,204,21,0.1)] hover:-translate-y-2"
              >
                <img className="w-full h-[250px] object-cover grayscale-[40%] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-110" src={machine.img} alt={machine.title} />
                <div className="p-8 relative z-10 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/90 to-transparent -mt-16 pt-20">
                  <div className="font-display text-[26px] font-extrabold uppercase text-white mb-2 group-hover:text-yellow transition-colors">{machine.title}</div>
                  <span className="inline-block font-display text-[11px] font-bold tracking-[3px] bg-yellow/10 border border-yellow/20 text-yellow py-1.5 px-4 mb-4 rounded-sm">{machine.cap}</span>
                  <p className="text-[14px] text-gray-300 leading-[1.8] font-light">{machine.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="border-y-[3px] border-yellow py-28 relative overflow-hidden flex items-center min-h-[400px]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            src="/videos/vdo3.mp4"
            style={{ filter: "brightness(0.6) contrast(1.5)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 backdrop-blur-[1px]"></div>
        </div>
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 font-display text-[160px] font-black text-yellow/5 uppercase whitespace-nowrap pointer-events-none tracking-[-4px] z-10 mix-blend-overlay">
          EARTHMOVERS
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="container-custom flex items-center justify-between gap-8 flex-wrap relative z-20 w-full"
        >
          <div className="max-w-[700px]">
            <motion.h2 variants={fadeInUp} className="font-display text-[clamp(42px,6vw,72px)] font-black uppercase leading-[1.05] tracking-tight drop-shadow-2xl">Ready to Break <span className="text-yellow">Ground?</span></motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-200 mt-5 font-light leading-relaxed">Experience uncompromised quality and absolute precision. Get a free, no-obligation quote for your premium project in Mangalore and surrounding areas.</motion.p>
          </div>
          <motion.div variants={fadeInUp} className="flex gap-4 flex-wrap mt-8 lg:mt-0 xl:justify-end">
            <button className="btn btn-yellow py-4 px-8 text-lg shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_50px_rgba(250,204,21,0.5)]">
              Get Free Quote
            </button>
            <a href="tel:+919876543210" className="btn btn-outline py-4 px-8 text-lg border-white/50 hover:border-white">
              +91 98765 43210
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* TESTIMONIALS */}
      <section className="bg-black min-h-screen lg:h-screen flex flex-col justify-center py-20 lg:py-0 overflow-hidden">
        <div className="container-custom mb-12">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center text-center"
          >
            <motion.span variants={fadeInUp} className="tag">Client Reviews</motion.span>
            <motion.h2 variants={fadeInUp} className="section-title">What Clients <span>Say</span></motion.h2>
            <motion.div variants={fadeInUp} className="divider mx-auto"></motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full relative px-4 text-left"
        >
          {/* Marquee container */}
          <div className="flex w-[200%] gap-8 animate-scrollx">
            {[
              { name: "Rajesh Kumar", role: "Builder, Whitefield", avy: "RK", text: "Shreematha Earthmovers completed our 2-acre site clearing in just 4 days. Their team was professional, punctual and the machinery was top-notch. Highly recommend for any major earthwork." },
              { name: "Mohan Shetty", role: "Civil Contractor, Tumkur", avy: "MS", text: "We hired them for a large road sub-base preparation project on the outskirts of Mangalore. They delivered on time, within budget, and the quality of work was exceptional." },
              { name: "Anand Prasad", role: "Developer, Electronic City", avy: "AP", text: "Best earthmoving company I&apos;ve worked with in 15 years. They demolished our old warehouse and leveled the entire 5-acre plot in under a week. Truly a reliable partner." },
              /* Duped for seamless effect */
              { name: "Rajesh Kumar", role: "Builder, Whitefield", avy: "RK", text: "Shreematha Earthmovers completed our 2-acre site clearing in just 4 days. Their team was professional, punctual and the machinery was top-notch. Highly recommend for any major earthwork." },
              { name: "Mohan Shetty", role: "Civil Contractor, Tumkur", avy: "MS", text: "We hired them for a large road sub-base preparation project on the outskirts of Mangalore. They delivered on time, within budget, and the quality of work was exceptional." },
              { name: "Anand Prasad", role: "Developer, Electronic City", avy: "AP", text: "Best earthmoving company I&apos;ve worked with in 15 years. They demolished our old warehouse and leveled the entire 5-acre plot in under a week. Truly a reliable partner." }
            ].map((review, i) => (
              <div key={i} className="bg-[#141414] border border-[#2a2a2a] p-8 relative flex-shrink-0 w-[450px]">
                <div className="absolute top-4 right-6 font-display text-[80px] font-black text-yellow/15 leading-none">&quot;</div>
                <div className="text-yellow text-[14px] mb-4">★★★★★</div>
                <p className="text-[15px] text-[#d4d4d4] leading-[1.8] mb-6 relative z-10">{review.text}</p>
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-yellow flex items-center justify-center font-display text-[22px] font-black text-black">
                    {review.avy}
                  </div>
                  <div>
                    <div className="font-display text-[17px] font-bold uppercase">{review.name}</div>
                    <div className="text-[12px] text-gray tracking-[1px] uppercase mt-0.5">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </>
  );
}
