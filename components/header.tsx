"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "/" },
    { name: "Benefits", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div className="sticky top-0 z-[9999] flex justify-center w-full bg-transparent pointer-events-none">
      <motion.header
        animate={{
          width: scrolled ? "1000px" : "100%",
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.85)" // floating pill
            : "rgba(175,216,247,1)", // hero background at top
          paddingTop: scrolled ? "0.7rem" : "1.2rem",
          paddingBottom: scrolled ? "0.7rem" : "1.2rem",
          borderRadius: scrolled ? "9999px" : "0px",
          marginTop: scrolled ? "0.5rem" : "0rem",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
          border: scrolled
            ? "1px solid rgba(230,230,230,0.8)"
            : "1px solid transparent",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex items-center justify-between px-6 pointer-events-auto"
      >
        {/* Logo */}
        <span className="text-foreground text-2xl font-black">Dreelio</span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium px-2 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/signup">
            <Button className="bg-[#1d1d1f] text-white px-6 py-2 rounded-full font-semibold shadow-md">
              Try Dreelio free
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle className="text-left text-xl font-bold">
                Navigation
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-3 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground text-base py-2"
                >
                  {item.name}
                </Link>
              ))}

              <Link href="/signup" className="w-full mt-4">
                <Button className="w-full bg-secondary px-6 py-3 rounded-full font-semibold">
                  Try Dreelio free
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </motion.header>
    </div>
  );
}
