import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary" | "ghost";
  size?: "sm" | "lg" | "icon";
}

export function Button({
  variant = "primary",
  size = "sm",
  className,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "bg-transparent text-primary hover:bg-accent hover:text-accent-foreground",
  };
  const sizes = {
    sm: "h-9 px-3 text-sm",
    lg: "h-10 px-5 text-base",
    icon: "h-10 w-10",
  };
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
