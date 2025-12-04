"use client";

import { MapPin, ExternalLink } from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/search/concrete+contractor+northeast+ohio";
const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762079.5765929466!2d-81.83699895!3d41.39876085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee3686b2d%3A0xed04cb55f7621842!2sCleveland%2C%20OH!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

export default function LocationCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="font-heading text-2xl font-bold text-brand-slate mb-3">
          Find Us
        </h2>
        <p className="font-body text-gray-600 mb-4">
          Proudly serving Northeast Ohio and surrounding communities. From Cleveland to Akron and beyond, 
          we bring quality concrete craftsmanship to your doorstep.
        </p>
        
        {/* Service Area Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-slate/5 rounded-full mb-6">
          <MapPin className="w-4 h-4 text-brand-slate" aria-hidden="true" />
          <span className="font-body text-sm font-medium text-brand-slate">
            Northeast Ohio Service Area
          </span>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative aspect-video bg-gray-100">
        <iframe
          src={MAPS_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="D&R Concrete service area map - Northeast Ohio"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* View on Google Maps Link */}
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 
                     text-brand-slate font-heading font-semibold
                     hover:text-brand-yellow transition-colors duration-200"
        >
          <MapPin className="w-5 h-5" aria-hidden="true" />
          <span>View on Google Maps</span>
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}


