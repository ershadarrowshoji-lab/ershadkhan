import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Factory, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&w=1600&q=70" 
            alt="Textile Factory" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div variants={fadeIn} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-bold tracking-wide uppercase">
              <ShieldCheck size={16} />
              Trusted Global Manufacturer
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display leading-[1.1] font-bold text-slate-900">
              Quality Textile Solutions for <span className="text-brand-red">Global</span> Markets.
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              ARROW COMPANY provides premium towels, bedsheets, and industrial textiles with export-quality craftsmanship and sustainable production standards.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products" 
                className="bg-brand-red text-white pr-2 pl-8 py-3.5 rounded-full font-bold flex items-center gap-6 shadow-xl hover:shadow-2xl hover:bg-brand-red/90 transition-all group"
              >
                View Collections
                <div className="bg-white/20 p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={20} />
                </div>
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 rounded-full font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Our Story
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4 border-t border-slate-100">
              <div>
                <p className="text-2xl font-bold text-slate-900">10+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Years Exp.</p>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-bold text-slate-900">25+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Global Markets</p>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Quality Assurance</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1616486332112-4eadaadad1f0?auto=format&fit=crop&w=1200&q=80" 
                alt="Product Showcase" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl z-0"></div>
            
            <div className="absolute bottom-10 -left-20 z-20 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs animate-bounce-slow">
              <div className="bg-brand-green/20 p-3 rounded-xl">
                <CheckCircle2 className="text-brand-green" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Eco-Certified</p>
                <p className="text-sm text-slate-500">Sustainable production standards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Why Choose ARROW COMPANY?</h2>
            <p className="text-slate-600">We combine traditional craftsmanship with modern efficiency to deliver the best textile products globally.</p>
          </div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-brand-red/5 rounded-xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Each product undergoes rigorous quality checks to meet international export standards, ensuring durability and comfort.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-brand-green/5 rounded-xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-all">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Export</h3>
              <p className="text-slate-600 text-sm leading-relaxed">With clients in USA, Europe, and Asia, we have mastered the logistics and compliance required for smooth global supply.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-brand-red/5 rounded-xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                <Factory size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">State-of-the-art Factory</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Our manufacturing unit is equipped with modern machinery to handle bulk orders efficiently without compromising quality.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Preview Slider */}
      <section className="py-24 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="text-brand-green font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <div className="w-8 h-0.5 bg-brand-green"></div>
              Our Collections
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Showcasing Excellence.</h2>
          </div>
          <Link to="/products" className="text-brand-red font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2">
            View All Products <ArrowRight size={20} />
          </Link>
        </div>

        <div className="relative flex overflow-hidden group/slider">
          {/* First set of products */}
          <motion.div 
            className="flex gap-8 whitespace-nowrap py-10 px-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ 
              duration: 60, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...PRODUCTS, ...PRODUCTS].map((product, idx) => (
              <div 
                key={`${product.id}-${idx}`} 
                className="w-[350px] shrink-0 bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <Link to={`/product/${product.id}`} className="block group/link">
                  <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-100 aspect-square group/img">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] cubic-bezier(0.4, 0, 0.2, 1) group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors duration-700"></div>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase text-slate-900 tracking-wider shadow-sm z-10 border border-white/20">
                      {product.category}
                    </div>
                    {/* View Label */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10">
                      <div className="bg-brand-red text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-500 shadow-xl">
                        View Item
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover/link:text-brand-red transition-colors whitespace-normal">{product.name}</h3>
                  <p className="text-slate-500 text-sm whitespace-normal line-clamp-2 leading-relaxed">{product.description}</p>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/10 blur-[120px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">Ready to Elevate Your Textile Supply?</h2>
              <p className="text-slate-400 text-lg max-w-lg">Get in touch with our export team and receive a custom quote for your bulk order today.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link to="/contact" className="bg-brand-green text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-brand-green/90 transition-all flex items-center gap-3">
                  Request a Quote
                </Link>
                <Link to="/contact" className="border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <p className="text-white font-bold mb-1">Fast Shipping</p>
                <p className="text-slate-400 text-xs">Global logistics network for timely delivery.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mt-8">
                <p className="text-white font-bold mb-1">Custom Orders</p>
                <p className="text-slate-400 text-xs">OEM & ODM services tailored to your brand.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <p className="text-white font-bold mb-1">Secure Payments</p>
                <p className="text-slate-400 text-xs">Multiple secure international payment options.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mt-8">
                <p className="text-white font-bold mb-1">24/7 Support</p>
                <p className="text-slate-400 text-xs">Dedicated account managers for your orders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
