import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/components/ui/product-card";

interface CartContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  const addItem = (product: Product) => setItems((prev) => [...prev, product]);
  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
