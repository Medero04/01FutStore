// ============================================================
// 01FutStore — ProductDetail Component
// Design: Luxury Brutalism — modal with gallery, zoom, personalization
// ============================================================

import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, X, Plus, Minus, ChevronLeft, ChevronRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice, type Product } from '@/lib/products';
import { toast } from 'sonner';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const images = (product.images && product.images.length > 0) ? product.images : [product.image];  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [personalizeName, setPersonalizeName] = useState('');
  const [personalizeNumber, setPersonalizeNumber] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const { addItem } = useCart();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Selecione um tamanho', {
        style: { background: '#111', border: '1px solid #D4AF37', color: '#fff' },
      });
      return;
    }

    if ((personalizeName || personalizeNumber) && (!personalizeName || !personalizeNumber)) {
      toast.error('Personalização incompleta', {
        description: 'Preencha nome E número.',
        style: { background: '#111', border: '1px solid #D4AF37', color: '#fff' },
      });
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem(
        product,
        selectedSize,
        personalizeName ? { name: personalizeName, number: personalizeNumber } : undefined
      );
    }

    toast.success(`${product.name} adicionado!`, {
      style: { background: '#111', border: '1px solid #D4AF37', color: '#fff' },
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-8">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative bg-[#050505] w-full max-w-6xl h-full sm:h-auto max-h-full sm:max-h-[90vh] overflow-y-auto border border-[#111] shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black transition-all rounded-full"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
          
          {/* Left: Gallery (6 cols) */}
          <div className="lg:col-span-7 p-0 lg:p-8">
            <div 
              className="relative aspect-square bg-[#0a0a0a] overflow-hidden cursor-crosshair group"
              onMouseEnter={() => !isMobile && setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out"
                style={{
                  transform: isZoomed && !isMobile ? 'scale(2)' : 'scale(1)',
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />
              
              {/* Mobile Arrows */}
              {images.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between lg:hidden">
                  <button onClick={(e) => { e.stopPropagation(); setSelectedImage(prev => (prev - 1 + images.length) % images.length); }} className="p-2 bg-black/50 text-white rounded-full"><ChevronLeft size={20}/></button>
                  <button onClick={(e) => { e.stopPropagation(); setSelectedImage(prev => (prev + 1) % images.length); }} className="p-2 bg-black/50 text-white rounded-full"><ChevronRight size={20}/></button>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-4 mt-4 px-4 lg:px-0 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative flex-shrink-0 w-20 h-20 border-2 transition-all ${
                      selectedImage === idx ? 'border-[#D4AF37]' : 'border-[#111] hover:border-[#333]'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info (5 cols) */}
          <div className="lg:col-span-5 p-6 lg:p-8 lg:pl-0 flex flex-col">
            <div className="mb-6">
              <p className="text-[#D4AF37] text-xs font-heading tracking-[0.3em] uppercase mb-2">{product.team}</p>
              <h2 className="text-white text-2xl lg:text-4xl font-display uppercase tracking-wider leading-tight mb-4">
                {product.name}
              </h2>
              <p className="text-[#D4AF37] text-3xl font-display">
                {formatPrice(product.price)}
              </p>
            </div>

            <div className="space-y-8 flex-1">
              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white text-xs font-heading uppercase tracking-widest">Selecione o Tamanho</span>
                  <button className="text-[#666] text-[10px] uppercase tracking-widest hover:text-[#D4AF37] transition-colors">Guia de Medidas</button>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 border-2 font-heading font-bold text-sm transition-all duration-300 ${
                        selectedSize === size
                          ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                          : 'bg-transparent border-[#222] text-[#666] hover:border-[#D4AF37] hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personalization */}
              <div className="p-5 bg-[#0a0a0a] border border-[#111]">
                <h4 className="text-white text-xs font-heading uppercase tracking-widest mb-4 flex justify-between">
                  Personalização <span>+ R$ 20,00</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#444] uppercase tracking-widest">Nome</label>
                    <input
                      type="text"
                      placeholder="Ex: NEYMAR JR"
                      value={personalizeName}
                      onChange={(e) => setPersonalizeName(e.target.value.toUpperCase())}
                      className="w-full bg-black border border-[#222] px-4 py-3 text-white text-xs font-heading focus:border-[#D4AF37] outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#444] uppercase tracking-widest">Número</label>
                    <input
                      type="text"
                      placeholder="Ex: 10"
                      value={personalizeNumber}
                      onChange={(e) => setPersonalizeNumber(e.target.value.replace(/\D/g, '').slice(0, 2))}
                      className="w-full bg-black border border-[#222] px-4 py-3 text-white text-xs font-heading focus:border-[#D4AF37] outline-none transition-colors text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-6">
                <span className="text-white text-xs font-heading uppercase tracking-widest">Quantidade</span>
                <div className="flex items-center border border-[#222]">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-[#666] hover:text-[#D4AF37] transition-colors"><Minus size={16}/></button>
                  <span className="w-12 text-center text-white font-heading font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-[#666] hover:text-[#D4AF37] transition-colors"><Plus size={16}/></button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 space-y-4">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#D4AF37] hover:bg-[#E8C84A] text-black font-heading font-bold py-5 text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  <ShoppingCart size={18} />
                  Adicionar ao Carrinho
                </button>
                <button className="p-5 border border-[#222] text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                  <Heart size={20} />
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#111]">
                <div className="flex flex-col items-center gap-2 text-center">
                  <ShieldCheck size={16} className="text-[#D4AF37]" />
                  <span className="text-[9px] text-[#555] uppercase tracking-widest">Compra 100% Segura</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Truck size={16} className="text-[#D4AF37]" />
                  <span className="text-[9px] text-[#555] uppercase tracking-widest">Envio Rápido</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <RotateCcw size={16} className="text-[#D4AF37]" />
                  <span className="text-[9px] text-[#555] uppercase tracking-widest">Troca Garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
