'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { PRODUCTS, type Product } from '../_data';

export type CartLine = { key: string; product: Product; size: string; qty: number };

type CartState = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (productId: string, size: string) => void;
  change: (key: string, delta: number) => void;
};

const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);

  const add = useCallback((productId: string, size: string) => {
    const key = `${productId}:${size}`;
    setItems((current) => ({ ...current, [key]: (current[key] ?? 0) + 1 }));
    setOpen(true);
  }, []);

  const change = useCallback((key: string, delta: number) => {
    setItems((current) => {
      const qty = Math.max(0, (current[key] ?? 0) + delta);
      const next = { ...current, [key]: qty };
      if (qty === 0) delete next[key];
      return next;
    });
  }, []);

  const value = useMemo(() => {
    const lines = Object.entries(items).flatMap(([key, qty]) => {
      const [id, size] = key.split(':');
      const product = PRODUCTS.find((item) => item.id === id);
      return product ? [{ key, product, size, qty }] : [];
    });
    return {
      lines,
      count: lines.reduce((sum, line) => sum + line.qty, 0),
      subtotal: lines.reduce((sum, line) => sum + line.qty * line.product.price, 0),
      open,
      setOpen,
      add,
      change,
    };
  }, [items, open, add, change]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error('useCart precisa do CartProvider');
  return cart;
}
