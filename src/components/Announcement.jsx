import React from 'react';
import { motion } from 'framer-motion';
import { GoldFiligreeCorner, GoldHeaderFrame, GoldDivider } from './FloralElements';
import f1Img from '../assets/f1.png';
import f2Img from '../assets/f2.png';

export default function Announcement({ couple, eventDate }) {
  return (
    <section className="relative pt-6 pb-10 px-3.5 sm:px-4 text-center overflow-visible">
      {/* 1. Top-Left Open Lotus (f1.png) - Hugging the VERY OUTER top-left edge of the page */}
      <div className="absolute top-0 left-0 w-36 sm:w-44 pointer-events-none select-none z-20">
        <img
          src={f1Img}
          alt="Pink lotus top left outer edge"
          className="w-full h-auto object-contain origin-top-left"
        />
      </div>

      {/* 2. Bottom-Right Lotus Bud with Stem (f2.png) - Hugging the VERY OUTER right edge of the page */}
      <div className="absolute top-[320px] sm:top-[350px] right-0 w-32 sm:w-40 pointer-events-none select-none z-20">
        <img
          src={f2Img}
          alt="Pink lotus bud right outer edge"
          className="w-full h-auto object-contain origin-bottom-right"
        />
      </div>

      {/* 3. Mid-Left Lotus Bloom Decorator (Ceremony Info side edge matching Screenshot 1) */}
      <div className="absolute top-[68%] left-0 w-24 sm:w-28 pointer-events-none select-none z-10 opacity-90 drop-shadow-[0_4px_12px_rgba(184,98,120,0.15)]">
        <img
          src={f1Img}
          alt="Lotus petal left outer edge"
          className="w-full h-auto object-contain origin-left"
        />
      </div>

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center">
        {/* ============================================================
            SECTION 1: TALL HERO FRAME (Centered inside the page)
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full max-w-[340px] sm:max-w-[360px] min-h-[500px] sm:min-h-[540px] pt-16 pb-16 px-6 my-3 select-none flex flex-col justify-between items-center"
        >
          {/* Golden Filigree Frame Border */}
          <div className="absolute inset-0 rounded-[20px] border-[1.2px] border-[#D8B26E] bg-white/40 backdrop-blur-xs pointer-events-none">
            {/* Top-Right and Bottom-Left Golden Corner Motifs */}
            <GoldFiligreeCorner position="top-right" className="absolute top-1.5 right-1.5 w-10 h-10" />
            <GoldFiligreeCorner position="bottom-left" className="absolute bottom-1.5 left-1.5 w-10 h-10" />

            {/* Inner fine gold border */}
            <div className="absolute inset-2.5 rounded-[14px] border border-[#D8B26E]/40" />
          </div>

          {/* Inner Content inside Tall Hero Frame */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center my-auto text-center py-6">
            {/* "THE ENGAGEMENT OF" */}
            <p className="font-serif text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#A8586E] uppercase mt-2 mb-10 sm:mb-12">
              {couple.eventTitle || 'THE ENGAGEMENT OF'}
            </p>

            {/* Groom Name */}
            <h1 className="font-alex sm:font-pinyon text-6xl sm:text-7xl text-[#A8586E] font-normal tracking-wide leading-none my-2 drop-shadow-xs">
              {couple.groom || 'Youssef'}
            </h1>

            {/* & */}
            <p className="font-alex text-4xl sm:text-5xl text-[#A8586E]/80 font-normal my-3">
              &
            </p>

            {/* Bride Name */}
            <h1 className="font-alex sm:font-pinyon text-6xl sm:text-7xl text-[#A8586E] font-normal tracking-wide leading-none my-2 mb-4 drop-shadow-xs">
              {couple.bride || 'Menna'}
            </h1>
          </div>
        </motion.div>

        {/* ============================================================
            SECTION 2: CEREMONY INFO (Exact Match to Screenshot 1)
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 mb-4 w-full flex flex-col items-center text-center"
        >
          {/* Framed Header: ENGAGEMENT CEREMONY INFO */}
          <div className="relative inline-block px-10 py-3 my-2">
            <GoldFiligreeCorner position="top-left" className="absolute -top-1 -left-2 w-8 h-8 sm:w-9 sm:h-9" />
            <GoldFiligreeCorner position="top-right" className="absolute -top-1 -right-2 w-8 h-8 sm:w-9 sm:h-9" />
            
            <h2 className="font-serif text-base sm:text-lg font-bold tracking-[0.22em] text-[#A8586E] uppercase">
              {couple.ceremonyHeader || 'ENGAGEMENT CEREMONY INFO'}
            </h2>
          </div>

          {/* Announcement Subtext */}
          <div className="space-y-1 mt-4 mb-6">
            <p className="font-serif text-xs sm:text-sm tracking-[0.2em] text-[#A8586E] uppercase font-normal">
              {couple.announcementLine1 || 'WE JOYFULLY ANNOUNCE'}
            </p>
            <p className="font-serif text-xs sm:text-sm tracking-[0.2em] text-[#A8586E] uppercase font-normal">
              {couple.announcementLine2 || 'THE ENGAGEMENT OF OUR CHILDREN'}
            </p>
          </div>
        </motion.div>

        {/* Groom & Bride Details with Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full my-2 space-y-4"
        >
          {/* Groom */}
          <div className="flex flex-col items-center">
            <h3 className="font-alex sm:font-pinyon text-4xl sm:text-5xl text-[#A8586E] font-normal tracking-wide">
              {couple.groom || 'Youssef'}
            </h3>
            <span className="text-[11px] uppercase tracking-[0.38em] text-[#A8586E]/75 font-medium mt-1">
              {couple.groomTitle || 'GROOM'}
            </span>
          </div>

          {/* & Symbol */}
          <div className="font-alex text-2xl sm:text-3xl text-[#A8586E]/70 py-0.5">
            &
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center">
            <h3 className="font-alex sm:font-pinyon text-4xl sm:text-5xl text-[#A8586E] font-normal tracking-wide">
              {couple.bride || 'Menna'}
            </h3>
            <span className="text-[11px] uppercase tracking-[0.38em] text-[#A8586E]/75 font-medium mt-1">
              {couple.brideTitle || 'BRIDE'}
            </span>
          </div>
        </motion.div>

        {/* Golden Horizontal Divider */}
        <GoldDivider className="mt-8 mb-2" />
      </div>
    </section>
  );
}
