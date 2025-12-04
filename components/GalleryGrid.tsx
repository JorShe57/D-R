"use client";

import Image from "next/image";
import { GalleryItem } from "@/data/gallery";
import { MapPin } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";

interface GalleryGridProps {
  items: GalleryItem[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({ items, onImageClick }: GalleryGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="font-body text-gray-500 text-lg">
          No projects found in this category.
        </p>
        <p className="font-body text-gray-400 text-sm mt-2">
          Try selecting a different category above.
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
      role="list"
      aria-label="Gallery of concrete projects"
    >
      {items.map((item, index) => (
        <article
          key={item.id}
          role="listitem"
          className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-brand-yellow focus-within:ring-offset-2"
          onClick={() => onImageClick(index)}
        >
          <MagicCard
            className="absolute inset-0"
            gradientFrom="#FFD700"
            gradientTo="#FFA500"
            gradientSize={150}
          >
            <BorderBeam
              size={100}
              duration={5}
              colorFrom="#FFD700"
              colorTo="#FFA500"
              borderWidth={2}
              className="rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
            />
            {/* Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />
            </div>

            {/* Gradient overlay - always visible on mobile for tap, hover on desktop */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
              opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Content overlay */}
            <div
              className="absolute inset-x-0 bottom-0 p-3 sm:p-4
              transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0
              transition-transform duration-300"
            >
              {/* Category badge */}
              <span
                className="inline-block px-2 py-1 mb-2 text-xs font-heading font-medium uppercase tracking-wider
                bg-brand-yellow text-brand-slate rounded-md
                opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-75"
              >
                {item.category}
              </span>

              {/* Title */}
              <h3
                className="font-heading text-sm sm:text-base font-bold text-white leading-tight
                opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100"
              >
                {item.title}
              </h3>

              {/* Location */}
              {item.location && (
                <div
                  className="flex items-center gap-1 mt-1
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-150"
                >
                  <MapPin className="w-3 h-3 text-gray-300" />
                  <span className="font-body text-xs text-gray-300">
                    {item.location}
                  </span>
                </div>
              )}
            </div>

            {/* Interactive button for accessibility */}
            <button
              className="absolute inset-0 w-full h-full bg-transparent border-0 cursor-pointer"
              aria-label={`View ${item.title} - ${item.alt}`}
              tabIndex={0}
            />
          </MagicCard>
        </article>
      ))}
    </div>
  );
}


