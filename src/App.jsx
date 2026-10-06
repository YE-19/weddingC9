import React, { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import { invitationConfig } from './data/invitationData';

import EnvelopeCover from './components/EnvelopeCover';
import Announcement from './components/Announcement';
import PhotoGallery from './components/PhotoGallery';
import CountdownCalendar from './components/CountdownCalendar';
import VenueLocation from './components/VenueLocation';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

export default function App() {
  // Envelope open state
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentCouple = invitationConfig.couple;
  const currentDate = invitationConfig.eventDate;
  const currentVenue = invitationConfig.venue;

  const handleStartAudio = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    handleStartAudio();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleReopenEnvelope = () => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF4F5] text-[#7A263D] relative selection:bg-[#B86278] selection:text-white font-serif antialiased overflow-x-hidden">
      {/* 1. Global Soft Floral Ambient Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.18] z-0 bg-repeat bg-[length:360px_auto]"
        style={{ backgroundImage: 'url(/images/floral-bg.jpg)' }}
      />
      {/* 2. Soft Blush Warm Gradient Ambient Tone */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#B86278]/[0.03] via-transparent to-[#B86278]/[0.04] z-0" />

      {/* Floating Audio Player (Bottom-right matching reference) */}
      <AudioPlayer
        audioRef={audioRef}
        isPlaying={isPlaying}
        onTogglePlay={handleToggleMusic}
      />

      {/* Floating Top Control Toolbar */}
      <div className="fixed top-3.5 left-0 right-0 z-40 px-3.5 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <span className="w-8 h-8 rounded-full bg-[#B86278] text-white text-xs font-serif font-bold flex items-center justify-center shadow-md border border-white/50">
            {currentCouple.monogram || 'YM'}
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Reopen Cover button */}
          <button
            onClick={handleReopenEnvelope}
            title="View Cover Screen"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[#B86278]/25 text-[11px] text-[#A8586E] font-serif shadow-xs hover:bg-[#B86278] hover:text-white transition-all cursor-pointer"
          >
            <Mail className="w-3 h-3 text-[#B86278]" />
            <span>Cover</span>
          </button>
        </div>
      </div>

      {/* Section 1: Cover Screen with Romantic Blush Envelope Reveal */}
      <EnvelopeCover
        couple={currentCouple}
        eventDate={currentDate}
        isOpened={isOpened}
        onOpen={handleOpenEnvelope}
        onStartAudio={handleStartAudio}
      />

      {/* Main Page Content (Centered Mobile-First Frame) */}
      <div className="w-full max-w-md mx-auto shadow-sm min-h-screen bg-[#FAF4F5]/95 relative overflow-hidden">
        {/* Subtle Inner Floral Background Accent */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10] z-0 bg-repeat bg-[length:300px_auto]"
          style={{ backgroundImage: 'url(/images/floral-bg.jpg)' }}
        />

        {/* Section 2: Announcement (Hero Golden Frame & Ceremony Info) */}
        <Announcement couple={currentCouple} eventDate={currentDate} />

        {/* Section 3: Photo Gallery (2 side-by-side photos) */}
        <PhotoGallery gallery={invitationConfig.gallery} />

        {/* Section 4: Reception Info, Countdown & Vintage Arched Calendar */}
        <CountdownCalendar
          eventDate={currentDate}
          venue={currentVenue}
          couple={currentCouple}
        />

        {/* Section 5: Venue Location Map with Open in Maps button */}
        <VenueLocation venue={currentVenue} />

        {/* Footer */}
        <Footer couple={currentCouple} eventDate={currentDate} />
      </div>
    </div>
  );
}
