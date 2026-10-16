import React, { useState } from 'react';
import { CoffeeItem } from '../data/coffees';
import { X, Sparkles, Plus, Check } from 'lucide-react';

interface CoffeeDetailModalProps {
  coffee: CoffeeItem | null;
  onClose: () => void;
  onAddToBag: (coffee: CoffeeItem, customizations: { milk: string; temp: string; sweetness: string }) => void;
}

export const CoffeeDetailModal: React.FC<CoffeeDetailModalProps> = ({
  coffee,
  onClose,
  onAddToBag
}) => {
  if (!coffee) return null;

  const [selectedMilk, setSelectedMilk] = useState<string>('Oat Milk');
  const [selectedTemp, setSelectedTemp] = useState<string>(
    coffee.temperature === 'Iced' ? 'Iced' : 'Hot'
  );
  const [selectedSweetness, setSelectedSweetness] = useState<string>('Standard Sweetness');
  const [added, setAdded] = useState<boolean>(false);

  const milkOptions = ['Oat Milk', 'Whole Milk', 'Almond Milk', 'Pistachio Milk'];
  const sweetnessOptions = ['Unsweetened', 'Gentle (50%)', 'Standard Sweetness'];

  const handleAdd = () => {
    onAddToBag(coffee, {
      milk: selectedMilk,
      temp: selectedTemp,
      sweetness: selectedSweetness
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FFF9F1] rounded-3xl border border-[#2D201C]/15 shadow-2xl max-w-2xl w-full overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-[#2D201C]/80 hover:bg-[#2D201C] text-[#FFF9F1] flex items-center justify-center transition-colors shadow-md"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Top Image Showcase */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#2D201C]/5 overflow-hidden">
            <img
              src={coffee.image}
              alt={coffee.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D201C]/80 via-transparent to-transparent flex items-end p-6 text-[#FFF9F1]">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#F5EFE6]/80 font-semibold mb-1">
                  <span>Batch {coffee.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>{coffee.category}</span>
                </div>
                <h3 className="text-3xl font-serif">{coffee.name}</h3>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Mood pill and price */}
            <div className="flex items-center justify-between pb-4 border-b border-[#2D201C]/10">
              <div className="flex items-center gap-2 text-sm text-[#B97849] font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Mood: {coffee.mood}</span>
              </div>
              <span className="font-serif text-2xl font-bold text-[#2D201C] tabular-nums">
                {coffee.price}
              </span>
            </div>

            {/* Emotional Narrative */}
            <div>
              <div className="text-xs uppercase tracking-wider text-[#2D201C]/50 font-semibold mb-1">
                Emotional Description
              </div>
              <p className="font-serif italic text-lg text-[#2D201C]/90 leading-relaxed">
                “{coffee.description}”
              </p>
            </div>

            {/* Flavour Profile & Aromas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF7F2] p-4 rounded-2xl border border-[#2D201C]/5">
              <div>
                <span className="text-xs font-semibold text-[#2D201C] block mb-2">Flavour Notes</span>
                <div className="flex flex-wrap gap-1.5">
                  {coffee.flavorNotes.map((note) => (
                    <span
                      key={note}
                      className="text-xs bg-[#FFF9F1] text-[#2D201C] px-2.5 py-1 rounded-md border border-[#2D201C]/10"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#2D201C] block mb-2">Aroma Notes</span>
                <p className="text-xs text-[#2D201C]/80 leading-relaxed">
                  {coffee.aromaNotes}
                </p>
              </div>
            </div>

            {/* Brewing Ritual */}
            <div className="text-xs text-[#2D201C]/80 bg-[#FAF7F2] p-4 rounded-2xl border border-[#2D201C]/5">
              <span className="font-semibold text-[#2D201C] block mb-1">Atelier Preparation Ritual</span>
              <p className="italic">{coffee.ritual}</p>
            </div>

            {/* Customization Options */}
            <div className="space-y-4 pt-2">
              {/* Milk Option */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2D201C]/70 block mb-2">
                  Milk Base
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {milkOptions.map((milk) => (
                    <button
                      key={milk}
                      onClick={() => setSelectedMilk(milk)}
                      className={`py-2 px-3 text-xs rounded-xl border text-center transition-all ${
                        selectedMilk === milk
                          ? 'bg-[#2D201C] text-[#FFF9F1] border-[#2D201C]'
                          : 'bg-white text-[#2D201C]/80 border-[#2D201C]/10 hover:border-[#2D201C]/40'
                      }`}
                    >
                      {milk}
                    </button>
                  ))}
                </div>
              </div>

              {/* Temperature Option (if applicable) */}
              {coffee.temperature === 'Both' && (
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2D201C]/70 block mb-2">
                    Temperature
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {['Hot', 'Iced'].map((temp) => (
                      <button
                        key={temp}
                        onClick={() => setSelectedTemp(temp)}
                        className={`py-2 px-3 text-xs rounded-xl border text-center transition-all ${
                          selectedTemp === temp
                            ? 'bg-[#2D201C] text-[#FFF9F1] border-[#2D201C]'
                            : 'bg-white text-[#2D201C]/80 border-[#2D201C]/10 hover:border-[#2D201C]/40'
                        }`}
                      >
                        {temp === 'Hot' ? 'Steamed Warm' : 'Over Clear Ice'}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sweetness */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2D201C]/70 block mb-2">
                  Sweetness Calibration
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {sweetnessOptions.map((sw) => (
                    <button
                      key={sw}
                      onClick={() => setSelectedSweetness(sw)}
                      className={`py-2 px-2 text-xs rounded-xl border text-center transition-all truncate ${
                        selectedSweetness === sw
                          ? 'bg-[#2D201C] text-[#FFF9F1] border-[#2D201C]'
                          : 'bg-white text-[#2D201C]/80 border-[#2D201C]/10 hover:border-[#2D201C]/40'
                      }`}
                    >
                      {sw}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#2D201C]/10">
              <button
                onClick={handleAdd}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#2D201C] hover:bg-[#B97849] text-[#FFF9F1] rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added to Tasting Bag</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Tasting Bag ({coffee.price})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
