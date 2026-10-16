import React, { useState } from 'react';
import { CoffeeItem } from '../data/coffees';
import { X, Trash2, CheckCircle2, ShoppingBag } from 'lucide-react';

export interface BagItem {
  coffee: CoffeeItem;
  quantity: number;
  customizations?: {
    milk: string;
    temp: string;
    sweetness: string;
  };
}

interface TastingBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BagItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onClearBag: () => void;
}

export const TastingBagDrawer: React.FC<TastingBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearBag
}) => {
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => {
    const priceNum = parseFloat(item.coffee.price.replace('$', '')) || 0;
    return sum + priceNum * item.quantity;
  }, 0);

  const handleCompleteOrder = () => {
    setIsOrdered(true);
    setTimeout(() => {
      onClearBag();
      setIsOrdered(false);
      onClose();
    }, 2800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FFF9F1] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-[#2D201C]/15 relative animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#2D201C]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#B97849]" />
            <h3 className="font-serif text-2xl text-[#2D201C]">Your Tasting Bag</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="w-8 h-8 rounded-full bg-[#2D201C]/5 hover:bg-[#2D201C]/10 text-[#2D201C] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 overflow-y-auto">
          {isOrdered ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-[#B97849] mb-4 animate-bounce" />
              <h4 className="font-serif text-3xl text-[#2D201C] mb-2">Tasting Reserved</h4>
              <p className="text-sm text-[#2D201C]/75 max-w-xs mb-4">
                Your mood-crafted flight has been scheduled at the atelier bar. Take a slow breath while we warm the porcelain.
              </p>
              <span className="text-xs font-serif italic text-[#B97849]">
                “There’s a cup for the feeling.”
              </span>
            </div>
          ) : items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-[#2D201C]/60">
              <ShoppingBag className="w-12 h-12 stroke-[1.2] mb-3 text-[#2D201C]/30" />
              <p className="font-serif text-xl text-[#2D201C] mb-1">Your bag is empty</p>
              <p className="text-xs max-w-xs mb-6">
                Explore our 18 handcrafted coffees or match your current feeling to begin your tasting journey.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#2D201C] text-[#FFF9F1] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#B97849] transition-colors"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, idx) => (
                <div
                  key={`${item.coffee.id}-${idx}`}
                  className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#2D201C]/10 flex gap-4 items-start"
                >
                  <img
                    src={item.coffee.image}
                    alt={item.coffee.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#2D201C]/10"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-base text-[#2D201C] truncate">
                        {item.coffee.name}
                      </h4>
                      <span className="text-xs font-bold text-[#2D201C] tabular-nums shrink-0">
                        {item.coffee.price}
                      </span>
                    </div>

                    <div className="text-[11px] text-[#B97849] font-medium mb-1">
                      Mood: {item.coffee.mood}
                    </div>

                    {item.customizations && (
                      <div className="text-[10px] text-[#2D201C]/60 mb-2">
                        {item.customizations.temp} · {item.customizations.milk}
                      </div>
                    )}

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#2D201C]/10">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="w-6 h-6 rounded-md bg-white border border-[#2D201C]/10 text-xs flex items-center justify-center hover:bg-[#2D201C] hover:text-white transition-colors"
                        >
                          -
                        </button>
                        <span className="text-xs font-semibold tabular-nums px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="w-6 h-6 rounded-md bg-white border border-[#2D201C]/10 text-xs flex items-center justify-center hover:bg-[#2D201C] hover:text-white transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onUpdateQuantity(idx, 0)}
                        className="text-[#2D201C]/40 hover:text-rose-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && !isOrdered && (
          <div className="p-6 border-t border-[#2D201C]/10 bg-[#FFFDF9] space-y-4">
            <div className="flex items-center justify-between text-xs text-[#2D201C]/70">
              <span>Tasting Flight ({items.reduce((acc, i) => acc + i.quantity, 0)} cups)</span>
              <span className="font-bold text-[#2D201C] text-sm tabular-nums">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCompleteOrder}
              className="w-full py-4 bg-[#2D201C] hover:bg-[#B97849] text-[#FFF9F1] rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              Reserve Tasting Session · ${subtotal.toFixed(2)}
            </button>

            <p className="text-[11px] text-center text-[#2D201C]/50">
              Concept Bar Checkout · Hand-poured on arrival
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
