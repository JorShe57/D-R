"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { GalleryItem } from "@/data/gallery";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { Lens } from "@/components/ui/lens";

interface GalleryModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}: GalleryModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentItem = items[currentIndex];

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "Tab":
          // Simple focus trap
          e.preventDefault();
          closeButtonRef.current?.focus();
          break;
      }
    },
    [onClose, onPrevious, onNext]
  );

  // Setup keyboard listeners and focus trap
  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    // Add keyboard listener
    document.addEventListener("keydown", handleKeyDown);

    // Focus the close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      >
        {/* Particles Background */}
        <Particles
          quantity={20}
          className="opacity-20"
          color="#FFD700"
          size={0.4}
        />
      </div>

      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 
          text-white transition-colors duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        aria-label="Close gallery modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation - Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 
          text-white transition-colors duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow
          disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Navigation - Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 
          text-white transition-colors duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow
          disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main content */}
      <div
        className="relative z-10 w-full max-w-5xl mx-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image container */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden shadow-2xl bg-black/50">
          <BorderBeam
            size={120}
            duration={6}
            colorFrom="#FFD700"
            colorTo="#FFA500"
            borderWidth={3}
            className="rounded-xl"
          />
          <Lens zoomFactor={1.3} lensSize={200} lensColor="rgba(0,0,0,0.4)">
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              priority
            />
          </Lens>
        </div>

        {/* Caption */}
        <div className="mt-4 sm:mt-6 text-center px-4">
          {/* Category badge */}
          <span className="inline-block px-3 py-1 mb-2 text-xs font-heading font-medium uppercase tracking-wider bg-brand-yellow text-brand-slate rounded-full">
            {currentItem.category}
          </span>

          <h2
            id="modal-title"
            className="font-heading text-xl sm:text-2xl font-bold text-white"
          >
            {currentItem.title}
          </h2>

          {currentItem.location && (
            <div className="flex items-center justify-center gap-1 mt-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="font-body text-sm text-gray-400">
                {currentItem.location}
              </span>
            </div>
          )}

          <p id="modal-description" className="sr-only">
            {currentItem.alt}
          </p>
        </div>

        {/* Image counter */}
        <div className="mt-4 flex items-center gap-2">
          <span className="font-body text-sm text-gray-500">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        {/* Dot indicators for small galleries */}
        {items.length <= 10 && (
          <div className="mt-3 flex items-center gap-1.5">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  // Navigate to specific image
                  const diff = index - currentIndex;
                  if (diff > 0) {
                    for (let i = 0; i < diff; i++) onNext();
                  } else {
                    for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-brand-yellow w-4"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Touch hint for mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:hidden">
        <p className="font-body text-xs text-gray-500">
          Swipe or use arrows to navigate
        </p>
      </div>
    </div>
  );
}


