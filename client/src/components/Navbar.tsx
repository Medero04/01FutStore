// ============================================================
// 01FutStore — Navbar Component (ESTILO NIKE)
// Design: Logo | Categorias com Dropdowns | Pesquisa | Favoritos | Carrinho
// Caminho: client/src/components/Navbar.tsx
// ============================================================

import SearchBar from './SearchBar';
import { useEffect, useState, useRef } from 'react';
import { ShoppingCart, Menu, X, Search, Heart, ChevronDown, ChevronRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from './CartDrawer';
import { NAV_CATEGORIES, type NavCategory } from '@/lib/navCategories';

interface NavbarProps {
  activeCategory: string | 'all';
  onCategoryChange: (cat: string | 'all') => void;
  onSearch: (query: string) => void;
  onTeamSelect?: (team: string) => void;
}

export default function Navbar({ activeCategory, onCategoryChange, onSearch, onTeamSelect }: NavbarProps) {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  const toggleFavorite = () => {
    const newFavorites = favorites.length > 0 ? [] : ['liked'];
    setFavorites(newFavorites);
  };

  const handleTeamClick = (team: string) => {
    if (onTeamSelect) {
      onTeamSelect(team);
    }
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileExpandedCat(null);
    
    // Scroll para produtos com offset para a navbar
    setTimeout(() => {
      const el = document.querySelector('#products');
      if (el) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleDropdownToggle = (catId: string) => {
    setOpenDropdown(openDropdown === catId ? null : catId);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/10 py-0 shadow-2xl'
          : 'bg-black/40 backdrop-blur-sm border-b border-white/5 py-2'
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ────────────────────────────────────────── */}
            <a href="/" className="flex-shrink-0 transition-transform hover:scale-105 active:scale-95">
              <img
                src="https://res.cloudinary.com/djow54hvj/image/upload/v1771654165/tipo_mmgtv9.jpg"
                alt="01FutStore Logo"
                style={{ height: scrolled ? '40px' : '48px', width: 'auto' }}
                className="transition-all duration-500"
              />
            </a>

            {/* ── Desktop Navigation ── */}
            <div className="hidden lg:flex items-center gap-2 flex-1 justify-center" ref={dropdownRef}>
              {NAV_CATEGORIES.map((category) => (
                <div key={category.id} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(category.id)}
                    className={`flex items-center gap-1.5 px-5 py-2 transition-all duration-300 rounded-full ${
                      openDropdown === category.id
                        ? 'text-[#D4AF37] bg-white/5'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="font-heading font-bold text-xs tracking-[0.15em] uppercase">
                      {category.label}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 opacity-50 ${
                        openDropdown === category.id ? 'rotate-180 opacity-100' : ''
                      }`}
                    />
                  </button>

                  {/* ── Dropdown Menu ── */}
                  {openDropdown === category.id && (
                    <div className="fixed left-0 right-0 top-[64px] lg:top-[80px] bg-black/95 border-t border-b border-[#D4AF37]/10 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-50 animate-in slide-in-from-top-2 duration-300">
                      <div className="max-w-[1600px] mx-auto px-12 py-12">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
                          {category.subcategories.map((subcategory) => (
                            <div key={subcategory.id} className="flex flex-col gap-4">
                              <h3 className="text-white font-heading font-bold text-xs uppercase tracking-[0.2em] pb-3 border-b border-white/5 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                                {subcategory.label}
                              </h3>
                              <ul className="flex flex-col gap-2.5">
                                {subcategory.items.map((item) => (
                                  <li key={item}>
                                    <button
                                      onClick={() => handleTeamClick(item)}
                                      className="text-[#666] text-xs font-medium hover:text-[#D4AF37] transition-all duration-200 text-left hover:pl-2 flex items-center gap-2 group/item"
                                    >
                                      <span className="w-0 h-px bg-[#D4AF37] transition-all group-hover/item:w-3"></span>
                                      {item}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── Right Icons ── */}
            <div className="flex items-center gap-2 lg:gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 text-white/70 hover:text-[#D4AF37] hover:bg-white/5 rounded-full transition-all"
                aria-label="Pesquisar"
              >
                <Search size={20} />
              </button>

              <button
                onClick={toggleFavorite}
                className={`p-2.5 rounded-full transition-all ${
                  favorites.length > 0
                    ? 'text-[#D4AF37] bg-white/5'
                    : 'text-white/70 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
                aria-label="Favoritos"
              >
                <Heart size={20} fill={favorites.length > 0 ? '#D4AF37' : 'none'} />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-white/70 hover:text-[#D4AF37] hover:bg-white/5 rounded-full transition-all"
                aria-label="Carrinho"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 bg-[#D4AF37] text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-black">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  setMobileExpandedCat(null);
                }}
                className="lg:hidden p-2.5 text-[#D4AF37] hover:bg-white/5 rounded-full transition-all"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* ── Search Bar ── */}
          {searchOpen && (
            <div className="pb-6 pt-2 animate-in slide-in-from-top-2 duration-300">
              <SearchBar
                onSearch={(query: string) => {
                  onSearch(query);
                  if (!query) setSearchOpen(false);
                }}
                onClear={() => {
                  onSearch('');
                  setSearchOpen(false);
                }}
              />
            </div>
          )}
        </div>

        {/* ── Mobile Menu ── */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/98 border-t border-white/5 backdrop-blur-3xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-500">
            <div className="px-6 py-8 flex flex-col gap-2">
              {NAV_CATEGORIES.map((category) => (
                <div key={category.id} className="border-b border-white/5 last:border-0">
                  <button
                    onClick={() => setMobileExpandedCat(mobileExpandedCat === category.id ? null : category.id)}
                    className="w-full flex items-center justify-between py-5"
                  >
                    <span className="text-white font-heading font-bold text-sm uppercase tracking-[0.2em]">
                      {category.label}
                    </span>
                    <ChevronRight
                      size={18}
                      className={`text-[#D4AF37] transition-transform duration-300 ${
                        mobileExpandedCat === category.id ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {mobileExpandedCat === category.id && (
                    <div className="pb-6 pl-4 space-y-8 animate-in fade-in slide-in-from-left-2 duration-300">
                      {category.subcategories.map((subcategory) => (
                        <div key={subcategory.id}>
                          <p className="text-[#D4AF37] text-[10px] font-heading font-bold uppercase tracking-[0.2em] mb-4">
                            {subcategory.label}
                          </p>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {subcategory.items.map((item) => (
                              <button
                                key={item}
                                onClick={() => handleTeamClick(item)}
                                className="text-left py-2 text-[#666] text-xs font-medium hover:text-white transition-colors"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {isCartOpen && <CartDrawer onClose={() => setIsCartOpen(false)} />}
    </>
  );
}
