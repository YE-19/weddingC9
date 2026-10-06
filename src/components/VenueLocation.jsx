import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Maximize2, X } from 'lucide-react';
import { GoldDivider } from './FloralElements';

export default function VenueLocation({ venue }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <section id="venue" className="py-8 sm:py-10 px-4 max-w-md mx-auto text-center">
      {/* Venue Header */}
      <div className="mb-6">
        <h2 className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-[#A8586E] uppercase">
          LOCATION
        </h2>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#A8586E] font-normal tracking-wide mt-2">
          {venue.name}
        </h3>
        {venue.subtitle && (
          <p className="font-serif text-xs sm:text-sm text-[#A8586E]/80 tracking-wider mt-1">
            {venue.subtitle}
          </p>
        )}
        {venue.address && (
          <p className="font-serif text-[11px] sm:text-xs text-[#A8586E]/65 tracking-wide mt-0.5">
            {venue.address}
          </p>
        )}
      </div>

      {/* Side-by-Side (if photo exists) or Centered Full Map */}
      <div className={venue.image ? "grid grid-cols-2 gap-2.5 sm:gap-3.5 w-full items-stretch" : "w-full max-w-[340px] sm:max-w-[360px] mx-auto"}>
        {/* Left Card: Venue Photo */}
        {venue.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F4E2E6] shadow-md border border-[#D8B26E]/40 cursor-pointer"
            onClick={() => setIsImageModalOpen(true)}
          >
            <img
              src={venue.image}
              alt={venue.name || 'Venue photo'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            {/* Inner subtle frame */}
            <div className="absolute inset-1.5 border border-white/50 rounded-xl sm:rounded-2xl pointer-events-none group-hover:border-white/90 transition-colors" />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg bg-[#742A3D]/70 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-serif flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="truncate">{venue.name}</span>
              <Maximize2 className="w-3 h-3 text-[#D8B26E] shrink-0 ml-1" />
            </div>
          </motion.div>
        )}

        {/* Right Card: Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`relative ${venue.image ? 'aspect-[3/4] sm:aspect-[4/5]' : 'aspect-[16/10] sm:aspect-[16/9] min-h-[220px]'} rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F4E2E6] shadow-md border border-[#D8B26E]/40`}
        >
          {/* Floating "Open in Maps" Button */}
          <div className="absolute top-2.5 left-2.5 z-20">
            <a
              href={venue.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 hover:bg-white text-[#A8586E] border border-[#A8586E]/20 text-[11px] font-serif font-medium shadow-md transition-all cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 text-[#A8586E]" />
            </a>
          </div>

          {/* Map Iframe */}
          <iframe
            title="Engagement Venue Map"
            src={venue.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[5%] contrast-[1.02]"
          />
        </motion.div>
      </div>

      {/* Golden Divider */}
      <div className="w-full flex justify-center mt-7">
        <GoldDivider className="w-40" />
      </div>

      {/* Venue Photo Lightbox Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#742A3D]/85 backdrop-blur-sm flex items-center justify-center p-4 select-none"
            onClick={() => setIsImageModalOpen(false)}
          >
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/15 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-auto object-cover max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
