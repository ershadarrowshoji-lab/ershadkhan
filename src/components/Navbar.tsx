import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Towels', 
    path: '/products?cat=Towels',
    submenu: [
      { name: 'Bath Towels', path: '/products?cat=Towels&sub=Bath+Towels' },
      { name: 'Hand Towels', path: '/products?cat=Towels&sub=Hand+Towels' },
      { name: 'Face Towels', path: '/products?cat=Towels&sub=Face+Towels' },
      { name: 'Kitchen Towels', path: '/products?cat=Towels&sub=Kitchen+Towels' },
      { name: 'Diaper', path: '/products?cat=Towels&sub=Diaper' },
      { name: 'Duster', path: '/products?cat=Towels&sub=Duster' },
    ]
  },
  { 
    name: 'Bedsheets', 
    path: '/products?cat=Bedsheets',
    submenu: [
      { name: 'Hotel Bedsheets', path: '/products?cat=Bedsheets&sub=Hotel+Bedsheets' },
      { name: 'Home Bedsheets', path: '/products?cat=Bedsheets&sub=Home+Bedsheets' },
      { name: 'Hospital Sheets', path: '/products?cat=Bedsheets&sub=Hospital+Sheets' },
    ]
  },
  { 
    name: 'Aprons', 
    path: '/products?cat=Aprons',
    submenu: [
      { name: 'Hospital Apron', path: '/products?cat=Aprons&sub=Hospital+Apron' },
      { name: 'Kitchen Apron', path: '/products?cat=Aprons&sub=Kitchen+Apron' },
      { name: 'Working Apron', path: '/products?cat=Aprons&sub=Working+Apron' },
    ]
  },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.path} 
              className="relative group"
              onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) => cn(
                  "text-sm font-medium transition-colors hover:text-brand-red flex items-center gap-1 py-4",
                  isActive ? "text-brand-red" : "text-slate-600"
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className={cn("transition-transform", activeSubmenu === link.name && "rotate-180")} />}
              </NavLink>

              {link.submenu && (
                <AnimatePresence>
                  {activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="flex items-center justify-between px-4 py-3 text-sm text-slate-600 hover:text-brand-red hover:bg-brand-red/5 rounded-xl transition-all group/sub"
                        >
                          {sub.name}
                          <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link 
            to="/contact" 
            className="ml-4 bg-brand-red text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-red/90 transition-all shadow-md hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 md:hidden p-6 flex flex-col gap-2 max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.path} className="flex flex-col">
                <div 
                  className={cn(
                    "flex items-center justify-between text-lg font-medium py-3 px-4 rounded-xl",
                    location.pathname === link.path ? "text-brand-red bg-brand-red/5" : "text-slate-600"
                  )}
                  onClick={() => link.submenu ? setActiveSubmenu(activeSubmenu === link.name ? null : link.name) : null}
                >
                  <Link to={link.path} className="flex-grow">{link.name}</Link>
                  {link.submenu && (
                    <button className="p-2">
                       <ChevronDown size={20} className={cn("transition-transform", activeSubmenu === link.name && "rotate-180")} />
                    </button>
                  )}
                </div>
                
                {link.submenu && activeSubmenu === link.name && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="pl-8 flex flex-col gap-1 border-l-2 border-brand-red/10 ml-6 py-2"
                  >
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="py-2 text-slate-500 hover:text-brand-red"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-red text-white px-6 py-3 rounded-xl text-center font-semibold shadow-lg mx-4 mt-6 mb-4"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
