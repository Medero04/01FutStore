// ============================================================
// 01FutStore — ProductCarousel Component
// Design: Luxury Brutalism — Horizontal sliding for highlights
// ============================================================

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type Product } from '@/lib/products';
import ProductCard from './ProductCard';

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductCarousel({ title, subtitle, products, onProductClick }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-black border-b border-[#111]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-heading tracking-[0.3em] uppercase">
                {subtitle || 'Destaques'}
              </span>
            </div>
            <h2 className="text-white text-3xl lg:text-4xl font-display uppercase tracking-wider">
              {title}
            </h2>
          </div>
          
          {/* Arrows */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-[#222] flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-[#222] flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] snap-start cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
