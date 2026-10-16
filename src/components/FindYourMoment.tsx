import React from 'react';
import { Compass, Coffee, MapPin, Clock, Mail } from 'lucide-react';

interface FindYourMomentProps {
  onFindMoodClick: () => void;
  onExploreCollectionClick: () => void;
}

export const FindYourMoment: React.FC<FindYourMomentProps> = ({
  onFindMoodClick,
  onExploreCollectionClick
}) => {
  return (
    <section className="py-24 md:py-36 bg-[#2D201C] text-[#FFF9F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-[#382823] rounded-3xl border border-white/10 p-10 sm:p-14 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle Warm Amber Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B97849]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-4">
              Section 09 · Invitation
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-tight mb-6 text-balance">
              YOUR NEXT LITTLE COFFEE MOMENT STARTS HERE.
            </h2>

            <p className="text-base sm:text-lg text-[#FFF9F1]/80 font-normal leading-relaxed mb-10 text-pretty">
              Whether you need to slow down, shake off the day, find quiet focus, or take a bold leap into the unexpected—there’s a handcrafted cup waiting for your mood.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
              <button
                onClick={onFindMoodClick}
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FFF9F1] text-[#2D201C] rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#B97849] hover:text-white transition-all shadow-md active:scale-95"
              >
                <Compass className="w-4 h-4" />
                <span>Find Your Mood</span>
              </button>

              <button
                onClick={onExploreCollectionClick}
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-white/30 text-[#FFF9F1] rounded-full text-xs font-semibold tracking-wider uppercase hover:border-white hover:bg-white/10 transition-all active:scale-95"
              >
                <Coffee className="w-4 h-4" />
                <span>Explore the 18 Coffees</span>
              </button>
            </div>

            {/* Concept Tasting Atelier Information (Clearly labeled concept placeholder per PRD) */}
            <div className="pt-10 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs text-[#FFF9F1]/75">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B97849] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block mb-0.5">Concept Atelier Location</span>
                  <span>42 Timber Lane (Concept Flagship)</span>
                  <span className="block text-[#FFF9F1]/50 text-[11px] mt-0.5">Atmospheric Tasting Room</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B97849] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block mb-0.5">Atelier Hours</span>
                  <span>Mornings: 7:00 AM – 1:00 PM</span>
                  <span className="block">Evenings: 4:00 PM – 9:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B97849] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block mb-0.5">Mood Club Dispatch</span>
                  <span>hello@moodbrew.cafe</span>
                  <span className="block text-[#FFF9F1]/50 text-[11px] mt-0.5">Weekly personal reflections</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
