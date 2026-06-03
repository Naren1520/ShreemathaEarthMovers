import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="bg-[#141414] border-b-[3px] border-yellow pt-20 pb-12">
        <div className="container-custom flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="font-display text-xs font-bold tracking-[2px] uppercase text-gray cursor-pointer hover:text-yellow">Home</Link>
            <span className="text-yellow text-[10px]">▶</span>
            <span className="font-display text-xs font-bold tracking-[2px] uppercase text-yellow">Contact</span>
          </div>
          <div className="font-display text-xs font-bold tracking-[3px] uppercase text-yellow mb-4">Get In Touch</div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-black uppercase leading-none">Contact <span className="text-yellow">Us</span></h1>
          <p className="text-[17px] text-[#d4d4d4] max-w-[560px] mt-4 font-light mx-auto">Reach out for a free quote, machine hire inquiry or any project discussion. We respond within 2 hours.</p>
        </div>
      </div>

      <section className="section bg-black">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          
          <div>
            <span className="tag">Reach Us</span>
            <h2 className="section-title !text-[clamp(28px,4vw,44px)]">We&apos;re Ready<br/>to <span>Help</span></h2>
            <div className="divider"></div>
            <div className="mt-9">
              {[
                { label: "Phone", val: <><a href="tel:+919876543210" className="hover:text-yellow">+91 98765 43210</a><br/><a href="tel:919876543210" className="hover:text-yellow">+91 98765 43211</a></>, icon: <Phone className="text-black w-5 h-5" /> },
                { label: "WhatsApp", val: <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-yellow">+91 98765 43210</a>, icon: <Phone className="text-black w-5 h-5" /> }, // Simplified icon
                { label: "Email", val: <a href="mailto:shreemathaenterpises@gmail.com" className="hover:text-yellow">shreemathaenterpises@gmail.com</a>, icon: <Mail className="text-black w-5 h-5" /> },
                { label: "Address", val: <>Shreematha Refreshments,Adyar<br/>Mangalore – 575007, Karnataka</>, icon: <MapPin className="text-black w-5 h-5" /> },
                { label: "Working Hours", val: <>Mon – Sun: 7:00 AM – 10:30 PM<br/>Emergency: 24/7 Available</>, icon: <Clock className="text-black w-5 h-5" /> }
              ].map((info, idx) => (
                <div key={idx} className="flex items-start gap-4 py-5 border-b border-[#2a2a2a] last:border-b-0">
                  <div className="w-12 h-12 bg-yellow flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-display text-[12px] font-bold tracking-[2px] uppercase text-gray mb-1">{info.label}</div>
                    <div className="text-[16px] text-white leading-relaxed">{info.val}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-2 border-[#2a2a2a] hover:border-yellow transition-colors group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2234789060407!2d77.51756447462547!3d13.028617787293135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d273de2e7a5%3A0x3c2c30e59c98b6d6!2sPeenya%20Industrial%20Area%2C%20Peenya%2C%20Bengaluru%2C%20Karnataka%20560058!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-[300px] border-none block grayscale-[80%] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-[#141414] border border-[#2a2a2a] p-10">
            <span className="tag">Quick Enquiry</span>
            <h3 className="font-display text-[32px] font-extrabold uppercase mt-4 mb-8 text-white">Send Us a <span className="text-yellow">Message</span></h3>
            <form className="flex flex-col gap-5">
              <div>
                <label className="block font-display text-xs font-bold tracking-[2px] uppercase text-gray mb-2">Full Name *</label>
                <input type="text" className="w-full bg-[#1e1e1e] border-[1.5px] border-[#2a2a2a] text-white p-4 font-body text-[15px] outline-none focus:border-yellow transition-colors placeholder-[#8a8a8a]" placeholder="Your full name"/>
              </div>
              <div>
                <label className="block font-display text-xs font-bold tracking-[2px] uppercase text-gray mb-2">Phone Number *</label>
                <input type="tel" className="w-full bg-[#1e1e1e] border-[1.5px] border-[#2a2a2a] text-white p-4 font-body text-[15px] outline-none focus:border-yellow transition-colors placeholder-[#8a8a8a]" placeholder="+91 XXXXX XXXXX"/>
              </div>
              <div>
                <label className="block font-display text-xs font-bold tracking-[2px] uppercase text-gray mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#1e1e1e] border-[1.5px] border-[#2a2a2a] text-white p-4 font-body text-[15px] outline-none focus:border-yellow transition-colors placeholder-[#8a8a8a]" placeholder="your@email.com"/>
              </div>
              <div>
                <label className="block font-display text-xs font-bold tracking-[2px] uppercase text-gray mb-2">Service Required *</label>
                <select className="w-full bg-[#1e1e1e] border-[1.5px] border-[#2a2a2a] text-white p-4 font-body text-[15px] outline-none focus:border-yellow transition-colors cursor-pointer appearance-none">
                  <option value="">Select a service</option>
                  <option>Excavation</option>
                  <option>Land Leveling</option>
                  <option>Demolition</option>
                  <option>Site Clearing</option>
                  <option>Road Work</option>
                  <option>Machine Hire</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-display text-xs font-bold tracking-[2px] uppercase text-gray mb-2">Project Location</label>
                <input type="text" className="w-full bg-[#1e1e1e] border-[1.5px] border-[#2a2a2a] text-white p-4 font-body text-[15px] outline-none focus:border-yellow transition-colors placeholder-[#8a8a8a]" placeholder="Area / City"/>
              </div>
              <div>
                <label className="block font-display text-xs font-bold tracking-[2px] uppercase text-gray mb-2">Message *</label>
                <textarea className="w-full bg-[#1e1e1e] border-[1.5px] border-[#2a2a2a] text-white p-4 font-body text-[15px] outline-none focus:border-yellow transition-colors placeholder-[#8a8a8a] min-h-[130px] resize-y" placeholder="Describe your project requirements, timeline, and any other details..."></textarea>
              </div>
              <button type="submit" className="btn btn-yellow w-full justify-center mt-2">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </>
  );
}