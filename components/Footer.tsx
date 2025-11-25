import Link from "next/link";
import { Mail, Phone, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 font-body">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-brand-yellow" />
                <a
                  href="mailto:Donayjoseph@gmail.com"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Donayjoseph@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-brand-yellow" />
                <a
                  href="tel:2168016798"
                  className="hover:text-brand-yellow transition-colors"
                >
                  (216) 801-6798
                </a>
              </li>
            </ul>
          </div>

          {/* Badge */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield size={24} className="text-brand-yellow" />
              <h3 className="font-heading text-xl font-bold">
                Licensed & Insured
              </h3>
            </div>
            <p className="font-body text-gray-300">
              Serving Northeast Ohio with professional, reliable concrete and
              restoration services.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center font-body text-gray-300">
          <p>&copy; {new Date().getFullYear()} D&R Concrete and Restoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}




