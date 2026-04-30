import React from 'react';
import { motion } from 'motion/react';
import { Factory, Award, Target, Eye, ShieldCheck, Users, Globe } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      {/* Intro */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeIn} className="space-y-8">
          <div className="text-brand-red font-bold uppercase tracking-widest text-sm">About Our Company</div>
          <h1 className="text-5xl font-display font-bold leading-tight">Tradition and Innovation in Every Thread.</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Founded with a vision to revolutionize the textile export landscape, ARROW COMPANY has grown from a local unit to a globally recognized manufacturer and supplier. 
            We specialize in providing high-quality, sustainable, and customizable textile products to businesses worldwide.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="text-slate-900 font-bold text-3xl">12+</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Years Experience</p>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-3xl">100%</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80" 
            alt="Factory Environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-red/10"></div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div variants={fadeIn} className="space-y-6 bg-white/5 p-12 rounded-3xl border border-white/10">
            <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center mb-6">
              <Target size={30} />
            </div>
            <h2 className="text-3xl font-display font-bold">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              To deliver superior quality textile products through sustainable practices, fostering long-term global partnerships built on trust, innovation, and exceptional craftsmanship.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6 bg-white/5 p-12 rounded-3xl border border-white/10">
            <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-6">
              <Eye size={30} />
            </div>
            <h2 className="text-3xl font-display font-bold">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To be the world’s most reliable textile manufacturing partner, setting global benchmarks for quality, worker welfare, and environment-friendly production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-display font-bold">Our Core Capabilities</h2>
          <p className="text-slate-600">State-of-the-art facilities and a passionate team dedicated to textile excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Factory, title: "Modern Production", desc: "Equipped with advanced weaving, dyeing, and stitching machinery for bulk efficiency." },
            { icon: Award, title: "Quality Standards", desc: "Rigorous quality control at every stage, from yarn selection to final packaging." },
            { icon: Users, title: "Expert Team", desc: "A team of skilled designers, engineers, and quality analysts with decades of experience." },
            { icon: ShieldCheck, title: "Compliance", desc: "Full adherence to international labor laws and environmental safety standards." },
            { icon: Target, title: "Customization", desc: "Bespoke manufacturing services (OEM/ODM) to match your brand requirements." },
            { icon: Globe, title: "Export Powerhouse", desc: "Strong logistical network ensuring timely deliveries to over 25 countries worldwide." }
          ].map((item, i) => (
            <motion.div 
               key={i} 
               variants={fadeIn} 
               className="p-8 rounded-2xl border border-slate-100 hover:border-brand-red/30 hover:bg-slate-50 transition-all group"
            >
              <item.icon className="text-brand-red mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
