import React from 'react';

export const CoffeeMoment: React.FC = () => {
  return (
    <section className="py-28 md:py-40 bg-[#2D201C] text-[#FFF9F1] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Generous Whitespace & Quiet Editorial Layout */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-4">
            Interlude · Section 05
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight leading-tight">
            TAKE A MOMENT. MAKE IT YOURS.
          </h2>
        </div>

        {/* Cinematic Atmospheric Still */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/9] max-w-5xl mx-auto group">
          <img
            src="/src/assets/images/coffee_moment_sunlight_1792183597236.jpg"
            alt="Warm afternoon sunlight filtering through a café window onto a wooden table with iced coffee and an open book"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Measured Scrim for Editorial Typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D201C]/85 via-black/20 to-transparent flex items-end justify-center p-8 sm:p-14 text-center">
            <blockquote className="max-w-xl text-center">
              <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#FFF9F1] font-normal leading-snug mb-3">
                “Not every moment needs a plan. Sometimes, a good cup is enough.”
              </p>
              <cite className="not-italic text-xs uppercase tracking-widest text-[#FFF9F1]/60 font-semibold block">
                MOODBREW Philosophy
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
