"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const PHONE_NUMBER = "+12168016798";
const EMAIL = "Donayjoseph@gmail.com";
const MAPS_URL = "https://www.google.com/maps/search/concrete+contractor+northeast+ohio";

/**
 * Mobile-optimized quick action bar for contact page
 * Shows Call, Email, and Directions buttons with large tap targets
 */
export default function ContactQuickActions() {
  return (
    <div className="md:hidden">
      {/* Sticky bottom bar on mobile */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 
                   shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 safe-area-pb"
      >
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          {/* Call Button */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex flex-col items-center justify-center py-4 px-2 
                       text-brand-slate hover:bg-gray-50 active:bg-gray-100
                       transition-colors duration-150 min-h-[72px]"
            aria-label="Call us at (216) 801-6798"
          >
            <div 
              className="w-10 h-10 bg-brand-slate rounded-full flex items-center justify-center mb-1"
              aria-hidden="true"
            >
              <Phone className="w-5 h-5 text-brand-yellow" />
            </div>
            <span className="text-xs font-heading font-semibold text-brand-slate">
              Call
            </span>
          </a>

          {/* Email Button */}
          <a
            href={`mailto:${EMAIL}`}
            className="flex flex-col items-center justify-center py-4 px-2 
                       text-brand-slate hover:bg-gray-50 active:bg-gray-100
                       transition-colors duration-150 min-h-[72px]"
            aria-label="Email us at Donayjoseph@gmail.com"
          >
            <div 
              className="w-10 h-10 bg-brand-slate rounded-full flex items-center justify-center mb-1"
              aria-hidden="true"
            >
              <Mail className="w-5 h-5 text-brand-yellow" />
            </div>
            <span className="text-xs font-heading font-semibold text-brand-slate">
              Email
            </span>
          </a>

          {/* Directions Button */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-4 px-2 
                       text-brand-slate hover:bg-gray-50 active:bg-gray-100
                       transition-colors duration-150 min-h-[72px]"
            aria-label="Open directions to Northeast Ohio service area"
          >
            <div 
              className="w-10 h-10 bg-brand-slate rounded-full flex items-center justify-center mb-1"
              aria-hidden="true"
            >
              <MapPin className="w-5 h-5 text-brand-yellow" />
            </div>
            <span className="text-xs font-heading font-semibold text-brand-slate">
              Directions
            </span>
          </a>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed bar */}
      <div className="h-20" aria-hidden="true"></div>
    </div>
  );
}


