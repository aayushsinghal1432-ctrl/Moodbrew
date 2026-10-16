import React, { useState, useMemo } from 'react';
import { COFFEES, CoffeeItem } from '../data/coffees';
import { Search, Plus, Sparkles, Filter } from 'lucide-react';

interface SignatureCollectionProps {
  onSelectCoffee: (coffee: CoffeeItem) => void;
  onAddToBag: (coffee: CoffeeItem) => void;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({
  onSelectCoffee,
  onAddToBag
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Coffees');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All Coffees',
    'Comfort',
    'Refresh',
    'Focus',
    'Indulgence',
    'Adventure'
  ];

  const filteredCoffees = useMemo(() => {
    return COFFEES.filter((coffee) => {
      const matchesCategory =
        selectedCategory === 'All Coffees' || coffee.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        coffee.name.toLowerCase().includes(query) ||
        coffee.mood.toLowerCase().includes(query) ||
        coffee.flavorNotes.some((note) => note.toLowerCase().includes(query)) ||
        coffee.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="collection" className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#2D201C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#B97849] font-semibold mb-3">
              Section 04 · The Full Repertory
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2D201C] tracking-tight">
              THE LITTLE THINGS WE BREW.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#2D201C]/75 max-w-md font-normal leading-relaxed">
            Eighteen different cups. A hundred little moments. Find the one that feels like yours.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-14 pb-8 border-b border-[#2D201C]/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#2D201C] text-[#FFF9F1] shadow-xs'
                      : 'bg-[#FFF9F1] text-[#2D201C]/70 hover:text-[#2D201C] hover:bg-[#F5EFE6] border border-[#2D201C]/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-[#2D201C]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by flavor, mood, name..."
              className="w-full pl-10 pr-4 py-2 bg-[#FFF9F1] border border-[#2D201C]/15 rounded-full text-xs text-[#2D201C] placeholder-[#2D201C]/40 focus:outline-hidden focus:border-[#2D201C] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#2D201C]/50 hover:text-[#2D201C]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Empty state if search has no results */}
        {filteredCoffees.length === 0 && (
          <div className="text-center py-20 bg-[#FFF9F1] rounded-3xl border border-[#2D201C]/10">
            <Filter className="w-8 h-8 text-[#2D201C]/30 mx-auto mb-3" />
            <h3 className="text-xl font-serif text-[#2D201C] mb-2">No matching cups found</h3>
            <p className="text-xs text-[#2D201C]/60 mb-6">Try clearing your search query or selecting All Coffees.</p>
            <button
              onClick={() => { setSelectedCategory('All Coffees'); setSearchQuery(''); }}
              className="px-5 py-2 text-xs uppercase tracking-wider font-semibold bg-[#2D201C] text-white rounded-full hover:bg-[#B97849] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Varied Editorial Grid: Lead Feature Card followed by 3-Column Visual Rhythm */}
        {filteredCoffees.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCoffees.map((coffee, idx) => {
              // Accentuate every 6th card with wider editorial styling if wanted
              return (
                <div
                  key={coffee.id}
                  className="group bg-[#FFF9F1] rounded-2xl border border-[#2D201C]/10 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image Container with aspect-ratio */}
                  <div
                    onClick={() => onSelectCoffee(coffee)}
                    className="relative aspect-[4/3] bg-[#2D201C]/5 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={coffee.image}
                      alt={`${coffee.name} - ${coffee.mood}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Number & Category Chip */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="font-serif text-xs font-semibold px-2.5 py-1 bg-[#2D201C]/80 backdrop-blur-xs text-[#FFF9F1] rounded-md">
                        {coffee.number}
                      </span>
                      <span className="text-[11px] font-medium px-2.5 py-1 bg-[#FFF9F1]/90 backdrop-blur-xs text-[#2D201C] rounded-md shadow-xs">
                        {coffee.category}
                      </span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-xs font-bold px-2.5 py-1 bg-[#FFF9F1]/95 text-[#2D201C] rounded-md tabular-nums shadow-xs">
                        {coffee.price}
                      </span>
                    </div>

                    {/* Quick Explore Overlay Hint */}
                    <div className="absolute inset-0 bg-[#2D201C]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-[#FFF9F1] text-[#2D201C] rounded-full text-xs font-semibold uppercase tracking-wider shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        Explore Cup &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Mood Association */}
                      <div className="flex items-center gap-1.5 text-xs text-[#B97849] font-medium mb-1.5">
                        <Sparkles className="w-3 h-3" />
                        <span>Mood: {coffee.mood}</span>
                      </div>

                      {/* Coffee Name */}
                      <h3
                        onClick={() => onSelectCoffee(coffee)}
                        className="text-2xl font-serif text-[#2D201C] tracking-tight mb-2.5 cursor-pointer hover:text-[#B97849] transition-colors"
                      >
                        {coffee.name}
                      </h3>

                      {/* Short Emotional Description */}
                      <p className="text-xs sm:text-sm text-[#2D201C]/75 font-normal leading-relaxed mb-4 line-clamp-2">
                        {coffee.description}
                      </p>

                      {/* Flavour Notes List */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {coffee.flavorNotes.map((note) => (
                          <span
                            key={note}
                            className="text-[11px] text-[#2D201C]/85 bg-[#F5EFE6] px-2.5 py-1 rounded-md"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-4 border-t border-[#2D201C]/10 flex items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectCoffee(coffee)}
                        className="text-xs font-semibold text-[#2D201C] hover:text-[#B97849] underline transition-colors"
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => onAddToBag(coffee)}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2D201C] text-[#FFF9F1] rounded-full text-xs font-medium hover:bg-[#B97849] transition-colors active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Collection Summary Footnote */}
        <div className="mt-16 text-center text-xs text-[#2D201C]/60">
          Showing <span className="font-semibold text-[#2D201C] tabular-nums">{filteredCoffees.length}</span> of 18 signature recipes · Handcrafted at MOODBREW Atelier
        </div>
      </div>
    </section>
  );
};
