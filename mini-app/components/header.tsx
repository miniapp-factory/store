"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { CartSidebar } from "@/components/ui/cart-sidebar";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 border-b">
      <Link href="/" className="text-2xl font-bold">
        Mini App Store
      </Link>
      <nav className="hidden md:flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/store">Store</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Menu className="h-6 w-6 md:hidden" />
        <CartSidebar />
      </div>
    </header>
  );
}
