import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import s1Audio from '../assets/s1.mp3';

export default function AudioPlayer({
  audioRef: externalAudioRef,
  isPlaying: controlledIsPlaying,
  onTogglePlay,
}) {
  const internalAudioRef = useRef(null);
  const audioRef = externalAudioRef || internalAudioRef;

  const [internalIsPlaying, setInternalIsPlaying] = useState(false);
  const isPlaying = controlledIsPlaying !== undefined ? controlledIsPlaying : internalIsPlaying;

  const handleToggle = () => {
    if (onTogglePlay) {
      onTogglePlay();
    } else {
      const nextState = !isPlaying;
      setInternalIsPlaying(nextState);
      if (audioRef.current) {
        if (nextState) {
          audioRef.current.play().catch((err) => console.warn('Audio play error:', err));
        } else {
          audioRef.current.pause();
        }
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Audio playback error:', err);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="fixed bottom-6 right-5 z-40">
      <audio
        ref={audioRef}
        src={s1Audio}
        loop
        preload="auto"
      />
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleToggle}
        title={isPlaying ? 'Pause Music' : 'Play Background Music'}
        aria-label={isPlaying ? 'Pause Music' : 'Play Background Music'}
        className="w-12 h-12 rounded-full bg-[#B86278] hover:bg-[#A35268] text-white shadow-[0_4px_18px_rgba(184,98,120,0.45)] flex items-center justify-center cursor-pointer transition-colors border border-white/40"
      >
        {/* Exact 3 vertical white equalizer bars matching screenshots */}
        <div className="flex items-end gap-1 h-4">
          <span
            className={`w-0.5 rounded-full bg-white transition-all ${
              isPlaying ? 'animate-bounce h-3 [animation-delay:-0.3s]' : 'h-3'
            }`}
          />
          <span
            className={`w-0.5 rounded-full bg-white transition-all ${
              isPlaying ? 'animate-bounce h-4.5 [animation-delay:-0.15s]' : 'h-4.5'
            }`}
          />
          <span
            className={`w-0.5 rounded-full bg-white transition-all ${
              isPlaying ? 'animate-bounce h-3.5' : 'h-3.5'
            }`}
          />
        </div>
      </motion.button>
    </div>
  );
}
