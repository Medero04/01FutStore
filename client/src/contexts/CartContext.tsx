// ============================================================
// 01FutStore — CartContext (CORRIGIDO)
// Gerencia carrinho com suporte a personalização
// ============================================================

import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Product } from '@/lib/products';

export interface CartItem {
  id: string;
  product: Product;
  size: string;
  quantity: number;
  personalization?: {
    name: string;
    number: string;
  };
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, size: string, personalization?: { name: string; number: string }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Carregar do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Erro ao carregar carrinho:', e);
      }
    }
  }, []);

  // Salvar no localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (
    product: Product,
    size: string,
    personalization?: { name: string; number: string }
  ) => {
    const itemId = `${product.id}-${size}-${personalization?.name || ''}-${personalization?.number || ''}`;
    
    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [
        ...prev,
        {
          id: itemId,
          product,
          size,
          quantity: 1,
          personalization,
        },
      ];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce((sum, item) => {
    let itemPrice = item.product.price * item.quantity;
    if (item.personalization) {
      itemPrice += 20 * item.quantity; // R$ 20 por personalização
    }
    return sum + itemPrice;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }
  return context;
}
