// ============================================================
// 01FutStore — CartDrawer Component (CORRIGIDO)
// Carrinho lateral com checkout via WhatsApp
// ============================================================

import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/products';
import { toast } from 'sonner';

interface CartDrawerProps {
  onClose: () => void;
}

const WHATSAPP_NUMBER = '5511997224158'; // Seu número

export default function CartDrawer({ onClose }: CartDrawerProps) {
  const { items, totalPrice, removeItem, updateQuantity, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Carrinho vazio', {
        description: 'Adicione produtos antes de finalizar o pedido.',
        style: {
          background: '#111',
          border: '1px solid #D4AF37',
          color: '#fff',
        },
      });
      return;
    }

    // Montar mensagem
    let message = 'Olá, gostaria de fazer o seguinte pedido:\n\n';

    items.forEach((item) => {
      const personalizationText = item.personalization
        ? ` (${item.personalization.name} #${item.personalization.number})`
        : '';
      const itemPrice = item.product.price * item.quantity;
      const personalizationPrice = item.personalization ? 20 * item.quantity : 0;
      const totalItemPrice = itemPrice + personalizationPrice;

      message += `🟡 ${item.product.name} (Tamanho ${item.size})${personalizationText}\n`;
      message += `   Quantidade: ${item.quantity}x\n`;
      message += `   Preço: ${formatPrice(totalItemPrice)}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 TOTAL: ${formatPrice(totalPrice)}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `Aguardo informações para pagamento.`;

    // Codificar e redirecionar
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();

    toast.success('Pedido enviado!', {
      description: 'Você será redirecionado para o WhatsApp.',
      style: {
        background: '#111',
        border: '1px solid #D4AF37',
        color: '#fff',
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="flex-1 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="w-full sm:w-96 bg-[#111111] border-l border-[#333333] flex flex-col max-h-screen overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-[#333333]">
          <h2 className="text-xl md:text-2xl font-bold text-white">Carrinho</h2>
          <button
            onClick={onClose}
            className="text-[#999999] hover:text-[#D4AF37] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-[#666666] text-sm md:text-base">Seu carrinho está vazio</p>
              <p className="text-[#444444] text-xs md:text-sm mt-2">Adicione produtos para começar</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-[#1A1A1A] rounded p-3 md:p-4 border border-[#333333] hover:border-[#D4AF37] transition-colors"
              >
                {/* Produto Info */}
                <div className="flex gap-3 mb-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm md:text-base line-clamp-2">
                      {item.product.name}
                    </p>
                    <p className="text-[#999999] text-xs md:text-sm">
                      Tamanho: <span className="text-[#D4AF37]">{item.size}</span>
                    </p>
                    {item.personalization && (
                      <p className="text-[#999999] text-xs md:text-sm">
                        Personalização: <span className="text-[#D4AF37]">{item.personalization.name} #{item.personalization.number}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Preço */}
                <div className="mb-3 pb-3 border-b border-[#333333]">
                  <p className="text-[#D4AF37] font-bold text-sm md:text-base">
                    {formatPrice(
                      (item.product.price + (item.personalization ? 20 : 0)) * item.quantity
                    )}
                  </p>
                  <p className="text-[#666666] text-xs">
                    {formatPrice(item.product.price + (item.personalization ? 20 : 0))} x {item.quantity}
                  </p>
                </div>

                {/* Quantidade */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-[#0a0a0a] border border-[#333333] rounded hover:border-[#D4AF37] text-[#D4AF37] transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-white font-semibold w-6 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-[#0a0a0a] border border-[#333333] rounded hover:border-[#D4AF37] text-[#D4AF37] transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[#666666] hover:text-[#FF6B6B] transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#333333] p-4 md:p-6 space-y-4">
            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="text-[#999999] font-semibold">Total:</span>
              <span className="text-[#D4AF37] font-bold text-lg md:text-2xl">
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* Botões */}
            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                className="w-full bg-[#D4AF37] hover:bg-[#E8C84A] text-black font-bold py-3 rounded transition-colors uppercase tracking-wider text-sm md:text-base"
              >
                Finalizar Pedido
              </button>
              <button
                onClick={() => clearCart()}
                className="w-full bg-[#1A1A1A] hover:bg-[#222222] text-[#D4AF37] font-semibold py-2 rounded transition-colors uppercase tracking-wider text-sm"
              >
                Limpar Carrinho
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
