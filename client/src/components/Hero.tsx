// ============================================================
// 01FutStore — Hero Component
// Design: Luxury Brutalism — oversized typography, gold accents
// ============================================================

import { ArrowDown } from 'lucide-react';
import { type Category } from '@/lib/products';

interface HeroProps {
  onShopNow: (cat: Category) => void;
}

export default function Hero({ onShopNow }: HeroProps) {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/djow54hvj/image/upload/v1771650331/fundo_carrosel_l46lnm.jpg"
          alt="01FutStore Hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-heading font-semibold tracking-[0.3em] uppercase">
              Coleção Premium 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="hero-display text-white leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
          >
            <span className="block">VESTE</span>
            <span className="block text-[#D4AF37]" style={{ textShadow: '0 0 40px rgba(212,175,55,0.3)' }}>
              A PAIXÃO
            </span>
            <span className="block">DO FUTEBOL</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#aaa] font-body font-light text-base lg:text-lg leading-relaxed mb-8 max-w-md">
            Camisas oficiais e retrôs com qualidade premium. Copa do Mundo 2026, times brasileiros, europeus e clássicos inesquecíveis.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onShopNow('copa2026')}
              className="btn-gold px-8 py-4 text-sm tracking-widest uppercase font-heading font-bold flex items-center gap-2"
            >
              <span>Copa 2026</span>
              <span className="badge-hot text-[10px] px-1.5 py-0.5 rounded-sm">HOT</span>
            </button>
            <button
              onClick={scrollToProducts}
              className="px-8 py-4 border border-white/30 text-white font-heading font-semibold text-sm tracking-widest uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
            >
              Ver Coleção
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: '32+', label: 'Produtos' },
              { value: '4', label: 'Categorias' },
              { value: '100%', label: 'Premium' },
            ].map(stat => (
              <div key={stat.label}>
                <div
                  className="text-[#D4AF37] text-2xl font-display"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-[#666] text-xs font-body tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#666] hover:text-[#D4AF37] transition-colors animate-bounce"
        aria-label="Rolar para produtos"
      >
        <span className="text-[10px] font-body tracking-widest uppercase">Explorar</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
