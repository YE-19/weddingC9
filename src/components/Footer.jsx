import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer({ couple, eventDate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 text-center border-t border-[#A8586E]/15 mt-6 bg-[#FAF4F5]">
      <div className="max-w-md mx-auto flex flex-col items-center space-y-3">
        <h3 className="font-serif text-lg font-bold tracking-[0.18em] text-[#A8586E] uppercase">
          {couple.primary || 'Youssef & Menna'}
        </h3>

        <p className="font-serif text-xs text-[#A8586E]/70 tracking-wide">
          {eventDate.display || 'November 1, 2026'} • {eventDate.year || '2026'}
        </p>

        <button
          onClick={scrollToTop}
          className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#B86278] text-white text-[11px] font-serif uppercase tracking-wider hover:bg-[#A35268] transition-colors cursor-pointer shadow-xs"
        >
          <ArrowUp className="w-3 h-3" />
          <span>Back to Top</span>
        </button>

        <p className="text-[10px] text-[#A8586E]/45 tracking-wider uppercase pt-3 flex items-center justify-center gap-1">
          Made with <Heart className="w-2.5 h-2.5 text-[#B86278] fill-[#B86278]" /> for {couple.primary || 'Youssef & Menna'}
        </p>
      </div>
    </footer>
  );
}
