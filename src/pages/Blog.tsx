import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/src/constants';
import ReactMarkdown from 'react-markdown';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Blog() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 min-h-screen bg-slate-50"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4 max-w-2xl">
          <div className="text-brand-green font-bold uppercase tracking-widest text-sm mb-2">Our Insights</div>
          <h1 className="text-5xl md:text-6xl font-display font-bold">Textile Industry & Export Blog.</h1>
          <p className="text-slate-600 text-lg">Stay updated with the latest trends, manufacturing techniques, and global export insights.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <motion.article 
              key={post.id} 
              variants={fadeIn}
              className="bg-white rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 bg-brand-red text-white py-2 px-4 rounded-xl text-xs font-bold shadow-lg">
                  New Article
                </div>
              </div>
              
              <div className="p-10 space-y-6 flex-grow flex flex-col">
                <div className="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-brand-green" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-brand-green" />
                    By {post.author}
                  </div>
                </div>

                <h2 className="text-3xl font-display font-bold leading-tight group-hover:text-brand-red transition-colors">{post.title}</h2>
                <p className="text-slate-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                
                <div className="pt-8 mt-auto">
                  <button className="flex items-center gap-3 font-bold text-slate-900 group-hover:gap-5 transition-all text-sm uppercase tracking-widest">
                    Read Full Story
                    <ArrowRight size={20} className="text-brand-red" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Blog Newsletter */}
        <div className="bg-brand-red p-12 md:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 space-y-4 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Subscribe to News</h2>
            <p className="text-white/80">Get the latest industry news and export updates directly to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder:text-white/60 outline-none focus:bg-white/30 transition-all font-medium"
              />
              <button className="bg-white text-brand-red px-10 py-4 rounded-2xl font-bold shadow-xl hover:bg-slate-50 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
