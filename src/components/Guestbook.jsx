import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GoldDivider } from './FloralElements';

export default function Guestbook({ couple }) {
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !wishes.trim() || isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Save wish in localStorage quietly
      try {
        const saved = JSON.parse(localStorage.getItem('wedding_guestbook_wishes') || '[]');
        saved.unshift({
          id: 'w-' + Date.now(),
          name: name.trim(),
          wishes: wishes.trim(),
          timestamp: 'Just now',
        });
        localStorage.setItem('wedding_guestbook_wishes', JSON.stringify(saved));
      } catch (err) {
        console.error(err);
      }

      setIsSubmitted(true);
      setIsSubmitting(false);
      setName('');
      setWishes('');

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#B86278', '#D8B26E', '#F3C5D0'],
        });
      } catch (err) {
        console.error(err);
      }

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 450);
  };

  return (
    <section id="guestbook" className="py-8 sm:py-12 px-4 max-w-md mx-auto text-center">
      <h2 className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-[#A8586E] uppercase mb-1">
        GUESTBOOK
      </h2>
      <p className="font-serif text-xs text-[#A8586E]/75 tracking-wide mb-6">
        Leave your prayers and blessings for {couple?.primary || 'Youssef & Menna'}
      </p>

      {/* Success Alert */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-3.5 rounded-2xl bg-[#B86278] text-white flex items-center justify-center gap-2 text-xs font-serif shadow-md overflow-hidden"
          >
            <CheckCircle2 className="w-4 h-4 text-[#D8B26E]" />
            <span>Thank you! Your wish has been sent</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Form Box Area */}
      <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
        <div>
          <input
            type="text"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A8586E]/20 focus:border-[#B86278] focus:outline-none text-xs text-[#A8586E] shadow-xs"
          />
        </div>

        <div>
          <textarea
            required
            rows={3}
            placeholder="Write your wishes..."
            value={wishes}
            onChange={(e) => setWishes(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A8586E]/20 focus:border-[#B86278] focus:outline-none text-xs text-[#A8586E] shadow-xs resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-full bg-[#B86278] hover:bg-[#A35268] text-white font-serif text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{isSubmitting ? 'Sending...' : 'Send Wishes'}</span>
        </motion.button>
      </form>

      <div className="w-full flex justify-center mt-7">
        <GoldDivider className="w-40" />
      </div>
    </section>
  );
}
