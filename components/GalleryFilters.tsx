"use client";

import { GalleryCategory, galleryCategories } from "@/data/gallery";

interface GalleryFiltersProps {
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
  projectCounts?: Record<GalleryCategory, number>;
}

export default function GalleryFilters({
  activeCategory,
  onCategoryChange,
  projectCounts,
}: GalleryFiltersProps) {
  return (
    <nav
      className="mb-8 md:mb-12"
      aria-label="Gallery filters"
    >
      {/* Mobile: Horizontal scrollable pills */}
      <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex gap-3 pb-2 min-w-max">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                flex-shrink-0 px-5 py-3 rounded-full font-heading text-sm font-medium
                transition-all duration-200 whitespace-nowrap
                focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2
                ${
                  activeCategory === category.id
                    ? "bg-brand-slate text-white shadow-lg"
                    : "bg-white text-brand-slate border border-gray-200 hover:border-brand-slate hover:bg-gray-50"
                }
              `}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
              {projectCounts && projectCounts[category.id] > 0 && (
                <span
                  className={`ml-2 text-xs ${
                    activeCategory === category.id
                      ? "text-brand-yellow"
                      : "text-gray-400"
                  }`}
                >
                  ({projectCounts[category.id]})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: Centered row of pills */}
      <div className="hidden md:flex justify-center flex-wrap gap-3">
        {galleryCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              px-6 py-3 rounded-full font-heading text-sm font-medium
              transition-all duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2
              ${
                activeCategory === category.id
                  ? "bg-brand-slate text-white shadow-lg scale-105"
                  : "bg-white text-brand-slate border border-gray-200 hover:border-brand-slate hover:bg-gray-50 hover:shadow-md"
              }
            `}
            aria-pressed={activeCategory === category.id}
          >
            {category.label}
            {projectCounts && projectCounts[category.id] > 0 && (
              <span
                className={`ml-2 text-xs ${
                  activeCategory === category.id
                    ? "text-brand-yellow"
                    : "text-gray-400"
                }`}
              >
                ({projectCounts[category.id]})
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}

