"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Partnership", href: "https://docs.google.com/forms/d/e/1FAIpQLSfxKaZfkIjl5EUZ-Jd8AemZjvPMSgmJXQYXBVXMV4Fti3L3cA/viewform?embedded=true" },
    { name: "Missionary", href: "https://docs.google.com/forms/d/e/1FAIpQLSdjTRAzGdkyGEI7ZhxyajJeNorwfexE2f54JeQAvjsi78NMNQ/viewform?embedded=true" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 h-18 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/JMF_Logo-Green_NoBG.png"
            alt="Logo"
            className="h-20 w-20"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-green-700"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Donate Button */}
        <Button
          variant="default"
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Link href="/donate">Donate Now</Link>
        </Button>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
