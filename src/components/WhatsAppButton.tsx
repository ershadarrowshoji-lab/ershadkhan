import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "+8801234567890"; // Sample number
  const message = "Hello, I am interested in ARROW COMPANY products.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-1.5 rounded-lg shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </div>
      <MessageCircle size={28} />
    </a>
  );
}
