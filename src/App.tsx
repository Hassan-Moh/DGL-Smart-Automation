import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Wifi, 
  Camera, 
  Zap, 
  Menu, 
  X, 
  MessageSquare,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CONTACT_PHONE = "0541853579";
const SECONDARY_CONTACT_PHONE = "0244729331";

const ServiceCard = ({ icon: Icon, title, items, onQuote }: any) => (
  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all border-l-4 border-l-brand-blue group">
    <div className="flex items-start gap-4">
      <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <div className="flex-1">
        <h3 className="font-extrabold text-sm text-slate-900 mb-2 uppercase tracking-tight">{title}</h3>
        <ul className="text-[10px] text-slate-500 font-bold space-y-1 mb-4 uppercase tracking-tighter">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-1.5 opacity-80">
              <div className="w-1 h-1 bg-brand-blue rounded-full"></div>
              {item}
            </li>
          ))}
        </ul>
        <button 
          onClick={onQuote}
          className="text-brand-blue font-black text-[9px] uppercase tracking-widest hover:underline"
        >
          Request Details →
        </button>
      </div>
    </div>
  </div>
);

const PackageCard = ({ title, price, features, featured }: any) => (
  <div className={`relative ${featured ? 'bg-slate-900 text-white ring-4 ring-brand-yellow/20' : 'bg-white border border-slate-100'} rounded-[2.5rem] p-10 flex flex-col h-full shadow-xl transition-transform hover:-translate-y-1`}>
    {featured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
        Best Seller
      </div>
    )}
    <h3 className={`text-[10px] uppercase tracking-[0.2em] font-black mb-4 ${featured ? 'text-brand-yellow' : 'text-slate-400'}`}>{title}</h3>
    <div className="text-4xl font-black mb-8 tracking-tighter">
      {price}
    </div>
    <ul className="space-y-4 mb-10 flex-1">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-tighter opacity-80">
          <Zap size={14} className={featured ? 'text-brand-yellow' : 'text-brand-blue'} />
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${featured ? 'bg-brand-yellow text-slate-900 hover:bg-yellow-400' : 'bg-brand-blue text-white hover:bg-slate-800 shadow-md'}`}>
      Select Package
    </button>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/message/2BYPTDVOCIVKA1", '_blank');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      {/* Top Header / Trust Bar */}
      <header className="bg-brand-primary text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white text-brand-primary font-black px-2 py-1 rounded text-lg leading-none">DGL</div>
            <div className="text-[10px] font-bold tracking-widest uppercase opacity-80 hidden sm:block">Smart Automation & Security</div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-200 transition-colors">Services</button>
            <button onClick={() => scrollToSection('packages')} className="hover:text-blue-200 transition-colors">Packages</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-200 transition-colors">Contact</button>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-xs font-semibold">
            <span className="hidden lg:inline opacity-70 text-[10px] uppercase tracking-widest">📍 Accra & Tamale</span>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
              <a href={`tel:${CONTACT_PHONE}`} className="text-white bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 hover:bg-white/20 transition-colors text-[9px] sm:text-[10px] uppercase font-black tracking-widest whitespace-nowrap">📞 054 185 3579</a>
              <a href={`tel:${SECONDARY_CONTACT_PHONE}`} className="text-white bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 hover:bg-white/20 transition-colors text-[9px] sm:text-[10px] uppercase font-black tracking-widest whitespace-nowrap">📞 024 472 9331</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 lg:p-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Section 1: Hero Area (5 cols) */}
          <section className="md:col-span-12 lg:col-span-5 flex flex-col gap-4">
            <div className="clean-card p-10 flex-1 flex flex-col justify-center relative overflow-hidden">
              <div className="inline-block bg-brand-blue/10 text-brand-blue text-[10px] font-black px-3 py-1 rounded-full mb-6 uppercase tracking-widest w-fit">
                Fast Installation (24–48 Hours)
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6">
                Secure Your Home & Business with <span className="text-brand-blue">Smart Automation</span>
              </h1>
              <p className="text-slate-600 text-sm mb-10 leading-relaxed max-w-md font-medium">
                CCTV, Smart Gate Motors, Electric Fencing & Starlink — Reliable, Professional & 6 Months Warranty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10 relative z-10">
                <button onClick={handleWhatsApp} className="btn-green flex-1 py-4 text-[10px] uppercase tracking-widest font-black">
                  👉 WhatsApp Now
                </button>
                <a href={`tel:${CONTACT_PHONE}`} className="btn-primary flex-1 py-4 text-[10px] uppercase tracking-widest font-black">
                  📞 Call Now
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 mt-auto">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-700">
                  <span className="text-brand-green text-lg">✔</span> 6 Months Warranty
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-700">
                  <span className="text-brand-green text-lg">✔</span> Serving All Regions
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-center">
              <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold mb-4">Why Choose DGL?</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[10px] font-bold">
                <li className="flex items-center gap-2 opacity-80 uppercase tracking-tighter self-center">• Clean Professional Work</li>
                <li className="flex items-center gap-2 opacity-80 uppercase tracking-tighter self-center">• Ongoing Global Support</li>
                <li className="flex items-center gap-2 opacity-80 uppercase tracking-tighter self-center">• Affordable & Reliable</li>
                <li className="flex items-center gap-2 opacity-80 uppercase tracking-tighter self-center">• Security Grade Tech</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Services Area (4 cols) */}
          <section id="services" className="md:col-span-6 lg:col-span-4 flex flex-col gap-4">
            <div className="clean-card p-6 flex-1">
              <h2 className="text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                Our Specialized Services
              </h2>
              <div className="flex flex-col gap-2.5">
                <ServiceCard 
                  icon={Lock}
                  title="Smart Gate Automation"
                  items={["Remote Control & Mobile Access"]}
                  onQuote={handleWhatsApp}
                />
                <ServiceCard 
                  icon={Camera}
                  title="CCTV & Surveillance"
                  items={["IP Cameras & 4G Solar Solutions"]}
                  onQuote={handleWhatsApp}
                />
                <ServiceCard 
                  icon={Shield}
                  title="Advanced Security"
                  items={["Electric Fencing & EM Locks"]}
                  onQuote={handleWhatsApp}
                />
                <ServiceCard 
                  icon={Wifi}
                  title="Starlink & Networking"
                  items={["Fast Installation & Optimization"]}
                  onQuote={handleWhatsApp}
                />
                <ServiceCard 
                  icon={Cpu}
                  title="IT & AI Automation"
                  items={["Business WhatsApp & Chatbots"]}
                  onQuote={handleWhatsApp}
                />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-4">Client Feedback</h3>
              <p className="italic text-slate-700 text-xs mb-4 leading-relaxed font-medium">“Now I can control my gate from my phone. This is real convenience!”</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-blue/10 rounded-full flex items-center justify-center text-[10px] text-brand-blue font-black tracking-tighter">RC</div>
                <p className="text-[10px] text-brand-blue font-bold uppercase tracking-tight">— Residential Client, Accra</p>
              </div>
            </div>
          </section>

          {/* Section 3: Packages & Form Focus (3 cols) */}
          <section id="packages" className="md:col-span-6 lg:col-span-3 flex flex-col gap-4">
            <PackageCard 
              featured
              title="Smart Gate Package"
              price="GHC 10,000"
              features={[
                "Gate Motor + Backup",
                "Rack + 2 Remotes",
                "Full Installation",
                "Mobile Phone Setup",
                "6 Months Warranty"
              ]}
            />

            <div id="contact" className="clean-card p-6 flex flex-col flex-1">
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase text-xs tracking-widest">
                <Zap size={14} className="text-brand-yellow fill-brand-yellow" />
                Request a Quote
              </h3>
              <form className="flex flex-col gap-3 flex-grow" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[10px] outline-none focus:border-brand-blue transition-colors font-medium"
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[10px] outline-none focus:border-brand-blue transition-colors font-medium"
                />
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[10px] outline-none text-slate-500 font-medium">
                  <option>Service Needed</option>
                  <option>Gate Automation</option>
                  <option>CCTV Setup</option>
                  <option>Starlink</option>
                  <option>Electric Fencing</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Location (Accra/Tamale)" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[10px] outline-none focus:border-brand-blue transition-colors font-medium"
                />
                <button onClick={handleWhatsApp} className="mt-auto w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-black py-4 rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-md transition-all">
                  Get My Quote
                </button>
              </form>
            </div>
          </section>

        </div>
      </main>

      {/* Trust Footer */}
      <footer className="bg-white border-t border-slate-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-slate-400 font-black uppercase tracking-[0.15em]">
          <div>© {new Date().getFullYear()} DGL Smart Systems. All rights reserved. Professional Grade.</div>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-brand-green rounded-full shadow-sm"></span> Online Support</span>
            <span>Accra & Tamale</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <button 
        onClick={handleWhatsApp}
        className="whatsapp-float group hover:scale-105 active:scale-95 transition-all"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 whitespace-nowrap text-[10px] font-black uppercase tracking-widest">WhatsApp</span>
        <MessageSquare size={18} className="fill-current" />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-6 md:hidden"
          >
            <div className="bg-white w-full max-w-sm rounded-[2rem] p-8 flex flex-col gap-6 text-center shadow-2xl">
              <div className="bg-brand-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black mb-2">DGL</div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">Navigation</h3>
              <button onClick={() => scrollToSection('services')} className="text-sm font-extrabold py-2 text-slate-600 hover:text-brand-blue uppercase tracking-widest">Our Services</button>
              <button onClick={() => scrollToSection('packages')} className="text-sm font-extrabold py-2 text-slate-600 hover:text-brand-blue uppercase tracking-widest">Packages</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-extrabold py-2 text-slate-600 hover:text-brand-blue uppercase tracking-widest">Quote Form</button>
              <button onClick={handleWhatsApp} className="btn-green mt-4 py-4 text-[10px] font-black uppercase tracking-widest">WhatsApp Contact</button>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 font-extrabold uppercase text-[9px] tracking-[0.2em] mt-4">Close Menu</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
