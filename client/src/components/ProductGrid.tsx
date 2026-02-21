// ============================================================
// 01FutStore — ProductGrid Component
// Design: Luxury Brutalism — 4-col desktop, 2-col tablet, 1-col mobile
// ============================================================

import { useMemo } from 'react';
import { PRODUCTS, CATEGORIES, type Category } from '@/lib/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  activeCategory: Category | 'all';
  onCategoryChange: (cat: Category | 'all') => void;
}

export default function ProductGrid({ activeCategory, onCategoryChange }: ProductGridProps) {
  const filtered = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const activeLabel =
    activeCategory === 'all'
      ? 'Todos os Produtos'
      : CATEGORIES.find(c => c.id === activeCategory)?.label ?? activeCategory;

  return (
    <section id="products" className="py-16 lg:py-24 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-heading tracking-[0.3em] uppercase">
                Coleção
              </span>
            </div>
            <h2 className="section-title text-white text-3xl lg:text-5xl">
              {activeLabel}
            </h2>
            <p className="text-[#666] font-body text-sm mt-4">
              {filtered.length} produto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 text-xs font-heading font-semibold tracking-widest uppercase transition-all duration-200 border ${
                activeCategory === 'all'
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                  : 'bg-transparent text-[#999] border-[#333] hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs font-heading font-semibold tracking-widest uppercase transition-all duration-200 border flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                    : 'bg-transparent text-[#999] border-[#333] hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
              >
                {cat.label}
                {cat.id === 'copa2026' && activeCategory !== cat.id && (
                  <span className="badge-hot text-[9px] px-1 py-0.5 rounded-sm">HOT</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-line mb-12" />

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#444] font-heading text-2xl tracking-widest uppercase">
              Nenhum produto encontrado
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
