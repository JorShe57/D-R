"use client";

import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const PHONE_NUMBER = "+12168016798";
const PHONE_DISPLAY = "(216) 801-6798";
const EMAIL = "Donayjoseph@gmail.com";
const SERVICE_AREA = "Northeast Ohio";
const MAPS_URL = "https://www.google.com/maps/search/concrete+contractor+northeast+ohio";

export default function ContactDetails() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h2 className="font-heading text-2xl font-bold text-brand-slate mb-6">
        Get in Touch
      </h2>

      <div className="space-y-5">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <div 
            className="flex-shrink-0 w-12 h-12 bg-brand-slate rounded-full 
                       flex items-center justify-center"
            aria-hidden="true"
          >
            <Phone className="text-brand-yellow w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-brand-slate text-sm uppercase tracking-wide mb-1">
              Phone
            </h3>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="font-body text-gray-700 hover:text-brand-slate transition-colors 
                         text-lg font-medium block"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div 
            className="flex-shrink-0 w-12 h-12 bg-brand-slate rounded-full 
                       flex items-center justify-center"
            aria-hidden="true"
          >
            <Mail className="text-brand-yellow w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-brand-slate text-sm uppercase tracking-wide mb-1">
              Email
            </h3>
            <a
              href={`mailto:${EMAIL}`}
              className="font-body text-gray-700 hover:text-brand-slate transition-colors 
                         text-lg font-medium break-all"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Service Area */}
        <div className="flex items-start gap-4">
          <div 
            className="flex-shrink-0 w-12 h-12 bg-brand-slate rounded-full 
                       flex items-center justify-center"
            aria-hidden="true"
          >
            <MapPin className="text-brand-yellow w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-brand-slate text-sm uppercase tracking-wide mb-1">
              Service Area
            </h3>
            <p className="font-body text-gray-700 text-lg font-medium">
              {SERVICE_AREA}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons - Desktop */}
      <div className="hidden md:flex flex-col gap-3 mt-8 pt-6 border-t border-gray-100">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center justify-center gap-2 px-6 py-3 
                     bg-brand-slate text-white rounded-lg font-heading font-bold
                     hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span>Call Now</span>
        </a>
        
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center justify-center gap-2 px-6 py-3 
                     bg-white text-brand-slate border-2 border-brand-slate rounded-lg 
                     font-heading font-bold hover:bg-brand-slate hover:text-white
                     transition-all duration-200"
        >
          <Mail className="w-5 h-5" aria-hidden="true" />
          <span>Email Us</span>
        </a>
        
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 
                     bg-white text-brand-slate border-2 border-gray-200 rounded-lg 
                     font-heading font-medium hover:border-brand-slate
                     transition-all duration-200"
        >
          <MapPin className="w-5 h-5" aria-hidden="true" />
          <span>Get Directions</span>
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

