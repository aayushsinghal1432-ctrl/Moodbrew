import { useState } from 'react';
import { MOODS, MoodDefinition } from './data/moods';
import { COFFEES, CoffeeItem } from './data/coffees';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiscoverMood } from './components/DiscoverMood';
import { YourMoodYourCoffee } from './components/YourMoodYourCoffee';
import { SignatureCollection } from './components/SignatureCollection';
import { CoffeeMoment } from './components/CoffeeMoment';
import { BrandStory } from './components/BrandStory';
import { MoodLetter } from './components/MoodLetter';
import { MoodJournal } from './components/MoodJournal';
import { FindYourMoment } from './components/FindYourMoment';
import { Footer } from './components/Footer';
import { CoffeeDetailModal } from './components/CoffeeDetailModal';
import { TastingBagDrawer, BagItem } from './components/TastingBagDrawer';

export default function App() {
  // Synchronized active mood state
  const [activeMood, setActiveMood] = useState<MoodDefinition>(MOODS[0]);

  // Selected coffee for detail modal inspection
  const [inspectedCoffee, setInspectedCoffee] = useState<CoffeeItem | null>(null);

  // Tasting bag state
  const [bagItems, setBagItems] = useState<BagItem[]>([
    {
      coffee: COFFEES[0], // Honey Oat Latte default
      quantity: 1,
      customizations: {
        milk: 'Oat Milk',
        temp: 'Hot',
        sweetness: 'Standard Sweetness'
      }
    }
  ]);
  const [isBagOpen, setIsBagOpen] = useState<boolean>(false);

  // Quick toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Scroll helpers
  const scrollToDiscover = () => {
    const el = document.getElementById('discover-mood');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Mood Selection: Updates active mood and scrolls to Section 3
  const handleSelectMood = (mood: MoodDefinition) => {
    setActiveMood(mood);
    const recommendationSection = document.getElementById('your-mood-coffee');
    if (recommendationSection) {
      recommendationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Add coffee to bag
  const handleAddToBag = (
    coffee: CoffeeItem,
    customizations?: { milk: string; temp: string; sweetness: string }
  ) => {
    setBagItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.coffee.id === coffee.id &&
          item.customizations?.milk === (customizations?.milk || 'Oat Milk') &&
          item.customizations?.temp === (customizations?.temp || 'Hot')
      );

      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      }

      return [
        ...prev,
        {
          coffee,
          quantity: 1,
          customizations: customizations || {
            milk: 'Oat Milk',
            temp: coffee.temperature === 'Iced' ? 'Iced' : 'Hot',
            sweetness: 'Standard Sweetness'
          }
        }
      ];
    });

    showToast(`Added ${coffee.name} to your tasting flight.`);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    setBagItems((prev) => {
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleClearBag = () => {
    setBagItems([]);
  };

  const totalBagCount = bagItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#2D201C] flex flex-col font-sans selection:bg-[#B97849] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#2D201C] text-[#FFF9F1] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-xl border border-white/20 animate-in fade-in slide-in-from-bottom duration-200">
          {toastMessage}
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        bagCount={totalBagCount}
        onOpenBag={() => setIsBagOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onFindMoodClick={scrollToDiscover}
          onExploreCollectionClick={scrollToCollection}
        />

        {/* 2. Discover Your Mood */}
        <DiscoverMood
          activeMood={activeMood}
          onSelectMood={handleSelectMood}
        />

        {/* 3. Your Mood, Your Coffee */}
        <YourMoodYourCoffee
          activeMood={activeMood}
          onExploreCoffee={(c) => setInspectedCoffee(c)}
          onAddToBag={(c) => handleAddToBag(c)}
        />

        {/* 4. The Signature Collection — 18 Coffees */}
        <SignatureCollection
          onSelectCoffee={(c) => setInspectedCoffee(c)}
          onAddToBag={(c) => handleAddToBag(c)}
        />

        {/* 5. A Little Coffee Moment */}
        <CoffeeMoment />

        {/* 6. The MOODBREW Story */}
        <BrandStory />

        {/* 7. The MOOD LETTER */}
        <MoodLetter
          onExploreCoffee={(c) => setInspectedCoffee(c)}
        />

        {/* 8. The Mood Journal */}
        <MoodJournal />

        {/* 9. Find Your Moment */}
        <FindYourMoment
          onFindMoodClick={scrollToDiscover}
          onExploreCollectionClick={scrollToCollection}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Coffee Inspection Modal */}
      <CoffeeDetailModal
        coffee={inspectedCoffee}
        onClose={() => setInspectedCoffee(null)}
        onAddToBag={handleAddToBag}
      />

      {/* Slide-over Tasting Bag Drawer */}
      <TastingBagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={bagItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearBag={handleClearBag}
      />
    </div>
  );
}
