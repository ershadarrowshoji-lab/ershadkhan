import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS, Product } from '@/src/constants';
import { ArrowLeft, CheckCircle, Package, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = React.useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setActiveImage(product.image);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-2xl font-bold">Product not found.</h1>
        <Link to="/products" className="text-brand-red underline mt-4 inline-block">Back to Products</Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  const productImages = product.images || [product.image];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mb-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors font-medium">
            <ArrowLeft size={18} />
            Back to Collections
          </Link>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <span>Products</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>{product.category}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-brand-red">{product.subCategory}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image Side (Gallery) */}
          <motion.div variants={fadeIn} className="lg:col-span-7 space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl bg-white group">
              <img 
                src={activeImage || product.image} 
                alt={product.name} 
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Thumbnails */}
            {productImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={cn(
                      "w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0",
                      activeImage === img ? "border-brand-red scale-105 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`${product.name} gallery ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="hidden lg:grid grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-slate-100/50">
                <Truck className="text-brand-red" size={28} />
                <div className="space-y-1">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-900">Swift Logistics</span>
                  <span className="block text-[10px] text-slate-500">Global Coverage</span>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-slate-100/50">
                <ShieldCheck className="text-brand-green" size={28} />
                <div className="space-y-1">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-900">QC Verified</span>
                  <span className="block text-[10px] text-slate-500">Double Inspected</span>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-slate-100/50">
                <Package className="text-slate-900" size={28} />
                <div className="space-y-1">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-900">Eco-Packing</span>
                  <span className="block text-[10px] text-slate-500">Export Grade</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div variants={fadeIn} className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/5 text-brand-red rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-brand-red/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></div>
                  Premium Quality
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight text-slate-900 tracking-tight">
                  {product.name}
                </h1>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-normal italic border-l-4 border-brand-green pl-6 py-2 bg-slate-50/50 rounded-r-2xl">
                "{product.description}"
              </p>
            </div>

            {/* Product Prescription / Tech Specs */}
            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <div className="w-5 h-0.5 bg-brand-red"></div>
                Technical Prescription
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Base Material</span>
                    <span className="text-sm font-bold text-brand-green">{product.materials}</span>
                  </div>
                  <div className="space-y-4">
                    {product.specifications ? (
                      product.specifications.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-slate-500">{spec.label}</span>
                          <span className="font-bold text-slate-900">{spec.value}</span>
                        </div>
                      ))
                    ) : (
                      <React.Fragment>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-500">GSM/Weight</span>
                          <span className="font-bold text-slate-900">High Density</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-500">Finish</span>
                          <span className="font-bold text-slate-900">Premium Soft</span>
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-xl flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Standard MOQ</span>
                    <span className="text-xl font-display font-bold text-brand-green">{product.moq}</span>
                  </div>
                  <Package className="opacity-20" size={40} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Available Formats</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span key={size} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:border-brand-red hover:text-brand-red transition-all cursor-default">
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <Link 
                to="/contact" 
                className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-brand-red/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Inquire & Get Quote
                <ArrowRight size={20} />
              </Link>
              <div className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <span>Free Samples*</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>Fast Samples</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>Global Support</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Manufacturing Guarantee / Trust Section */}
        <motion.div variants={fadeIn} className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-slate-100 bg-slate-50/30 px-8 rounded-[3rem]">
          <div className="space-y-3 px-4">
            <h4 className="font-black text-[10px] uppercase tracking-widest text-brand-red">Ethical Sourcing</h4>
            <p className="text-sm text-slate-600 leading-relaxed">All raw materials are certified for ethical production and sustainable farming practices.</p>
          </div>
          <div className="space-y-3 px-4 md:border-l border-slate-200">
            <h4 className="font-black text-[10px] uppercase tracking-widest text-brand-green">Lab Tested</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Every batch undergoes rigorous tensile strength and color-fastness testing in our in-house lab.</p>
          </div>
          <div className="space-y-3 px-4 lg:border-l border-slate-200">
            <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-900">Custom Branding</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Available with woven labels, embroidery, and custom packaging according to your brand guidelines.</p>
          </div>
          <div className="space-y-3 px-4 md:border-l border-slate-200">
            <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-600">Export Ready</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Fully compliant with international shipping standards and customs documentation requirements.</p>
          </div>
        </motion.div>

        {/* Global Trade & Payment Terms */}
        <motion.div variants={fadeIn} className="mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 blur-[100px] rounded-full -mr-48 -mt-48 transition-transform duration-1000 group-hover:scale-110"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                <Truck size={14} className="text-brand-green" />
                Trade Intelligence
              </div>
              <h2 className="text-3xl font-display font-bold">Global Export <br /><span className="text-brand-red">Payment & Shipping</span></h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                As a leading Bangladeshi textile exporter, we offer flexible terms to ensure a smooth and transparent transaction for our global partners.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Payment Terms */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h4 className="text-brand-green font-black text-xs uppercase tracking-[0.2em] mb-4">Payment Methods (USD)</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Irrevocable L/C at Sight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">T/T (30% Advance, 70% against BL)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Wire Transfer in USD Currency</span>
                  </li>
                </ul>
              </div>

              {/* Shipment Terms */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h4 className="text-brand-red font-black text-xs uppercase tracking-[0.2em] mb-4">Shipment & Delivery</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-red shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">FOB (Chattogram Port, BD)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-red shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">CIF (Destination Port)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-red shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Lead Time: 45-90 Days (depend on qty)</span>
                  </li>
                </ul>
              </div>

              {/* Buyer Friendly Policies */}
              <div className="md:col-span-2 bg-brand-green/20 border border-brand-green/20 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6">
                <div className="bg-brand-green p-4 rounded-2xl shrink-0">
                  <ShieldCheck size={32} className="text-white" />
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">Buyer Friendly Guarantee</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Free pre-production samples (buyer pays courier) • 100% Pre-shipment quality inspection • Full documentation support (CO, Packing List, Invoice).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 space-y-12">
            <div className="flex items-end justify-between border-b border-slate-100 pb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-display font-bold">Related Products.</h2>
                <p className="text-slate-500">More from the {product.category} collection.</p>
              </div>
              <Link to="/products" className="text-brand-red font-bold flex items-center gap-2 hover:gap-4 transition-all">
                View All <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <Link 
                  key={rel.id} 
                  to={`/product/${rel.id}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-slate-100 mb-6 aspect-square">
                    <img 
                      src={rel.image} 
                      alt={rel.name} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-red transition-colors">{rel.name}</h3>
                  <p className="text-slate-500 text-sm">{rel.moq} MOQ</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
