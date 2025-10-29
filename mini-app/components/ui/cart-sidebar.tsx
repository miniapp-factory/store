import { useCart } from "../context/cart-context";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CartSidebar() {
  const { items, removeItem } = useCart();

  return (
    <div className="relative">
      <Button variant="outline" size="icon" className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13l-1.5-7M7 13h10"
          />
        </svg>
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </Button>
      {items.length > 0 && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg p-4">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
