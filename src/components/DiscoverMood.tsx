import React from 'react';
import { MOODS, MoodDefinition } from '../data/moods';
import { ArrowUpRight, Check } from 'lucide-react';

interface DiscoverMoodProps {
  activeMood: MoodDefinition;
  onSelectMood: (mood: MoodDefinition) => void;
}

export const DiscoverMood: React.FC<DiscoverMoodProps> = ({
  activeMood,
  onSelectMood
}) => {
  return (
    <section id="discover-mood" className="py-24 md:py-32 bg-[#FAF7F2] relative border-t border-[#2D201C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-3">
              Section 02 · Emotional Compass
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D201C] tracking-tight">
              SO, HOW ARE WE FEELING?
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#2D201C]/75 max-w-md font-normal leading-relaxed">
            Pick the feeling that finds you today. We’ll find the cup that belongs with it.
          </p>
        </div>

        {/* Asymmetrical, Bespoke Mood Palette & Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {/* Mood 01: Slow Morning - Wide Top Feature (Span 7) */}
          {(() => {
            const m = MOODS[0];
            const isSelected = activeMood.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => onSelectMood(m)}
                className={`md:col-span-7 group cursor-pointer rounded-3xl p-8 sm:p-10 transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-lg scale-[1.01]'
                    : 'hover:shadow-md hover:-translate-y-0.5'
                }`}
                style={{ backgroundColor: `${m.hexColor}25`, borderColor: `${m.hexColor}80` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-light text-[#2D201C]/50">{m.number}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#BFCAB8]/50 text-[#2D201C]">
                      {m.colorName}
                    </span>
                  </div>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? 'bg-[#2D201C] text-white' : 'bg-white/80 text-[#2D201C] group-hover:bg-[#2D201C] group-hover:text-white'
                  }`}>
                    {isSelected ? <Check className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#2D201C] mb-3">
                  {m.name}
                </h3>
                <p className="text-sm sm:text-base text-[#2D201C]/80 max-w-lg mb-6 leading-relaxed">
                  {m.feeling}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[#2D201C]/15 text-xs text-[#2D201C]/70">
                  <span className="font-serif italic text-sm text-[#2D201C]">Matched: Honey Oat Latte</span>
                  <span className="underline group-hover:text-[#2D201C] font-medium">Select this feeling &rarr;</span>
                </div>
              </div>
            );
          })()}

          {/* Mood 02: Need a Reset - Vertical Complement (Span 5) */}
          {(() => {
            const m = MOODS[1];
            const isSelected = activeMood.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => onSelectMood(m)}
                className={`md:col-span-5 group cursor-pointer rounded-3xl p-8 sm:p-10 transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-lg scale-[1.01]'
                    : 'hover:shadow-md hover:-translate-y-0.5'
                }`}
                style={{ backgroundColor: `${m.hexColor}30`, borderColor: `${m.hexColor}90` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-light text-[#2D201C]/50">{m.number}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#B9CFD8]/50 text-[#1D2B32]">
                      {m.colorName}
                    </span>
                  </div>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? 'bg-[#2D201C] text-white' : 'bg-white/80 text-[#2D201C] group-hover:bg-[#2D201C] group-hover:text-white'
                  }`}>
                    {isSelected ? <Check className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#2D201C] mb-3">
                  {m.name}
                </h3>
                <p className="text-sm sm:text-base text-[#2D201C]/80 mb-6 leading-relaxed">
                  {m.feeling}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[#2D201C]/15 text-xs text-[#2D201C]/70">
                  <span className="font-serif italic text-sm text-[#2D201C]">Matched: Iced Vanilla Latte</span>
                  <span className="underline group-hover:text-[#2D201C] font-medium">Select &rarr;</span>
                </div>
              </div>
            );
          })()}

          {/* Mood 03: Main Character (Span 4) */}
          {(() => {
            const m = MOODS[2];
            const isSelected = activeMood.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => onSelectMood(m)}
                className={`md:col-span-4 group cursor-pointer rounded-3xl p-8 transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-lg scale-[1.01]'
                    : 'hover:shadow-md hover:-translate-y-0.5'
                }`}
                style={{ backgroundColor: `${m.hexColor}25`, borderColor: `${m.hexColor}90` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-2xl font-light text-[#2D201C]/50">{m.number}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D5A7A1]/50 text-[#3E2421]">
                      {m.colorName}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? 'bg-[#2D201C] text-white' : 'bg-white/80 text-[#2D201C] group-hover:bg-[#2D201C] group-hover:text-white'
                  }`}>
                    {isSelected ? <Check className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#2D201C] mb-2">
                  {m.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#2D201C]/80 mb-6 leading-relaxed">
                  {m.feeling}
                </p>

                <div className="pt-4 border-t border-[#2D201C]/15 text-xs text-[#2D201C]/70">
                  <span className="font-serif italic text-sm text-[#2D201C] block">Rose Mocha</span>
                </div>
              </div>
            );
          })()}

          {/* Mood 04: Deep Focus (Span 4) */}
          {(() => {
            const m = MOODS[3];
            const isSelected = activeMood.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => onSelectMood(m)}
                className={`md:col-span-4 group cursor-pointer rounded-3xl p-8 transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? 'ring-2 ring-white shadow-lg scale-[1.01]'
                    : 'hover:shadow-md hover:-translate-y-0.5'
                } bg-[#2D201C] text-[#FFF9F1] border-[#2D201C]`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-2xl font-light text-[#F5EFE6]/50">{m.number}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/15 text-[#FFF9F1]">
                      {m.colorName}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? 'bg-[#B97849] text-white' : 'bg-white/20 text-[#FFF9F1] group-hover:bg-[#B97849]'
                  }`}>
                    {isSelected ? <Check className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#FFF9F1] mb-2">
                  {m.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFF9F1]/80 mb-6 leading-relaxed">
                  {m.feeling}
                </p>

                <div className="pt-4 border-t border-white/20 text-xs text-[#FFF9F1]/70">
                  <span className="font-serif italic text-sm text-[#FFF9F1] block">Flat White</span>
                </div>
              </div>
            );
          })()}

          {/* Mood 05: Soft Comfort (Span 4) */}
          {(() => {
            const m = MOODS[4];
            const isSelected = activeMood.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => onSelectMood(m)}
                className={`md:col-span-4 group cursor-pointer rounded-3xl p-8 transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-lg scale-[1.01]'
                    : 'hover:shadow-md hover:-translate-y-0.5'
                }`}
                style={{ backgroundColor: '#EFE6D8', borderColor: '#D9CDC1' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-2xl font-light text-[#2D201C]/50">{m.number}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D9CDC1] text-[#2D201C]">
                      {m.colorName}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? 'bg-[#2D201C] text-white' : 'bg-white/80 text-[#2D201C] group-hover:bg-[#2D201C] group-hover:text-white'
                  }`}>
                    {isSelected ? <Check className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#2D201C] mb-2">
                  {m.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#2D201C]/80 mb-6 leading-relaxed">
                  {m.feeling}
                </p>

                <div className="pt-4 border-t border-[#2D201C]/15 text-xs text-[#2D201C]/70">
                  <span className="font-serif italic text-sm text-[#2D201C] block">Cinnamon Cappuccino</span>
                </div>
              </div>
            );
          })()}

          {/* Mood 06: Feeling Bold - Full Bottom Banner Feature (Span 12) */}
          {(() => {
            const m = MOODS[5];
            const isSelected = activeMood.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => onSelectMood(m)}
                className={`md:col-span-12 group cursor-pointer rounded-3xl p-8 sm:p-10 transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-lg scale-[1.005]'
                    : 'hover:shadow-md hover:-translate-y-0.5'
                } bg-[#C66C42]/20 border-[#C66C42]/60`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-serif text-3xl font-light text-[#2D201C]/50">{m.number}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C66C42]/30 text-[#2D201C]">
                        {m.colorName}
                      </span>
                      <span className="text-xs text-[#2D201C]/60 italic font-serif">Signature Seasonal Pairing</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#2D201C] mb-2">
                      {m.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#2D201C]/80 max-w-xl leading-relaxed">
                      {m.feeling} {m.atmosphere}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 sm:self-center">
                    <div className="text-right hidden sm:block">
                      <span className="text-xs uppercase tracking-wider text-[#2D201C]/60 font-semibold block">Crafted Drink</span>
                      <span className="font-serif text-lg font-medium text-[#2D201C]">Orange Cinnamon Cold Brew</span>
                    </div>
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                      isSelected ? 'bg-[#2D201C] text-white' : 'bg-white/80 text-[#2D201C] group-hover:bg-[#2D201C] group-hover:text-white'
                    }`}>
                      {isSelected ? <Check className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
