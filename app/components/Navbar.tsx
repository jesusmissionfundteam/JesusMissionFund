"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Partners", href: "/partner" },
  { name: "Missionary", href: "/missionary" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-emerald-700/20 backdrop-blur-md border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/JMF_Logo-Green_NoBG.png"
            alt="Logo"
            width={80}
            height={80}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-medium text-emerald-600 transition-colors hover:text-black"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-md font-medium transition-colors hover:text-black",
                  pathname === link.href
                    ? "text-primary"
                    : "text-emerald-600"
                )}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Donate Button (Desktop) */}
        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-emerald-700/30 backdrop-blur-md px-4 py-4">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm font-medium text-white/80 hover:text-primary"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-white/80"
                )}
              >
                {link.name}
              </Link>
            )
          )}

          <Button
            variant="hero"
            size="sm"
            className="mt-4 w-full"
            asChild
          >
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}