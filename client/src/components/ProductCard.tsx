// ============================================================
// 01FutStore — ProductCard Component
// Design: Luxury Brutalism — gold hover border, image zoom, size selector
// ============================================================

import { useState } from 'react';
import { ShoppingCart, Check, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice, getCategoryLabel, type Product } from '@/lib/products';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedSize) {
      toast.error('Selecione um tamanho', {
        description: 'Escolha o tamanho antes de adicionar.',
        style: { background: '#111', border: '1px solid #D4AF37', color: '#fff' },
      });
      return;
    }

    addItem(product, selectedSize);
    setAdded(true);
    toast.success(`${product.name} adicionado!`, {
      style: { background: '#111', border: '1px solid #D4AF37', color: '#fff' },
    });
    setTimeout(() => setAdded(false), 2000);
  };

  const delay = `${(index % 8) * 50}ms`;

  return (
    <div
      className="card-product group rounded-none flex flex-col animate-fade-up opacity-0 h-full"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      {/* Image Container */}
      <div className="product-img-wrap relative aspect-[3/4] bg-[#0a0a0a] overflow-hidden">
        <img
          src={imgError ? 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80' : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={() => setImgError(true)}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Category & Badge */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-black/80 text-[#D4AF37] text-[9px] font-heading font-bold tracking-[0.2em] uppercase px-2.5 py-1.5 backdrop-blur-md border border-[#D4AF37]/20">
            {getCategoryLabel(product.category)}
          </span>
          {product.badge && (
            <span className="badge-hot self-start rounded-none px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase">
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick View Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
           <div className="w-12 h-12 bg-[#D4AF37] text-black flex items-center justify-center rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <Plus size={24} />
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4 bg-[#080808]">
        <div>
          <p className="text-[#444] text-[9px] font-heading tracking-[0.2em] uppercase mb-1.5 group-hover:text-[#D4AF37] transition-colors">
            {product.team}
          </p>
          <h3 className="text-white font-heading font-bold text-sm leading-tight tracking-wide line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#D4AF37] text-2xl font-display tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Size Selector */}
        <div onClick={(e) => e.stopPropagation()}>
          <div className="flex gap-1.5">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                className={`size-btn flex-1 !h-9 !min-w-0 text-[10px] ${selectedSize === size ? 'selected' : ''}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAdd}
          className={`btn-gold w-full py-4 text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 transition-all ${
            added ? 'bg-green-600 hover:bg-green-600' : ''
          }`}
          style={added ? { backgroundColor: '#16a34a', color: '#fff' } : {}}
        >
          {added ? (
            <>
              <Check size={14} />
              ADICIONADO
            </>
          ) : (
            <>
              <ShoppingCart size={14} />
              COMPRAR AGORA
            </>
          )}
        </button>
      </div>
    </div>
  );
}
