import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ArrowRight, CheckCircle } from 'lucide-react';
import { PRODUCTS, Product } from '@/src/constants';
import { useSearchParams, Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  // Sync state with URL params
  useEffect(() => {
    const cat = searchParams.get('cat') || 'All';
    const sub = searchParams.get('sub') || 'All';
    setSelectedCategory(cat);
    setSelectedSubCategory(sub);
  }, [searchParams]);

  useEffect(() => {
    let filtered = PRODUCTS;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedSubCategory !== 'All') {
      filtered = filtered.filter(p => p.subCategory === selectedSubCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSubCategory, searchQuery]);

  const categories = ['All', 'Towels', 'Bedsheets', 'Aprons'];
  
  const subCategories: Record<string, string[]> = {
    'Towels': ['All', 'Bath Towels', 'Hand Towels', 'Face Towels', 'Kitchen Towels', 'Diaper', 'Duster'],
    'Bedsheets': ['All', 'Hotel Bedsheets', 'Home Bedsheets', 'Hospital Sheets'],
    'Aprons': ['All', 'Hospital Apron', 'Kitchen Apron', 'Working Apron'],
    'All': []
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 min-h-screen bg-slate-50"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold">Our Collections.</h1>
          <p className="text-slate-500 max-w-xl">Explore our range of export-quality textiles manufactured with precision and care.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedSubCategory('All');
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === cat 
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {selectedCategory !== 'All' && subCategories[selectedCategory].length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {subCategories[selectedCategory].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubCategory(sub)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedSubCategory === sub 
                      ? 'bg-brand-green text-white shadow-md' 
                      : 'bg-white text-slate-500 border border-slate-200 hover:border-brand-green/30'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-brand-red/20 outline-none transition-all placeholder:text-slate-400 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id} 
                layout
                variants={fadeIn}
                className="bg-white rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all border border-slate-100"
              >
                <Link to={`/product/${product.id}`} className="block relative h-72 overflow-hidden bg-slate-100 group/img">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] cubic-bezier(0.4, 0, 0.2, 1) group-hover/img:scale-110"
                  />
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-700"></div>
                  
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <div className="bg-white/95 backdrop-blur-md px-3 font-display py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 border border-white/20 shadow-sm">
                      {product.category}
                    </div>
                    <div className="bg-brand-red/95 backdrop-blur-md px-3 font-display py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white border border-white/20 shadow-sm">
                      {product.subCategory}
                    </div>
                  </div>

                  {/* View indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-500">
                      View details
                    </div>
                  </div>
                </Link>
                
                <div className="p-8 space-y-6">
                  <div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-brand-red transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{product.description}</p>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle size={14} className="text-brand-green" />
                      Materials: {product.materials}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle size={14} className="text-brand-green" />
                      Sizes: {product.sizes.join(', ')}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle size={14} className="text-brand-green" />
                      MOQ: {product.moq}
                    </div>
                  </div>

                  <Link 
                    to={`/product/${product.id}`}
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-red transition-all group/btn"
                  >
                    Enquire Now
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full text-slate-300 mb-6">
              <Filter size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-400">No products found matching your criteria.</h3>
            <button 
              onClick={() => {setSelectedCategory('All'); setSelectedSubCategory('All'); setSearchQuery('');}}
              className="mt-6 text-brand-red font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
