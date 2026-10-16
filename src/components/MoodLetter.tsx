import React, { useState } from 'react';
import { MOOD_LETTERS, MoodLetterCategory } from '../data/moodLetters';
import { COFFEES, CoffeeItem } from '../data/coffees';
import {
  RotateCcw,
  Copy,
  Download,
  Check,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface MoodLetterProps {
  onExploreCoffee: (coffee: CoffeeItem) => void;
}

export const MoodLetter: React.FC<MoodLetterProps> = ({ onExploreCoffee }) => {
  const [selectedMoodKey, setSelectedMoodKey] = useState<string>('slow');
  const [variationIndices, setVariationIndices] = useState<Record<string, number>>({
    slow: 0,
    overwhelmed: 0,
    hopeful: 0,
    confident: 0,
    nostalgic: 0,
    comfort: 0
  });
  const [copied, setCopied] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Active category and current variation
  const activeCategory: MoodLetterCategory =
    MOOD_LETTERS.find((c) => c.moodKey === selectedMoodKey) || MOOD_LETTERS[0];

  const currentIdx = variationIndices[activeCategory.moodKey] ?? 0;
  const currentLetter = activeCategory.variations[currentIdx % activeCategory.variations.length];

  // Matched coffee
  const matchedCoffee =
    COFFEES.find((c) => c.id === activeCategory.pairedCoffeeId) || COFFEES[0];

  // Handle cycle letter
  const handleNextLetter = () => {
    setVariationIndices((prev) => ({
      ...prev,
      [activeCategory.moodKey]: (prev[activeCategory.moodKey] + 1) % activeCategory.variations.length
    }));
  };

  // Handle copy text
  const handleCopyLetter = async () => {
    const textToCopy = `YOUR MOOD LETTER · ${currentLetter.letterNumber}

${currentLetter.salutation}

"${currentLetter.body}"

Your coffee: ${matchedCoffee.name}
A little reminder: "${currentLetter.reminder}"
${currentLetter.postscript ? currentLetter.postscript : ''}

— Handcrafted with care by MOODBREW`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  // Handle Save as Image via HTML5 Canvas
  const handleSaveAsImage = () => {
    setIsExporting(true);
    try {
      const canvas = document.createElement('canvas');
      const width = 1200;
      const height = 800;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 1. Background Paper Fill
      ctx.fillStyle = '#FAF7F2';
      ctx.fillRect(0, 0, width, height);

      // Subtle warm grain vignette
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 200, width / 2, height / 2, 700);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
      gradient.addColorStop(1, 'rgba(217, 205, 193, 0.4)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Double Hairline Frame
      ctx.strokeStyle = '#2D201C';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(40, 40, width - 80, height - 80);

      ctx.strokeStyle = '#B97849';
      ctx.lineWidth = 0.8;
      ctx.strokeRect(48, 48, width - 96, height - 96);

      // 3. Header Stamp
      ctx.fillStyle = '#B97849';
      ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '3px';
      ctx.fillText('MOODBREW · THE MOOD LETTER', width / 2, 95);

      ctx.fillStyle = '#2D201C';
      ctx.font = 'bold 22px "Cormorant Garamond", Georgia, serif';
      ctx.letterSpacing = '1px';
      ctx.fillText(`YOUR MOOD LETTER · ${currentLetter.letterNumber}`, width / 2, 130);

      // Divider line
      ctx.strokeStyle = '#D9CDC1';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width / 2 - 120, 150);
      ctx.lineTo(width / 2 + 120, 150);
      ctx.stroke();

      // 4. Salutation
      ctx.textAlign = 'left';
      ctx.font = 'italic 28px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#2D201C';
      ctx.fillText(currentLetter.salutation, 100, 220);

      // 5. Letter Body (Text wrapping)
      ctx.font = 'normal 21px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#2D201C';
      const words = currentLetter.body.split(' ');
      let line = '';
      let y = 270;
      const maxWidth = 1000;
      const lineHeight = 36;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(`“${line.trim()}”`, 100, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(`“${line.trim()}”`, 100, y);

      // 6. Matched Coffee Block
      y += 65;
      ctx.fillStyle = '#FAF0E4';
      ctx.fillRect(100, y, 1000, 95);
      ctx.strokeStyle = '#D9CDC1';
      ctx.strokeRect(100, y, 1000, 95);

      ctx.fillStyle = '#B97849';
      ctx.font = '600 12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('MATCHED COFFEE COMPANION', 130, y + 32);

      ctx.fillStyle = '#2D201C';
      ctx.font = 'bold 22px "Cormorant Garamond", Georgia, serif';
      ctx.fillText(`${matchedCoffee.name}  ·  ${matchedCoffee.price}`, 130, y + 65);

      ctx.font = 'normal 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#6B5A53';
      ctx.fillText(`Flavor: ${matchedCoffee.flavorNotes.join(' · ')}`, 540, y + 63);

      // 7. Reminder & Footer Note
      y += 140;
      ctx.font = 'italic 18px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#2D201C';
      ctx.fillText(`A little reminder: “${currentLetter.reminder}”`, 100, y);

      if (currentLetter.postscript) {
        y += 32;
        ctx.font = 'normal 14px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#8C776D';
        ctx.fillText(currentLetter.postscript, 100, y);
      }

      // 8. Bottom Seal / Watermark
      ctx.textAlign = 'right';
      ctx.font = '500 12px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#A39288';
      ctx.fillText('moodbrew.cafe · Your mood. Your moment. Your coffee.', width - 100, height - 70);

      // Trigger download
      const imageURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `MOODBREW-Letter-${currentLetter.letterNumber.replace(/\s+/g, '')}.png`;
      link.href = imageURL;
      link.click();
    } catch (err) {
      console.error('Error exporting letter image:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <section id="mood-letter" className="py-24 md:py-36 bg-[#F5EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 07 · Signature Feature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D201C] tracking-tight mb-4">
            A LITTLE LETTER, JUST FOR YOU.
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/80 font-normal leading-relaxed">
            Tell us how today feels. We’ll find a few words and a cup to go with it.
          </p>
        </div>

        {/* Step 1: Mood Selector (6 selectable options with distinct styling) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {MOOD_LETTERS.map((cat) => {
            const isSelected = selectedMoodKey === cat.moodKey;
            return (
              <button
                key={cat.moodKey}
                onClick={() => {
                  setSelectedMoodKey(cat.moodKey);
                  setCopied(false);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 active:scale-95 ${
                  isSelected
                    ? 'bg-[#2D201C] text-[#FFF9F1] shadow-md ring-2 ring-[#B97849]/50 scale-105'
                    : 'bg-[#FFF9F1] text-[#2D201C]/80 hover:text-[#2D201C] hover:bg-[#FAF7F2] border border-[#2D201C]/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* The Letter Showcase & Paired Drink Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Main Letter Card (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative bg-[#FFFDF9] rounded-3xl border border-[#2D201C]/15 shadow-2xl p-8 sm:p-12 md:p-14 overflow-hidden">
              {/* Subtle Paper Grain Effect */}
              <div className="absolute inset-0 bg-paper-grain pointer-events-none opacity-60" />

              {/* Decorative Wax Seal / Crest in Top Right */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[#7D2924]/10 border border-[#7D2924]/20 flex items-center justify-center text-[#7D2924] shadow-xs">
                <span className="font-serif font-bold text-xs">MB</span>
              </div>

              {/* Letter Header */}
              <div className="relative z-10 mb-8 border-b border-[#2D201C]/10 pb-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-2">
                  <span>The Mood Letter</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#2D201C]">{currentLetter.letterNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#2D201C]/60 capitalize">{activeCategory.label}</span>
                </div>
                <h3 className="font-serif italic text-2xl sm:text-3xl text-[#2D201C] font-normal">
                  {currentLetter.salutation}
                </h3>
              </div>

              {/* Letter Body in Elegant Serif */}
              <div className="relative z-10 mb-8">
                <p className="font-serif text-xl sm:text-2xl text-[#2D201C]/90 leading-relaxed sm:leading-loose font-normal">
                  “{currentLetter.body}”
                </p>
              </div>

              {/* A Little Reminder */}
              <div className="relative z-10 p-5 rounded-2xl bg-[#F5EFE6]/70 border border-[#2D201C]/10 mb-8">
                <div className="text-[11px] uppercase tracking-wider text-[#B97849] font-semibold mb-1">
                  A Little Reminder
                </div>
                <p className="font-serif italic text-base sm:text-lg text-[#2D201C] font-medium">
                  “{currentLetter.reminder}”
                </p>
                {currentLetter.postscript && (
                  <p className="text-xs text-[#2D201C]/70 mt-2 font-normal">
                    {currentLetter.postscript}
                  </p>
                )}
              </div>

              {/* Action Buttons for The Letter */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-[#2D201C]/10">
                <button
                  onClick={handleNextLetter}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#2D201C] bg-[#F5EFE6] hover:bg-[#2D201C] hover:text-[#FFF9F1] transition-colors active:scale-95 border border-[#2D201C]/10"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Give Me Another Letter</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLetter}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#2D201C] bg-[#FFF9F1] hover:bg-[#F5EFE6] transition-colors border border-[#2D201C]/15 active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy My Letter</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleSaveAsImage}
                    disabled={isExporting}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#FFF9F1] bg-[#B97849] hover:bg-[#2D201C] transition-colors active:scale-95 shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isExporting ? 'Exporting...' : 'Save as Image'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Matched Coffee Card & Tactile Visual (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Matched Coffee Card */}
            <div className="bg-[#FFF9F1] rounded-3xl border border-[#2D201C]/15 p-6 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between text-xs text-[#2D201C]/60 uppercase tracking-wider font-semibold mb-4">
                <span>Matched Cup</span>
                <span className="text-[#B97849] font-serif italic text-sm font-normal">
                  Batch {matchedCoffee.number}
                </span>
              </div>

              {/* Coffee Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[#2D201C]/5">
                <img
                  src={matchedCoffee.image}
                  alt={matchedCoffee.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-[#FFF9F1]/95 text-[#2D201C] text-xs font-bold px-2.5 py-1 rounded-md tabular-nums shadow-xs">
                  {matchedCoffee.price}
                </div>
              </div>

              <h4 className="text-2xl font-serif text-[#2D201C] mb-2">
                {matchedCoffee.name}
              </h4>

              <p className="text-xs text-[#2D201C]/75 mb-4 line-clamp-2">
                {matchedCoffee.description}
              </p>

              {/* Flavour notes */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {matchedCoffee.flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="text-[11px] bg-[#F5EFE6] text-[#2D201C] px-2.5 py-1 rounded-md"
                  >
                    {note}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onExploreCoffee(matchedCoffee)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#2D201C] text-[#FFF9F1] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#B97849] transition-colors active:scale-95"
              >
                <span>Explore This Coffee</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Tactile Stationery Visual preview */}
            <div className="rounded-3xl overflow-hidden border border-[#2D201C]/10 aspect-[4/3] relative shadow-md">
              <img
                src="/src/assets/images/mood_letter_paper_1792183610620.jpg"
                alt="Handcrafted letter paper with vintage handwriting and wax seal beside a coffee cup"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D201C]/70 via-transparent to-transparent flex items-end p-5 text-[#FFF9F1]">
                <p className="text-xs font-serif italic text-white/90">
                  “Words written for slow hours and honest feelings.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
