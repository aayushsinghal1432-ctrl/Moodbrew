import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#231815] text-[#FFF9F1] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 border-b border-white/10">
          <div>
            <span className="font-serif text-3xl font-bold tracking-tight text-[#FFF9F1] block mb-3">
              MOODBREW
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#FFF9F1]/90 mb-2">
              GOOD MOOD. GOOD COFFEE. SEE YOU SOON.
            </h3>
            <p className="text-sm text-[#FFF9F1]/65 max-w-sm">
              Whatever today feels like, there’s a cup for it.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold uppercase tracking-wider text-[#FFF9F1]/75">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#discover-mood" className="hover:text-white transition-colors">
              Discover Your Mood
            </a>
            <a href="#collection" className="hover:text-white transition-colors">
              Coffee Collection
            </a>
            <a href="#mood-letter" className="hover:text-white transition-colors">
              The MOOD LETTER
            </a>
            <a href="#story" className="hover:text-white transition-colors">
              Our Story
            </a>
          </nav>
        </div>

        {/* Copyright & Subtext */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F1]/50">
          <div>
            © {new Date().getFullYear()} MOODBREW Café & Roastery. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Your mood. Your moment. Your coffee.</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#B97849]">Est. 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
