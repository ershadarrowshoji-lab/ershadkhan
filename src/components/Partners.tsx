import React from 'react';
import { motion } from 'motion/react';

const PARTNERS = [
  { name: 'Global Luxe Hotels', logo: 'https://cdn.worldvectorlogo.com/logos/hilton-2.svg' },
  { name: 'Euro Linens', logo: 'https://cdn.worldvectorlogo.com/logos/marriott-international.svg' },
  { name: 'Nordic Stay', logo: 'https://cdn.worldvectorlogo.com/logos/hyatt.svg' },
  { name: 'Premium Textiles UK', logo: 'https://cdn.worldvectorlogo.com/logos/sheraton-7.svg' },
  { name: 'Asia Hospitality', logo: 'https://cdn.worldvectorlogo.com/logos/westin.svg' },
  { name: 'Oceanic Resorts', logo: 'https://cdn.worldvectorlogo.com/logos/intercontinental-hotels-group.svg' },
];

export default function Partners() {
  return (
    <section className="py-12 bg-slate-50 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-2 block">Global Footprint</span>
        <h2 className="text-2xl font-display font-bold text-slate-900">Trusted by Global Brands</h2>
        <div className="w-10 h-1 bg-brand-green mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-12 py-4"
          animate={{ x: [0, -1035] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <div className="h-12 w-32 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
