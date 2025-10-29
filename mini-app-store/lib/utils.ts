import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | false | null)[]) {
  return twMerge(inputs.filter(Boolean).join(" "));
}

export function formatPrice(value: number) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
