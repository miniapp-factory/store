import { CartProvider } from "../components/context/cart-context";
import Header from "@/components/header";

export const metadata = {
  title: "Farcaster Mini App Store",
  description: "Browse and buy the best Farcaster mini apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
