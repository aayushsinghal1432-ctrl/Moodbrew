import React, { useState } from 'react';
import { JOURNAL_ENTRIES, JournalEntry } from '../data/journal';
import { BookOpen, Sparkles, Feather } from 'lucide-react';

export const MoodJournal: React.FC = () => {
  const [activeEntry, setActiveEntry] = useState<JournalEntry>(JOURNAL_ENTRIES[0]);

  return (
    <section id="journal" className="py-24 md:py-36 bg-[#FAF7F2] border-t border-[#2D201C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Section 08 · The Mood Journal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D201C] tracking-tight">
              LITTLE THOUGHTS FOR THE IN-BETWEEN.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#2D201C]/75 max-w-md font-normal leading-relaxed">
            Short reflections written between sips, pauses, and everyday coffee moments.
          </p>
        </div>

        {/* Magazine / Journal Layout: Split Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Index of Entries (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#2D201C]/50 font-semibold mb-4 px-2">
              Select an Essay Reflection
            </div>

            {JOURNAL_ENTRIES.map((entry) => {
              const isSelected = activeEntry.id === entry.id;
              return (
                <div
                  key={entry.id}
                  onClick={() => setActiveEntry(entry)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#FFF9F1] border-[#B97849] shadow-md -translate-x-1'
                      : 'bg-white/60 hover:bg-[#FFF9F1] border-[#2D201C]/5 hover:border-[#2D201C]/20'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#2D201C]/60 mb-2">
                    <span className="font-semibold text-[#B97849]">{entry.volume}</span>
                    <span className="tabular-nums">{entry.timestamp} · {entry.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-[#2D201C] font-normal mb-1.5">
                    {entry.topic}
                  </h3>

                  <p className="text-xs text-[#2D201C]/75 line-clamp-1 italic font-serif">
                    “{entry.quote}”
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Featured Journal Page (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF9] rounded-3xl border border-[#2D201C]/15 p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-[#B97849]/15">
                <Feather className="w-24 h-24 stroke-[1]" />
              </div>

              {/* Volume & Timestamp */}
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-6">
                <span>{activeEntry.volume}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#2D201C]/60 tabular-nums">{activeEntry.timestamp}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#2D201C]/60">{activeEntry.readTime}</span>
              </div>

              {/* Topic */}
              <h3 className="text-3xl sm:text-4xl font-serif text-[#2D201C] font-normal mb-6">
                {activeEntry.topic}
              </h3>

              {/* Large Pull Quote */}
              <blockquote className="border-l-2 border-[#B97849] pl-6 my-8">
                <p className="font-serif italic text-2xl sm:text-3xl text-[#2D201C] font-normal leading-snug">
                  “{activeEntry.quote}”
                </p>
              </blockquote>

              {/* Extended reflection text */}
              <div className="text-base sm:text-lg text-[#2D201C]/80 font-normal leading-relaxed mb-10">
                <p>{activeEntry.reflection}</p>
              </div>

              {/* Author & Atelier Credit */}
              <div className="pt-6 border-t border-[#2D201C]/10 flex items-center justify-between text-xs text-[#2D201C]/65">
                <span className="font-medium">{activeEntry.author}</span>
                <div className="flex items-center gap-1.5 text-[#B97849]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The In-Between Essays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
