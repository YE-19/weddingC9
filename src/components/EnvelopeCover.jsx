import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';
import f1Img from '../assets/f1.png';

// 40 Wide-spreading Lotus and Petal particles erupting across the screen when clicking Open
const floralBurstParticles = [
  // Ring 1: Medium reach
  { id: 1, angle: 0, distance: 220, scale: 1.2, rot: 180, type: 'lotus' },
  { id: 2, angle: 30, distance: 250, scale: 0.95, rot: -240, type: 'petal' },
  { id: 3, angle: 60, distance: 280, scale: 1.3, rot: 320, type: 'lotus' },
  { id: 4, angle: 90, distance: 240, scale: 0.9, rot: -180, type: 'gold' },
  { id: 5, angle: 120, distance: 270, scale: 1.25, rot: 270, type: 'lotus' },
  { id: 6, angle: 150, distance: 260, scale: 0.95, rot: -290, type: 'petal' },
  { id: 7, angle: 180, distance: 230, scale: 1.15, rot: 210, type: 'lotus' },
  { id: 8, angle: 210, distance: 270, scale: 0.9, rot: -160, type: 'gold' },
  { id: 9, angle: 240, distance: 250, scale: 1.2, rot: 300, type: 'lotus' },
  { id: 10, angle: 270, distance: 280, scale: 0.95, rot: -220, type: 'petal' },
  { id: 11, angle: 300, distance: 240, scale: 1.15, rot: 240, type: 'lotus' },
  { id: 12, angle: 330, distance: 260, scale: 0.9, rot: -190, type: 'gold' },

  // Ring 2: Wide outreach
  { id: 13, angle: 15, distance: 420, scale: 1.1, rot: 480, type: 'lotus' },
  { id: 14, angle: 45, distance: 480, scale: 0.9, rot: -520, type: 'petal' },
  { id: 15, angle: 75, distance: 450, scale: 1.2, rot: 540, type: 'gold' },
  { id: 16, angle: 105, distance: 500, scale: 1.0, rot: -460, type: 'lotus' },
  { id: 17, angle: 135, distance: 460, scale: 0.9, rot: 500, type: 'petal' },
  { id: 18, angle: 165, distance: 490, scale: 1.15, rot: -540, type: 'lotus' },
  { id: 19, angle: 195, distance: 440, scale: 0.85, rot: 470, type: 'gold' },
  { id: 20, angle: 225, distance: 470, scale: 1.1, rot: -510, type: 'lotus' },
  { id: 21, angle: 255, distance: 520, scale: 0.9, rot: 530, type: 'petal' },
  { id: 22, angle: 285, distance: 460, scale: 1.15, rot: -490, type: 'lotus' },
  { id: 23, angle: 315, distance: 490, scale: 0.85, rot: 520, type: 'gold' },
  { id: 24, angle: 345, distance: 440, scale: 1.05, rot: -480, type: 'lotus' },
];

