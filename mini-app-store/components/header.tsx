"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { title } from "@/lib/metadata";
import { useCart } from "./context/cart-context";
import { CartSidebar } from "./ui/cart-sidebar";

const pages = [
  {
    label: (
      <div className="flex place-items-center gap-2">
        <img
          className="size-[40px]"
          src="/icon.png"
          alt="icon"
          width={40}
          height={40}
        />
        <span className="text-xl">{title}</span>
      </div>
    ),
    href: "/",
  },
];

export function Header() {
  const { items, removeItem } = useCart();

  return (
    <>
      <header className="sticky flex place-items-center gap-4 border-b p-4 max-md:hidden">
        {pages.map((page, i) => (
          <Link key={i} href={page.href}>
            {page.label}
          </Link>
        ))}
        <CartSidebar cartItems={items} onRemove={removeItem} />
      </header>

      <header className="sticky flex place-content-between border-b p-4 md:hidden">
        <Link href="/">{pages.find((p) => p.href === "/")?.label}</Link>

        {pages.length > 1 && (
          <Drawer>
            <DrawerTrigger>
              <Menu />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="hidden">
                <DrawerTitle>Navigation Menu</DrawerTitle>
                <DrawerDescription>Navigate to other pages</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <div className="flex flex-col place-content-center gap-4">
                  {pages
                    .map((p) =>
                      p.href === "/"
                        ? { ...p, label: <span className="text-lg">Home</span> }
                        : p
                    )
                    .map((p, i) => (
                      <DrawerClose key={i}>
                        <Link href={p.href}>{p.label}</Link>
                      </DrawerClose>
                    ))}
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}

        <CartSidebar cartItems={items} onRemove={removeItem} />
      </header>
    </>
  );
}
