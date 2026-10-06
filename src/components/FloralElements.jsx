import React from 'react';
import f1Img from '../assets/f1.png';
import f2Img from '../assets/f2.png';

/**
 * High-elegance Golden Filigree Corner Motif (SVG Vector)
 * Exactly matching the corner ornaments in the reference screenshots.
 */
export function GoldFiligreeCorner({ className = 'w-10 h-10', position = 'top-left' }) {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-y-[-1]';
      case 'bottom-right':
        return 'scale-[-1]';
      case 'top-left':
      default:
        return '';
    }
  };

  return (
    <div className={`pointer-events-none select-none ${getTransform()} ${className}`}>
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Main corner lines */}
        <path d="M 4 56 L 4 10 C 4 6.7 6.7 4 10 4 L 56 4" stroke="#D8B26E" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 8 52 L 8 14 C 8 10.7 10.7 8 14 8 L 52 8" stroke="#C5A059" strokeWidth="0.75" strokeOpacity="0.8" strokeLinecap="round" />
        
        {/* Ornate corner flourish scrolls */}
        <path d="M 12 12 C 16 12 20 16 20 20 C 20 24 16 26 13 24 C 10 22 10 17 14 14 Z" stroke="#D8B26E" strokeWidth="0.9" fill="none" />
        <path d="M 14 14 C 18 10 24 10 28 13 C 32 16 31 22 26 23 C 22 24 19 20 22 17" stroke="#D8B26E" strokeWidth="0.8" fill="none" />
        <path d="M 14 14 C 10 18 10 24 13 28 C 16 32 22 31 23 26 C 24 22 20 19 17 22" stroke="#D8B26E" strokeWidth="0.8" fill="none" />
        
        {/* Golden corner dots/accents */}
        <circle cx="10" cy="10" r="1.5" fill="#D8B26E" />
        <circle cx="56" cy="4" r="1.8" fill="#D8B26E" />
        <circle cx="4" cy="56" r="1.8" fill="#D8B26E" />
        <circle cx="34" cy="4" r="1.2" fill="#C5A059" />
        <circle cx="4" cy="34" r="1.2" fill="#C5A059" />
      </svg>
    </div>
  );
}

/**
 * Top & Bottom Pair of Golden Corner Brackets
 * Frames section headers like "WEDDING CEREMONY INFO"
 */
