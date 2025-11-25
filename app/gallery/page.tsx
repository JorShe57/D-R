"use client";

import { useState, useMemo } from "react";
import { galleryData, galleryCategories, GalleryCategory } from "@/data/gallery";
import GalleryFilters from "@/components/GalleryFilters";
import GalleryGrid from "@/components/GalleryGrid";
import GalleryModal from "@/components/GalleryModal";
import PageCTA from "@/components/PageCTA";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return galleryData;
    }
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Calculate project counts per category
  const projectCounts = useMemo(() => {
    const counts: Record<GalleryCategory, number> = {
      all: galleryData.length,
      driveways: 0,
      patios: 0,
      walkways: 0,
      steps: 0,
      commercial: 0,
      repair: 0,
    };

    galleryData.forEach((item) => {
      counts[item.category]++;
    });

    return counts;
  }, []);

  // Modal handlers
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-24 md:pb-12 bg-gradient-to-b from-brand-slate/5 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-slate mb-4 md:mb-6">
              Our Gallery
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Browse through our portfolio of completed concrete projects.
              From driveways to patios, see the quality craftsmanship that
              sets D&R Concrete apart.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        className="py-8 md:py-12"
        aria-label="Project gallery"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <GalleryFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            projectCounts={projectCounts}
          />

          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="font-body text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-brand-slate">
                {filteredItems.length}
              </span>{" "}
              {filteredItems.length === 1 ? "project" : "projects"}
              {activeCategory !== "all" && (
                <>
                  {" "}
                  in{" "}
                  <span className="font-medium text-brand-slate">
                    {galleryCategories.find((c) => c.id === activeCategory)?.label}
                  </span>
                </>
              )}
            </p>

            {activeCategory !== "all" && (
              <button
                onClick={() => setActiveCategory("all")}
                className="font-body text-sm text-brand-slate hover:text-brand-yellow transition-colors underline underline-offset-2"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Grid */}
          <GalleryGrid items={filteredItems} onImageClick={openModal} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageCTA
            title="See Something You Like?"
            description="Let's talk about your project. Whether it's a new driveway, patio, or repair work, we're here to bring your vision to life with quality craftsmanship."
            buttonText="Get a Free Estimate"
            buttonHref="/contact"
            showReassurance={true}
          />
        </div>
      </section>

      {/* Modal */}
      <GalleryModal
        items={filteredItems}
        currentIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={closeModal}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </main>
  );
}
