import { Button } from "@/components/ui/button";

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
}: {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <section className="text-center py-12">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.location.href = ctaHref;
          }
        }}
      >
        {ctaText}
      </Button>
    </section>
  );
}
