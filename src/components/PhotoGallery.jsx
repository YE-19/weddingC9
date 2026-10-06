import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { GoldDivider } from './FloralElements';

export default function PhotoGallery({ gallery = [] }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  if (!gallery || gallery.length === 0) return null;

  const isSingle = gallery.length === 1;
  const photo1 = gallery[0];
  const photo2 = gallery[1];
  const photo3 = gallery[2] || gallery[0];

  return (
    <section id="gallery" className="py-6 sm:py-8 px-4 max-w-lg mx-auto text-center">
      {/* Title */}
      <h2 className="font-serif text-lg sm:text-xl font-bold tracking-[0.25em] text-[#A8586E] uppercase mb-6">
        PHOTO GALLERY
      </h2>

      {isSingle ? (
        /* Single Photo Elegantly Centered */
        <div className="max-w-[280px] sm:max-w-[320px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#F4E2E6] shadow-lg border border-[#D8B26E]/50 cursor-pointer flex items-center justify-center"
            onClick={() => setSelectedPhoto(photo1)}
          >
            {/* Soft blurred ambient backdrop to fill frame seamlessly */}
            <img
              src={photo1.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-sm scale-115 opacity-40 select-none pointer-events-none"
            />

            {/* Full photo */}
            <img
              src={photo1.src}
              alt={photo1.title || 'Photo'}
              className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-2 border border-white/60 rounded-2xl pointer-events-none group-hover:border-white/90 transition-colors z-20" />
            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#742A3D]/50 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <Maximize2 className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      ) : (
        /* Asymmetric Gallery Layout */
        <div className="grid grid-cols-2 gap-3 sm:gap-3.5 max-w-sm sm:max-w-md mx-auto items-stretch">
          {/* Left Column: Stack of p1 & p2 */}
          <div className="flex flex-col gap-3 sm:gap-3.5 h-full justify-between">
            {/* p1 */}
            {photo1 && (
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative flex-1 aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4E2E6] shadow-md border border-[#D8B26E]/40 cursor-pointer flex items-center justify-center"
                onClick={() => setSelectedPhoto(photo1)}
              >
                <img
                  src={photo1.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-sm scale-115 opacity-45 select-none pointer-events-none"
                />
                <img
                  src={photo1.src}
                  alt={photo1.title || 'Groom'}
                  className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-1.5 border border-white/50 rounded-xl pointer-events-none group-hover:border-white/90 transition-colors z-20" />
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#742A3D]/40 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            )}

            {/* p2 */}
            {photo2 && (
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative flex-1 aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4E2E6] shadow-md border border-[#D8B26E]/40 cursor-pointer flex items-center justify-center"
                onClick={() => setSelectedPhoto(photo2)}
              >
                <img
                  src={photo2.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-sm scale-115 opacity-45 select-none pointer-events-none"
                />
                <img
                  src={photo2.src}
                  alt={photo2.title || 'Bride'}
                  className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-1.5 border border-white/50 rounded-xl pointer-events-none group-hover:border-white/90 transition-colors z-20" />
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#742A3D]/40 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Tall p3 */}
          {photo3 && (
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative h-full min-h-[220px] rounded-2xl overflow-hidden bg-[#F4E2E6] shadow-md border border-[#D8B26E]/40 cursor-pointer flex"
              onClick={() => setSelectedPhoto(photo3)}
            >
              <img
                src={photo3.src}
                alt={photo3.title || 'Couple'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-1.5 border border-white/50 rounded-xl pointer-events-none group-hover:border-white/90 transition-colors" />
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#742A3D]/40 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Golden Divider below Gallery */}
      <div className="w-full flex justify-center mt-7">
        <GoldDivider className="w-44" />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#742A3D]/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
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
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto object-cover max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