export function GoldHeaderFrame({ children, className = '' }) {
  return (
    <div className={`relative px-8 py-3 ${className}`}>
      {/* Top-left golden corner */}
      <GoldFiligreeCorner position="top-left" className="absolute -top-2 left-0 w-8 h-8 sm:w-10 sm:h-10" />
      {/* Top-right golden corner */}
      <GoldFiligreeCorner position="top-right" className="absolute -top-2 right-0 w-8 h-8 sm:w-10 sm:h-10" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/**
 * Elegant Golden Divider Line with central diamond or floral accent
 */
export function GoldDivider({ className = 'my-4' }) {
  return (
    <div className={`flex items-center justify-center gap-2 w-36 mx-auto select-none ${className}`}>
      <div className="h-[0.8px] bg-gradient-to-r from-transparent via-[#D8B26E] to-[#D8B26E] flex-1" />
      <div className="w-1.5 h-1.5 rotate-45 border border-[#D8B26E] bg-[#D8B26E]/30" />
      <div className="h-[0.8px] bg-gradient-to-l from-transparent via-[#D8B26E] to-[#D8B26E] flex-1" />
    </div>
  );
}

/**
 * Open Lotus Flower (f1.png) Corner Element
 */
export function LotusOpenCorner({ position = 'top-left', className = 'w-24 sm:w-28' }) {
  const getPosClass = () => {
    switch (position) {
      case 'top-left':
        return '-top-5 -left-5 sm:-top-6 sm:-left-6';
      case 'bottom-right':
        return '-bottom-5 -right-5 sm:-bottom-6 sm:-right-6 scale-x-[-1]';
      case 'bottom-left':
        return '-bottom-5 -left-5 sm:-bottom-6 sm:-left-6';
      case 'top-right':
        return '-top-5 -right-5 sm:-top-6 sm:-right-6 scale-x-[-1]';
      case 'mid-left':
        return 'top-1/2 -translate-y-1/2 -left-6 sm:-left-8';
      default:
        return '-top-5 -left-5';
    }
  };

  return (
    <div className={`absolute pointer-events-none select-none z-20 ${getPosClass()} ${className}`}>
      <img
        src={f1Img}
        alt="Pink Lotus Flower"
        className="w-full h-auto object-contain drop-shadow-[0_4px_12px_rgba(184,98,120,0.18)]"
      />
    </div>
  );
}

/**
 * Closed Lotus Bud with Golden Stem (f2.png) Corner Element
 */
export function LotusBudCorner({ position = 'bottom-right', className = 'w-24 sm:w-28' }) {
  const getPosClass = () => {
    switch (position) {
      case 'bottom-right':
        return '-bottom-4 -right-3 sm:-bottom-5 sm:-right-4';
      case 'bottom-left':
        return '-bottom-4 -left-3 sm:-bottom-5 sm:-left-4 scale-x-[-1]';
      case 'top-right':
        return '-top-4 -right-3 sm:-top-5 sm:-right-4 scale-y-[-1]';
      case 'top-left':
        return '-top-4 -left-3 sm:-top-5 sm:-left-4 scale-[-1]';
      default:
        return '-bottom-4 -right-3';
    }
  };

  return (
    <div className={`absolute pointer-events-none select-none z-20 ${getPosClass()} ${className}`}>
      <img
        src={f2Img}
        alt="Pink Lotus Bud"
        className="w-full h-auto object-contain drop-shadow-[0_4px_12px_rgba(184,98,120,0.18)]"
      />
    </div>
  );
}

/**
 * Luxurious Golden Arched Calendar Frame (Exact Vector Recreation of Screenshot 2)
 * Features curved baroque corners, top and bottom finial crests, and beaded gold side accents.
 */
export function GoldVintageCalendarFrame({ children, className = '' }) {
  return (
    <div className={`relative p-5 sm:p-7 rounded-[26px] bg-[#FFFFFF]/90 sm:bg-[#FFFDFA]/90 backdrop-blur-xs border-[1.5px] border-[#D8B26E] shadow-[0_8px_30px_rgba(184,98,120,0.08)] overflow-visible ${className}`}>
      {/* Top Ornamental Crest */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-7 pointer-events-none select-none z-10">
        <svg viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Central gold fleur / scroll */}
          <path d="M 60 2 C 60 2 63 9 68 10 C 73 11 76 8 76 5 C 76 2 71 3 67 7" stroke="#D8B26E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M 60 2 C 60 2 57 9 52 10 C 47 11 44 8 44 5 C 44 2 49 3 53 7" stroke="#D8B26E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M 60 0 L 60 8" stroke="#D8B26E" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="60" cy="1" r="1.8" fill="#D8B26E" />
          {/* Side flourishes */}
          <path d="M 40 12 C 48 11 54 6 60 6 C 66 6 72 11 80 12" stroke="#D8B26E" strokeWidth="1" strokeLinecap="round" />
          <path d="M 32 14 C 36 10 40 14 44 14" stroke="#D8B26E" strokeWidth="0.8" />
          <path d="M 88 14 C 84 10 80 14 76 14" stroke="#D8B26E" strokeWidth="0.8" />
          <circle cx="30" cy="14" r="1.2" fill="#D8B26E" />
          <circle cx="90" cy="14" r="1.2" fill="#D8B26E" />
        </svg>
      </div>

      {/* Bottom Ornamental Crest */}
      <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-7 pointer-events-none select-none z-10 scale-y-[-1]">
        <svg viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 60 2 C 60 2 63 9 68 10 C 73 11 76 8 76 5 C 76 2 71 3 67 7" stroke="#D8B26E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M 60 2 C 60 2 57 9 52 10 C 47 11 44 8 44 5 C 44 2 49 3 53 7" stroke="#D8B26E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M 60 0 L 60 8" stroke="#D8B26E" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="60" cy="1" r="1.8" fill="#D8B26E" />
          <path d="M 40 12 C 48 11 54 6 60 6 C 66 6 72 11 80 12" stroke="#D8B26E" strokeWidth="1" strokeLinecap="round" />
          <circle cx="30" cy="14" r="1.2" fill="#D8B26E" />
          <circle cx="90" cy="14" r="1.2" fill="#D8B26E" />
        </svg>
      </div>

      {/* Left side vertical gold beads / diamond accent */}
      <div className="absolute left-1.5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 rounded-full bg-[#D8B26E]" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#D8B26E]" />
        <div className="w-1 h-1 rounded-full bg-[#D8B26E]" />
      </div>

      {/* Right side vertical gold beads / diamond accent */}
      <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 rounded-full bg-[#D8B26E]" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#D8B26E]" />
        <div className="w-1 h-1 rounded-full bg-[#D8B26E]" />
      </div>

      {/* Inner thin golden line */}
      <div className="absolute inset-2 sm:inset-2.5 rounded-[20px] border border-[#D8B26E]/40 pointer-events-none" />

      {/* Main Content inside Calendar */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/**
 * Top Hero Golden Double-Line Border Frame with Corner Accents
 */
export function HeroGoldFrame({ children, className = '' }) {
  return (
    <div className={`relative p-6 sm:p-8 rounded-[24px] border border-[#D8B26E] shadow-[0_4px_25px_rgba(184,98,120,0.06)] bg-white/60 backdrop-blur-xs ${className}`}>
      {/* Corner Filigrees */}
      <GoldFiligreeCorner position="top-left" className="absolute top-1 left-1 w-9 h-9" />
      <GoldFiligreeCorner position="top-right" className="absolute top-1 right-1 w-9 h-9" />
      <GoldFiligreeCorner position="bottom-left" className="absolute bottom-1 left-1 w-9 h-9" />
      <GoldFiligreeCorner position="bottom-right" className="absolute bottom-1 right-1 w-9 h-9" />

      {/* Inner thin border */}
      <div className="absolute inset-2 rounded-[18px] border border-[#D8B26E]/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
