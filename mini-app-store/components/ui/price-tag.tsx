import { cn } from "@/lib/utils";

export function PriceTag({ price }: { price: number }) {
  return (
    <span className={cn("text-lg font-semibold text-primary")}>
      {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
    </span>
  );
}
