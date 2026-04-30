import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, Upload } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Towels',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real logic would be here
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 min-h-screen bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-brand-red font-bold uppercase tracking-widest text-sm">Contact Us</div>
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1]">Let's Start Your Global Supply Journey.</h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether you need a custom bulk order or have questions about our manufacturing process, our export team is here to assist you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email Us</p>
                  <p className="text-slate-500">exports@arrowtrade.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Call / WhatsApp</p>
                  <p className="text-slate-500">+880 1234 567 890</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Global Headquarters</p>
                  <p className="text-slate-500">123 Textile Zone, Industrial Hub,<br />Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-brand-red/5 rounded-3xl border border-brand-red/10 space-y-4">
              <h4 className="font-bold text-slate-900">Business Hours</h4>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Mon - Fri</span>
                <span className="font-bold text-slate-700">9:00 AM - 6:00 PM (GMT+6)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Sat</span>
                <span className="font-bold text-slate-700">10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            variants={fadeIn}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl -z-0"></div>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto">
                  <Send size={40} />
                </div>
                <h2 className="text-3xl font-display font-bold">Message Sent!</h2>
                <p className="text-slate-500">Thank you for your inquiry. Our export manager will contact you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-brand-red font-bold underline"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold">Request a Quote</h3>
                  <p className="text-slate-500 text-sm">Fill out the form below and we'll get back to you with the best rates.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-slate-300"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Company Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="Textiles Inc."
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-slate-300"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-slate-300"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Phone / WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+1 234 567 890"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-slate-300"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Product Interest</label>
                  <select 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-slate-600 appearance-none bg-[url('https://cdn0.iconfinder.com/data/icons/user-interface-2062/24/Chevron_Down-512.png')] bg-[length:16px] bg-[right_20px_center] bg-no-reverse"
                    value={formData.product}
                    onChange={(e) => setFormData({...formData, product: e.target.value})}
                  >
                    <option>Towels</option>
                    <option>Bedsheets</option>
                    <option>Aprons</option>
                    <option>Kitchen Textiles</option>
                    <option>Custom Request</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Message / Requirements</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements (Quantity, Sizes, Material, etc.)"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-slate-300 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex items-center gap-4 p-4 bg-brand-green/10 rounded-2xl text-xs text-slate-600 border border-brand-green/20">
                  <Upload size={16} className="text-brand-green shrink-0" />
                  <span>Optional: You can send your design files via WhatsApp for quicker custom analysis.</span>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:bg-brand-red/90 transition-all flex items-center justify-center gap-3"
                >
                  Request a Quote
                  <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
