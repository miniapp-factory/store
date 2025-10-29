import { Button } from "./button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className={cn("text-5xl font-bold mb-4")}>Farcaster Mini App Store</h1>
      <p className={cn("text-xl text-muted-foreground mb-8")}>
        Discover and purchase Farcaster mini apps to enhance your Farcaster experience.
      </p>
      <Button variant="primary" size="lg">
        Browse Apps
      </Button>
    </section>
  );
}
