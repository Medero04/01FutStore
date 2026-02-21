// ============================================================
// 01FutStore — ProductCard Component
// Design: Luxury Brutalism — gold hover border, image zoom, size selector
// ============================================================

import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
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

  const handleAdd = () => {
    if (!selectedSize) {
      toast.error('Selecione um tamanho', {
        description: 'Por favor, escolha P, M, G ou GG antes de adicionar.',
        style: {
          background: '#111',
          border: '1px solid #D4AF37',
          color: '#fff',
        },
      });
      return;
    }

    addItem(product, selectedSize);
    setAdded(true);

    toast.success(`${product.name} adicionado!`, {
      description: `Tamanho ${selectedSize} — ${formatPrice(product.price)}`,
      style: {
        background: '#111',
        border: '1px solid #D4AF37',
        color: '#fff',
      },
    });

    setTimeout(() => setAdded(false), 2000);
  };

  const delay = `${(index % 8) * 50}ms`;

  return (
    <div
      className="card-product rounded-none flex flex-col animate-fade-up opacity-0"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      {/* Image */}
      <div className="product-img-wrap relative aspect-[3/4] bg-[#0a0a0a] overflow-hidden">
        <img
          src={imgError ? 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80' : product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => setImgError(true)}
        />

        {/* Category label */}
        <div className="absolute top-3 left-3">
          <span className="bg-black/80 text-[#999] text-[10px] font-heading font-medium tracking-widest uppercase px-2 py-1 backdrop-blur-sm">
            {getCategoryLabel(product.category)}
          </span>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span className="badge-hot rounded-sm px-2 py-1 text-[10px] tracking-widest uppercase">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Team & Name */}
        <div>
          <p className="text-[#666] text-[10px] font-body tracking-widest uppercase mb-1">
            {product.team}
          </p>
          <h3 className="text-white font-heading font-semibold text-sm leading-tight tracking-wide line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span
            className="text-[#D4AF37] text-xl font-display tracking-wide"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Size Selector */}
        <div>
          <p className="text-[#555] text-[10px] font-body tracking-widest uppercase mb-2">
            Tamanho
          </p>
          <div className="flex gap-1.5">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                aria-label={`Tamanho ${size}`}
                aria-pressed={selectedSize === size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAdd}
          className={`btn-gold mt-auto w-full py-3 text-sm flex items-center justify-center gap-2 rounded-none transition-all ${
            added ? 'bg-green-500 hover:bg-green-500 shadow-none' : ''
          }`}
          style={added ? { backgroundColor: '#22c55e', color: '#fff' } : {}}
        >
          {added ? (
            <>
              <Check size={15} />
              Adicionado!
            </>
          ) : (
            <>
              <ShoppingCart size={15} />
              Adicionar ao Carrinho
            </>
          )}
        </button>
      </div>
    </div>
  );
}
