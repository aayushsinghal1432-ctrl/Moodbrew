import React from 'react';
import { MoodDefinition } from '../data/moods';
import { COFFEES, CoffeeItem } from '../data/coffees';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

interface YourMoodYourCoffeeProps {
  activeMood: MoodDefinition;
  onExploreCoffee: (coffee: CoffeeItem) => void;
  onAddToBag: (coffee: CoffeeItem) => void;
}

export const YourMoodYourCoffee: React.FC<YourMoodYourCoffeeProps> = ({
  activeMood,
  onExploreCoffee,
  onAddToBag
}) => {
  // Always find the coffee matching the active mood!
  const matchedCoffee = COFFEES.find((c) => c.id === activeMood.coffeeId) || COFFEES[0];

  return (
    <section id="your-mood-coffee" className="py-24 md:py-32 bg-[#F5EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 03 · Dynamic Pairing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D201C] tracking-tight mb-4">
            MADE FOR THE WAY YOU FEEL.
          </h2>
          <p className="text-base text-[#2D201C]/75 font-normal">
            Every mood has its counterweight. Here is the handcrafted cup curated for your moment right now.
          </p>
        </div>

        {/* Synchronized Recommendation Stage */}
        <div className="bg-[#FFF9F1] rounded-3xl border border-[#2D201C]/10 shadow-xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Authentic Photography (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px] bg-[#2D201C]/5 overflow-hidden group">
              <img
                key={matchedCoffee.id}
                src={matchedCoffee.image}
                alt={`${matchedCoffee.name} - ${matchedCoffee.mood}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Mood Badge Tag */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-[#2D201C]/85 backdrop-blur-md text-[#FFF9F1] px-4 py-2 rounded-full text-xs font-medium tracking-wide shadow-md">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeMood.hexColor }} />
                <span>Selected Mood: {activeMood.name}</span>
              </div>

              {/* Price & Category Tag */}
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3">
                <span className="bg-[#FFF9F1]/95 text-[#2D201C] px-3.5 py-1.5 rounded-full text-xs font-semibold tabular-nums shadow-sm">
                  {matchedCoffee.price}
                </span>
                <span className="bg-[#FFF9F1]/95 text-[#2D201C]/80 px-3.5 py-1.5 rounded-full text-xs font-medium shadow-sm">
                  {matchedCoffee.category} Category
                </span>
              </div>
            </div>

            {/* Right Column: Emotional Narrative & Flavour Blueprint (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#FFF9F1]">
              <div>
                {/* Meta kicker */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2D201C]/60 font-semibold mb-4">
                  <span>Batch {matchedCoffee.number}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#B97849] font-medium">{activeMood.name}</span>
                </div>

                {/* Coffee Name */}
                <h3 className="text-3xl sm:text-4xl font-serif font-normal text-[#2D201C] tracking-tight mb-4">
                  {matchedCoffee.name}
                </h3>

                {/* Emotional Description from PRD */}
                <p className="font-serif italic text-lg sm:text-xl text-[#2D201C]/90 leading-relaxed mb-6 border-l-2 border-[#B97849] pl-4">
                  “{matchedCoffee.description}”
                </p>

                {/* Flavour Notes Breakdown */}
                <div className="mb-8 pt-6 border-t border-[#2D201C]/10">
                  <div className="text-xs uppercase tracking-wider text-[#2D201C]/60 font-semibold mb-3">
                    Flavour Profile
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {matchedCoffee.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="text-xs font-medium text-[#2D201C] bg-[#F5EFE6] px-3 py-1.5 rounded-lg border border-[#2D201C]/5"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Suggested Moment and Sensory notes */}
                <div className="space-y-3 text-xs text-[#2D201C]/75 mb-8 bg-[#FAF7F2] p-4 rounded-xl border border-[#2D201C]/5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-[#2D201C]">Ideal Ritual:</span>
                    <span className="italic">{matchedCoffee.ritual}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-[#2D201C]">Aroma Notes:</span>
                    <span>{matchedCoffee.aromaNotes}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-6 border-t border-[#2D201C]/10">
                <button
                  onClick={() => onExploreCoffee(matchedCoffee)}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2D201C] text-[#FFF9F1] rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#B97849] transition-colors active:scale-95 shadow-xs"
                >
                  <span>Meet Your Coffee</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onAddToBag(matchedCoffee)}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FFF9F1] border border-[#2D201C]/20 text-[#2D201C] rounded-full text-xs font-semibold tracking-wider uppercase hover:border-[#2D201C] hover:bg-[#F5EFE6] transition-colors active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 text-[#B97849]" />
                  <span>Order Cup</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
