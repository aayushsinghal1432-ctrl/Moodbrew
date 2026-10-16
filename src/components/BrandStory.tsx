import React from 'react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-24 md:py-36 bg-[#F5EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Handcrafted Roastery Photography (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#2D201C]/10 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-[#2D201C]/5">
                <img
                  src="/src/assets/images/cafe_story_interior_1792183626778.jpg"
                  alt="Barista mindfully preparing pour-over coffee in the warm timber roastery atelier"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Editorial Caption Box */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#2D201C]/65 px-2">
                <span>The Roastery Atelier & Tasting Room</span>
                <span className="font-serif italic">Every roast calibrated to emotion</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-4">
              Section 06 · Our Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D201C] tracking-tight leading-tight mb-8">
              COFFEE IS THE CUP. <br />
              <span className="italic font-light">THE MOMENT IS YOURS.</span>
            </h2>

            {/* Narrative Paragraphs from PRD */}
            <div className="space-y-6 text-base sm:text-lg text-[#2D201C]/85 font-normal leading-relaxed">
              <p>
                MOODBREW began with a little thought: what if choosing coffee felt more personal?
              </p>
              <p>
                Some days need a gentle beginning. Some need a fresh start. Others call for a little comfort or something unexpected.
              </p>
              <p>
                We believe coffee can become part of those everyday moments. Not just another order, but a small ritual that makes the day feel a little more like yours.
              </p>
              <p className="font-serif italic text-xl text-[#2D201C] font-medium pt-2">
                “Whatever the mood, there’s a cup for the feeling.”
              </p>
            </div>

            {/* Brand Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#2D201C]/15">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#B97849] font-semibold block mb-1">
                  Ritual Over Rush
                </span>
                <p className="text-xs text-[#2D201C]/70">
                  Breathing space carved into fast-paced days.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#B97849] font-semibold block mb-1">
                  Sensory Balance
                </span>
                <p className="text-xs text-[#2D201C]/70">
                  Single-origin roasts calibrated with botanical infusions.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#B97849] font-semibold block mb-1">
                  Human Connection
                </span>
                <p className="text-xs text-[#2D201C]/70">
                  Because how you feel matters more than how fast you order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
