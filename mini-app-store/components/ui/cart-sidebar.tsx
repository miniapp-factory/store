import { Button } from "./button";
import { cn } from "@/lib/utils";

export function CartSidebar({
  cartItems,
  onRemove,
}: {
  cartItems: any[];
  onRemove: (id: string) => void;
}) {
  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        </svg>
        <span className="absolute -top-2 -right-2 rounded-full bg-red-500 text-xs text-white px-1">
          {cartItems.length}
        </span>
      </Button>

      <div className="absolute right-0 mt-2 w-64 rounded-md bg-white shadow-lg p-4">
        {cartItems.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemove(item.id)}
                >
                  ✕
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
