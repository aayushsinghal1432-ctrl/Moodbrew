import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  bagCount: number;
  onOpenBag: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ bagCount, onOpenBag }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Discover Your Mood', href: '#discover-mood' },
    { name: 'Coffee Collection', href: '#collection' },
    { name: 'The MOOD LETTER', href: '#mood-letter' },
    { name: 'Our Story', href: '#story' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5EFE6]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#2D201C]/10'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark in display face */}
          <a
            href="#hero"
            className="text-2xl font-serif font-bold tracking-tight text-[#2D201C] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            MOODBREW
          </a>

          {/* Zone 2: 5 clean nav links with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#2D201C]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#2D201C] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B97849] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenBag}
              aria-label="View tasting bag"
              className="group flex items-center gap-2.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2D201C] bg-[#FFF9F1] border border-[#2D201C]/15 rounded-full hover:bg-[#2D201C] hover:text-[#FFF9F1] hover:border-[#2D201C] transition-all whitespace-nowrap shrink-0 shadow-xs active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>Tasting Bag</span>
              <span className="w-4 h-4 rounded-full bg-[#B97849] text-white text-[10px] font-bold flex items-center justify-center tabular-nums">
                {bagCount}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2D201C] hover:bg-[#2D201C]/5 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9F1] border-b border-[#2D201C]/10 px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#2D201C]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#2D201C]/5 hover:text-[#B97849] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
