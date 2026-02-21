// ============================================================
// 01FutStore — Navbar Component
// Design: Luxury Brutalism — fixed top, gold accents, blur on scroll
// ============================================================

import { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { CATEGORIES, type Category } from '@/lib/products';

interface NavbarProps {
  activeCategory: Category | 'all';
  onCategoryChange: (cat: Category | 'all') => void;
}

export default function Navbar({ activeCategory, onCategoryChange }: NavbarProps) {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategory = (cat: Category | 'all') => {
    onCategoryChange(cat);
    setMobileOpen(false);
    // Smooth scroll to products section
    const el = document.getElementById('products');
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-2xl'
            : 'bg-black/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <button
              onClick={() => handleCategory('all')}
              className="flex items-center gap-2.5 group"
            >
              <img 
                src="https://res.cloudinary.com/djow54hvj/image/upload/v1771654165/tipo_mmgtv9.jpg" 
                alt="01FutStore Logo" 
                style={{ height: '50px', width: 'auto' }}
                className="group-hover:opacity-80 transition-opacity"
              />

            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => handleCategory('all')}
                className={`nav-item ${activeCategory === 'all' ? 'active' : ''}`}
              >
                Todos
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategory(cat.id)}
                  className={`nav-item flex items-center gap-1.5 ${
                    activeCategory === cat.id ? 'active' : ''
                  }`}
                >
                  {cat.id === 'copa2026' ? (
                    <span className="flex items-center gap-1.5">
                      {cat.label}
                      <span className="badge-hot text-[10px] px-1.5 py-0.5 rounded-sm font-heading font-bold">
                        HOT
                      </span>
                    </span>
                  ) : (
                    cat.label
                  )}
                </button>
              ))}
            </div>

            {/* Right: Cart + Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative flex items-center gap-2 px-3 py-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-200 group"
                aria-label="Abrir carrinho"
              >
                <ShoppingCart
                  size={18}
                  className="text-[#D4AF37] group-hover:scale-110 transition-transform"
                />
                <span className="hidden sm:block text-[#D4AF37] font-heading font-semibold text-sm tracking-wide">
                  Carrinho
                </span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-[10px] font-heading font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce-once">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[#D4AF37] hover:text-[#E8C84A] transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-black/98 border-t border-[#D4AF37]/20 backdrop-blur-xl">
            <div className="px-4 py-4 flex flex-col gap-1">
              <button
                onClick={() => handleCategory('all')}
                className={`text-left py-3 px-4 font-heading font-medium text-sm tracking-widest uppercase transition-colors border-b border-[#1a1a1a] ${
                  activeCategory === 'all' ? 'text-[#D4AF37]' : 'text-[#ccc] hover:text-[#D4AF37]'
                }`}
              >
                Todos os Produtos
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategory(cat.id)}
                  className={`text-left py-3 px-4 font-heading font-medium text-sm tracking-widest uppercase transition-colors border-b border-[#1a1a1a] flex items-center justify-between ${
                    activeCategory === cat.id ? 'text-[#D4AF37]' : 'text-[#ccc] hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.id === 'copa2026' && (
                    <span className="badge-hot text-[10px] px-2 py-0.5 rounded-sm">HOT</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