export default function EnvelopeCover({ couple, eventDate, isOpened, onOpen, onStartAudio }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpened || isOpening) return;
    setIsOpening(true);

    if (onStartAudio) {
      onStartAudio();
    }

    try {
      // 1. Central high-energy blush & gold burst
      confetti({
        particleCount: 75,
        spread: 130,
        startVelocity: 45,
        origin: { y: 0.65 },
        colors: ['#B86278', '#D88A96', '#EBB0BE', '#D8B26E', '#FFFFFF'],
        scalar: 1.2,
      });

      // 2. Side showers
      setTimeout(() => {
        confetti({
          particleCount: 45,
          angle: 60,
          spread: 80,
          startVelocity: 55,
          origin: { x: 0.15, y: 0.7 },
          colors: ['#B86278', '#D8B26E', '#F3C5D0', '#FFFFFF'],
          scalar: 1.1,
        });
        confetti({
          particleCount: 45,
          angle: 120,
          spread: 80,
          startVelocity: 55,
          origin: { x: 0.85, y: 0.7 },
          colors: ['#B86278', '#D8B26E', '#F3C5D0', '#FFFFFF'],
          scalar: 1.1,
        });
      }, 150);

      // 3. Falling romantic shower of golden and pink petals
      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 150,
          startVelocity: 28,
          origin: { y: 0.2 },
          colors: ['#B86278', '#D8B26E', '#FCEEF1', '#FFFFFF'],
          scalar: 1.15,
          gravity: 0.7,
        });
      }, 280);
    } catch (e) {
      console.error(e);
    }

    // Delay for opening animation
    setTimeout(() => {
      onOpen();
      setIsOpening(false);
    }, 1150);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          key="envelope-modal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#CF7C90] via-[#B86278] to-[#9C435A] p-4 sm:p-6 select-none overflow-hidden"
        >
          {/* SVG Definitions for Petal Gradients */}
          <svg className="absolute w-0 h-0 pointer-events-none">
            <defs>
              <linearGradient id="pinkPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F9D4DC" />
                <stop offset="50%" stopColor="#D88A96" />
                <stop offset="100%" stopColor="#B86278" />
              </linearGradient>
            </defs>
          </svg>

          {/* Main Invitation Card (Pure White with Rounded Corners & overflow-hidden so flowers are cleanly inside) */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative w-full max-w-[320px] sm:max-w-[350px] bg-[#FFFFFF] rounded-[28px] sm:rounded-[32px] pt-7 pb-8 px-6 text-center shadow-[0_22px_50px_rgba(100,20,40,0.32)] border border-white/80 overflow-hidden"
          >
            {/* Top-Left Open Lotus Flower (f1.png) - Nestled inside the top-left corner */}
            <div className="absolute -top-2 -left-2 w-28 sm:w-32 pointer-events-none select-none z-0">
              <img
                src={f1Img}
                alt="Pink lotus top left"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Bottom-Right Open Lotus Flower (f1.png) - Nestled inside the bottom-right corner */}
            <div className="absolute -bottom-2 -right-2 w-28 sm:w-32 pointer-events-none select-none z-0 scale-[-1]">
              <img
                src={f1Img}
                alt="Pink lotus bottom right"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Inner Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Circular Pink Heart Badge with Glow Aura */}
              <div className="relative mt-2 mb-5">
                <div className="absolute inset-0 rounded-full bg-[#B86278]/25 blur-lg scale-150" />
                <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#B86278] flex items-center justify-center shadow-md">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              {/* Couple Calligraphy Names in Dusty Rose Script */}
              <div className="space-y-0 my-1">
                <h1 className="font-alex sm:font-pinyon text-4xl sm:text-5xl text-[#A8586E] font-normal tracking-wide leading-tight">
                  {couple.groom || 'Youssef'}
                </h1>
                <p className="font-alex text-2xl text-[#A8586E]/80 font-normal my-0.5">
                  &
                </p>
                <h1 className="font-alex sm:font-pinyon text-4xl sm:text-5xl text-[#A8586E] font-normal tracking-wide leading-tight">
                  {couple.bride || 'Menna'}
                </h1>
              </div>

              {/* Thin Line Divider with Center Diamond Flourish */}
              <div className="flex items-center justify-center gap-2 w-32 my-4">
                <div className="h-[0.8px] bg-[#A8586E]/25 flex-1" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#A8586E]/50 bg-[#A8586E]/20" />
                <div className="h-[0.8px] bg-[#A8586E]/25 flex-1" />
              </div>

              {/* Date in Soft Dusty Rose */}
              <p className="font-serif text-sm sm:text-base text-[#A8586E] font-normal tracking-wide">
                {eventDate.display || 'November 1, 2026'}
              </p>

              {/* Subtitle: Cordially Invites */}
              <p className="font-serif text-xs sm:text-sm text-[#A8586E]/75 tracking-wide mt-2 mb-6">
                Cordially Invites
              </p>

              {/* Rosy Mauve Pill "Open" Button */}
              <div className="relative w-full flex items-center justify-center">
                {/* 360-degree Flying Petals & Flowers Explosion */}
                {isOpening && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
                    {floralBurstParticles.map((p) => {
                      const rad = (p.angle * Math.PI) / 180;
                      const targetX = Math.cos(rad) * p.distance;
                      const targetY = Math.sin(rad) * p.distance;

                      return (
                        <motion.div
                          key={p.id}
                          initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
                          animate={{
                            x: [0, targetX * 0.35, targetX],
                            y: [0, targetY * 0.35 - 30, targetY],
                            scale: [0, p.scale * 1.35, p.scale],
                            opacity: [0, 1, 1, 0],
                            rotate: [0, p.rot * 0.5, p.rot],
                          }}
                          transition={{
                            duration: 1.1,
                            ease: [0.12, 0.95, 0.22, 1],
                          }}
                          className="absolute pointer-events-none select-none drop-shadow-lg"
                        >
                          {p.type === 'lotus' ? (
                            <img
                              src={f1Img}
                              alt="Lotus"
                              className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                            />
                          ) : p.type === 'petal' ? (
                            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9">
                              <path
                                d="M12 2 C7 2 3 7 3 13 C3 18.5 7.5 22 12 22 C16.5 22 21 18.5 21 13 C21 7 17 2 12 2 Z"
                                fill="url(#pinkPetalGrad)"
                              />
                            </svg>
                          ) : (
                            <div className="w-3 h-3 rounded-full bg-[#D8B26E] shadow-sm" />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {/* The "Open" Button */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleOpenClick}
                  disabled={isOpening}
                  className="w-full max-w-[170px] py-2.5 sm:py-3 rounded-full bg-[#B86278] hover:bg-[#A35268] text-white font-serif tracking-wider font-semibold text-sm sm:text-base shadow-[0_6px_18px_rgba(184,98,120,0.38)] transition-all duration-300 cursor-pointer relative z-10"
                >
                  {isOpening ? 'Opening...' : 'Open'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
