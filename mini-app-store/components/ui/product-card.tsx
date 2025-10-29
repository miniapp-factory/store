import { Card, CardHeader, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { PriceTag } from "./price-tag";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (product: Product) => void;
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-4">
        <h3 className={cn("text-lg font-semibold mb-2")}>{product.name}</h3>
        <p className={cn("text-sm text-muted-foreground flex-grow")}>{product.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 gap-2">
        <PriceTag price={product.price} />
        <Button variant="outline" size="sm" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
