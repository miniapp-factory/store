import { Button } from "./button";
import { cn } from "@/lib/utils";

export function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <Button variant="primary" size="lg" className={cn("px-8 py-3")}>
      {children}
    </Button>
  );
}
