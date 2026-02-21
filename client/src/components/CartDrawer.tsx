// ============================================================
// 01FutStore — CartDrawer Component
// Design: Luxury Brutalism — slide-in drawer, gold accents
// Checkout: WhatsApp with formatted message
// ============================================================

import { useEffect, useRef } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/products';

const WHATSAPP_NUMBER = '5511997224158'; // +55 11 99722-4158

function generateWhatsAppMessage(items: ReturnType<typeof useCart>['items'], total: number): string {
  const lines = items.map(item => {
    const name = item.product.name;
    const size = item.size;
    const qty = item.quantity;
    const price = formatPrice(item.product.price * qty);
    return `• ${name} (Tamanho ${size}) — ${qty}x — ${price}`;
  });

  const message = [
    '🛒 *Pedido — 01FutStore*',
    '',
    ...lines,
    '',
    `━━━━━━━━━━━━━━━━━━━━`,
    `💰 *Total: ${formatPrice(total)}*`,
    '',
    'Aguardo informações para pagamento. Obrigado! 🙏',
  ].join('\n');

  return message;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeCart();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, closeCart]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleCheckout = () => {
    if (items.length === 0) return;
    const message = generateWhatsAppMessage(items, totalPrice);
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 cart-overlay transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de compras"
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 bg-[#0a0a0a] border-l border-[#D4AF37]/20 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-[#D4AF37]" />
            <div>
              <h2 className="text-white font-heading font-bold text-lg tracking-wide">
                Carrinho
              </h2>
              <p className="text-[#666] text-xs font-body">
                {totalItems} {totalItems === 1 ? 'item' : 'itens'}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-[#666] hover:text-[#D4AF37] transition-colors"
            aria-label="Fechar carrinho"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
              <ShoppingBag size={48} className="text-[#2a2a2a]" />
              <div className="text-center">
                <p className="text-[#555] font-heading font-semibold text-lg tracking-wide">
                  Carrinho vazio
                </p>
                <p className="text-[#444] font-body text-sm mt-1">
                  Adicione camisas para continuar
                </p>
              </div>
              <button
                onClick={closeCart}
                className="btn-gold px-6 py-3 text-sm tracking-widest uppercase font-heading font-bold mt-2"
              >
                Ver Produtos
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#1a1a1a]">
              {items.map(item => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="cart-item px-6 py-4"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-16 h-20 flex-shrink-0 bg-[#111] overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-[#666] text-[10px] font-body tracking-widest uppercase mb-0.5">
                            {item.product.team}
                          </p>
                          <p className="text-white font-heading font-semibold text-sm leading-tight line-clamp-2">
                            {item.product.name}
                          </p>
                          <p className="text-[#D4AF37] text-xs font-body mt-1">
                            Tamanho: <span className="font-semibold">{item.size}</span>
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.size)}
                          className="p-1 text-[#444] hover:text-red-500 transition-colors flex-shrink-0"
                          aria-label="Remover item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      {/* Quantity + Price */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                            className="qty-btn"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-white font-heading font-semibold text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                            className="qty-btn"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span
                          className="text-[#D4AF37] font-display text-base"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer — Total + Checkout */}
        {items.length > 0 && (
          <div className="border-t border-[#1a1a1a] px-6 py-6 space-y-4 bg-[#0a0a0a]">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-[#666] font-body text-sm tracking-wide">Subtotal</span>
              <span className="text-[#999] font-body text-sm">{formatPrice(totalPrice)}</span>
            </div>

            {/* Gold divider */}
            <div className="gold-line" />

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-white font-heading font-bold text-base tracking-wide uppercase">
                Total
              </span>
              <span
                className="text-[#D4AF37] text-2xl font-display"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-heading font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Finalizar pelo WhatsApp
            </button>

            <p className="text-[#444] text-[10px] font-body text-center tracking-wide">
              Você será redirecionado ao WhatsApp com seu pedido
            </p>
          </div>
        )}
      </div>
    </>
  );
}
