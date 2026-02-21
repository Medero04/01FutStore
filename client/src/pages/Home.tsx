// ============================================================
// 01FutStore — Home Page
// Design: Luxury Brutalism — full e-commerce experience
// ============================================================

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import FeaturesBanner from '@/components/FeaturesBanner';
import SocialProof from '@/components/SocialProof';
import { type Category } from '@/lib/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const handleCategoryChange = (cat: Category | 'all') => {
    setActiveCategory(cat);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Navbar */}
      <Navbar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Hero Banner */}
      <Hero onShopNow={handleCategoryChange} />

      {/* Features Banner */}
      <FeaturesBanner />

      {/* Category Highlights Strip */}
      <CategoryStrip onCategoryChange={handleCategoryChange} />

      {/* Products Grid */}
      <ProductGrid
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Social Proof */}
      <SocialProof />

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  );
}

// ── Category Highlights Strip ─────────────────────────────────
function CategoryStrip({ onCategoryChange }: { onCategoryChange: (cat: Category | 'all') => void }) {
  const categories = [
    {
      id: 'copa2026' as Category,
      label: 'Copa do Mundo 2026',
      sublabel: 'Coleção Exclusiva',
      badge: 'HOT',
      image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771652727/world_cup_trophy_gold_t8daig.png',
    },
    {
      id: 'brasileiras' as Category,
      label: 'Times Brasileiros',
      sublabel: 'Paixão Nacional',
      image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771652481/libertadores_trophy_gold_idkj9v.png',
    },
    {
      id: 'europeias' as Category,
      label: 'Times Europeus',
      sublabel: 'Elite do Futebol',
      image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771652398/champions_league_trophy_gold_vhw50h.png',
    },
    {
      id: 'retros' as Category,
      label: 'Camisas Retrôs',
      sublabel: 'Clássicos Eternos',
      image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771652936/retro_soccer_ball_gold_oyg1gp.png',
    },
  ];

  return (
    <section className="py-16 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-heading tracking-[0.3em] uppercase">
              Nossas Categorias
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          <h2
            className="text-white text-4xl lg:text-6xl font-display"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
          >
            Escolha sua Paixão
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => {
                onCategoryChange(cat.id);
                const el = document.getElementById('products');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="relative group overflow-hidden aspect-[3/4] bg-[#111] text-left"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#D4AF37] transition-all duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {cat.badge && (
                  <span className="badge-hot text-[10px] px-2 py-0.5 rounded-sm mb-2 inline-block">
                    {cat.badge}
                  </span>
                )}
                <p className="text-[#D4AF37] text-[10px] font-body tracking-widest uppercase mb-1">
                  {cat.sublabel}
                </p>
                <h3 className="text-white font-heading font-bold text-lg leading-tight">
                  {cat.label}
                </h3>
                <div className="flex items-center gap-2 mt-3 text-[#D4AF37] text-xs font-heading tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Ver coleção</span>
                  <span>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
