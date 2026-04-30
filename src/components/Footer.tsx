import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/">
            <Logo light />
          </Link>
          <p className="text-sm leading-relaxed">
            A premium textile manufacturer and global supplier, committed to export-quality production and sustainable manufacturing practices for over a decade.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-red transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-brand-red transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-brand-red transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Our Story</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Product Catalog</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Latest Industry Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Request a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-6">Product Categories</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/products?cat=Towels" className="hover:text-white transition-colors">Premium Towels</Link></li>
            <li><Link to="/products?cat=Bedsheets" className="hover:text-white transition-colors">Luxury Bedsheets</Link></li>
            <li><Link to="/products?cat=Aprons" className="hover:text-white transition-colors">Industrial Aprons</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Kitchen Textiles</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-green shrink-0 mt-0.5" />
              <span>123 Textile Zone, Export Hub,<br />Industrial Area, Dhaka</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-green shrink-0" />
              <span>+880 1234 567 890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-green shrink-0" />
              <span>exports@arrowcompany.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs text-center flex flex-col md:flex-row justify-between gap-4">
        <p>© 2026 ARROW COMPANY. All rights reserved.</p>
        <div className="flex gap-6 justify-center">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
