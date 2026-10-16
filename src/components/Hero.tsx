import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface HeroProps {
  onFindMoodClick: () => void;
  onExploreCollectionClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onFindMoodClick,
  onExploreCollectionClick
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Asymmetric 2-column editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Expressive Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial kicker */}
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-6">
              <span>Atelier & Roastery</span>
              <span aria-hidden="true">·</span>
              <span>Est. 2024</span>
              <span aria-hidden="true">·</span>
              <span>Emotional Brewing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-normal tracking-tight text-[#2D201C] leading-[1.08] mb-6 text-balance">
              THERE’S A CUP <br className="hidden sm:inline" />
              <span className="italic font-light">FOR THE FEELING.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg md:text-xl text-[#2D201C]/80 font-normal leading-relaxed max-w-xl mb-10 text-pretty">
              Slow mornings, long days, little celebrations. Whatever today feels like,
              there’s a coffee for your kind of moment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onFindMoodClick}
                className="group flex items-center justify-center gap-3 px-7 py-3.5 bg-[#2D201C] text-[#FFF9F1] rounded-full text-sm font-medium tracking-wide shadow-md hover:bg-[#B97849] hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span>Find Your Mood</span>
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>

              <button
                onClick={onExploreCollectionClick}
                className="group flex items-center justify-center gap-3 px-7 py-3.5 bg-[#FFF9F1] text-[#2D201C] border border-[#2D201C]/20 rounded-full text-sm font-medium tracking-wide hover:border-[#2D201C] hover:bg-[#F5EFE6] transition-all duration-200 active:scale-95"
              >
                <span>Explore the Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Editorial citation */}
            <div className="mt-12 pt-8 border-t border-[#2D201C]/10 flex items-center gap-6 text-xs text-[#2D201C]/65">
              <div>
                <span className="block font-serif text-base text-[#2D201C] font-semibold">18 Cups</span>
                <span>Crafted signatures</span>
              </div>
              <div className="w-[1px] h-7 bg-[#2D201C]/15" />
              <div>
                <span className="block font-serif text-base text-[#2D201C] font-semibold">6 Moods</span>
                <span>Emotional profiles</span>
              </div>
              <div className="w-[1px] h-7 bg-[#2D201C]/15" />
              <div>
                <span className="block font-serif text-base text-[#2D201C] font-semibold">The Mood Letter</span>
                <span>Personalized notes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Editorial Photography (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative offset frame */}
              <div className="absolute -inset-3 bg-[#EFE6D8] rounded-3xl -rotate-2 transform transition-transform group-hover:rotate-0 duration-500" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#2D201C]/10 bg-[#2D201C]/5 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="/src/assets/images/hero_coffee_editorial_1792183582497.jpg"
                  alt="Artisanal speckled ceramic cup of Honey Oat Latte with delicate latte art on an oak table in morning light"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle bottom gradient scrim for caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#2D201C]/80 via-[#2D201C]/30 to-transparent text-[#FFF9F1]">
                  <span className="text-[11px] uppercase tracking-wider text-[#F5EFE6]/80 font-medium block mb-1">
                    Morning Feature · Batch No. 01
                  </span>
                  <p className="font-serif text-xl italic font-normal">
                    “Warm honey, creamy oat milk, and a moment entirely yours.”
                  </p>
                </div>
              </div>

              {/* Floating stamp badge */}
              <div className="absolute -bottom-5 -right-4 md:-right-6 bg-[#FFF9F1] border border-[#2D201C]/15 text-[#2D201C] p-4 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-xs">
                <div className="w-10 h-10 rounded-full bg-[#B97849]/15 text-[#B97849] flex items-center justify-center font-serif text-lg font-bold">
                  MB
                </div>
                <div className="text-left">
                  <span className="block text-[11px] uppercase tracking-wider text-[#2D201C]/60 font-semibold">
                    Core Thought
                  </span>
                  <span className="font-serif text-xs font-medium text-[#2D201C]">
                    Your mood. Your moment.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
