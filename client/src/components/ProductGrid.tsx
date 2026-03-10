// ============================================================
// 01FutStore — ProductGrid Component
// Design: Luxury Brutalism — with Load More and Tabs
// ============================================================

import { useState, useMemo } from 'react';
import { CATEGORIES, type Category, type Product } from '@/lib/products';
import ProductCard from './ProductCard';
import { Plus } from 'lucide-react';

interface ProductGridProps {
  activeCategory: Category | 'all';
  onCategoryChange: (cat: Category | 'all') => void;
  filteredProducts: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({ 
  activeCategory, 
  onCategoryChange,
  filteredProducts,
  onProductClick 
}: ProductGridProps) {
  const ITEMS_PER_PAGE = 8;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Resetar contagem quando mudar categoria ou busca
  useMemo(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory, filteredProducts.length]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <section id="products" className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tabs / Filters */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-[#0a0a0a] border border-[#111] rounded-none mb-8">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-6 py-3 text-[10px] font-heading font-bold tracking-[0.2em] uppercase transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#D4AF37] text-black'
                  : 'text-[#555] hover:text-white'
              }`}
            >
              Todos os Mantos
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-6 py-3 text-[10px] font-heading font-bold tracking-[0.2em] uppercase transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-black'
                    : 'text-[#555] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          
          <div className="h-px w-24 bg-[#D4AF37]/30" />
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-[#222]">
            <p className="text-[#444] font-heading text-xl tracking-widest uppercase">
              Nenhum produto encontrado
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {visibleProducts.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => onProductClick(product)}
                  className="cursor-pointer"
                >
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-20 flex justify-center">
                <button
                  onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                  className="group flex flex-col items-center gap-4 text-[#555] hover:text-[#D4AF37] transition-all"
                >
                  <span className="text-[10px] font-heading font-bold tracking-[0.3em] uppercase">Carregar Mais</span>
                  <div className="w-12 h-12 border border-[#222] group-hover:border-[#D4AF37] flex items-center justify-center transition-all">
                    <Plus size={20} />
                  </div>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
