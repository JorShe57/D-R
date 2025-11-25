"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-slate shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-heading text-2xl font-bold text-white">
              D&R Concrete
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-brand-yellow transition-colors font-body"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-brand-yellow transition-colors font-body"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-brand-yellow transition-colors font-body"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-brand-yellow transition-colors font-body"
            >
              Contact
            </Link>
            <a
              href="tel:2168016798"
              className="bg-brand-yellow text-brand-slate px-6 py-2 rounded-md font-heading font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-brand-yellow transition-colors font-body"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-brand-yellow transition-colors font-body"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block text-white hover:text-brand-yellow transition-colors font-body"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-brand-yellow transition-colors font-body"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:2168016798"
              className="block bg-brand-yellow text-brand-slate px-6 py-2 rounded-md font-heading font-bold hover:bg-yellow-400 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} className="inline mr-2" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}



