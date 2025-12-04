"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BorderBeam } from "@/components/ui/border-beam";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <ScrollProgress />
      <nav className="sticky top-0 z-50 bg-brand-slate shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <AnimatedGradientText
                className="font-heading text-2xl font-bold"
                colorFrom="#FFD700"
                colorTo="#FFA500"
              >
                D&R Concrete
              </AnimatedGradientText>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-white hover:text-brand-yellow transition-colors font-body px-3 py-2 rounded-md"
                  >
                    {link.label}
                    {isActive && (
                      <BorderBeam
                        size={100}
                        duration={3}
                        colorFrom="#FFD700"
                        colorTo="#FFA500"
                        borderWidth={2}
                        className="rounded-md"
                      />
                    )}
                  </Link>
                );
              })}
              <a
                href="tel:2168016798"
                className="relative bg-brand-yellow text-brand-slate px-6 py-2 rounded-md font-heading font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2 overflow-hidden"
              >
                <BorderBeam
                  size={80}
                  duration={4}
                  colorFrom="#FFD700"
                  colorTo="#FFFFFF"
                  borderWidth={2}
                  className="rounded-md"
                />
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 relative"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-4 animate-in slide-in-from-top-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-white hover:text-brand-yellow transition-colors font-body px-3 py-2 rounded-md relative ${
                      isActive ? "bg-brand-slate/50" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    {isActive && (
                      <BorderBeam
                        size={120}
                        duration={3}
                        colorFrom="#FFD700"
                        colorTo="#FFA500"
                        borderWidth={2}
                        className="rounded-md"
                      />
                    )}
                  </Link>
                );
              })}
              <a
                href="tel:2168016798"
                className="block bg-brand-yellow text-brand-slate px-6 py-2 rounded-md font-heading font-bold hover:bg-yellow-400 transition-colors text-center relative overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                <BorderBeam
                  size={100}
                  duration={4}
                  colorFrom="#FFD700"
                  colorTo="#FFFFFF"
                  borderWidth={2}
                  className="rounded-md"
                />
                <Phone size={18} className="inline mr-2" />
                Call Now
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}



