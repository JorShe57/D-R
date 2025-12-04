"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  image: string;
  title: string;
  location: string;
  type: string;
}

const projects: Project[] = [
  {
    id: "1",
    image: "/images/patios-1.jpg",
    title: "Backyard Patio",
    location: "Cleveland, OH",
    type: "Patio Installation",
  },
  {
    id: "2",
    image: "/images/driveways-1.jpg",
    title: "Modern Driveway",
    location: "Akron, OH",
    type: "Driveway",
  },
  {
    id: "3",
    image: "/images/patios-3.jpg",
    title: "Stamped Patio",
    location: "Mentor, OH",
    type: "Stamped Concrete",
  },
  {
    id: "4",
    image: "/images/walkways-1.jpg",
    title: "Elegant Walkway",
    location: "Parma, OH",
    type: "Walkways",
  },
  {
    id: "5",
    image: "/images/502938383_122215047842170624_1173453232484238679_n.jpg",
    title: "Commercial Entry",
    location: "Westlake, OH",
    type: "Commercial",
  },
  {
    id: "6",
    image: "/images/550456371_122232436436170624_9186343151087704585_n.jpg",
    title: "Outdoor Living Space",
    location: "Solon, OH",
    type: "Patio Installation",
  },
];

export default function ProjectStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        ref.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-20" aria-labelledby="gallery-heading">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
        <div>
          <h2
            id="gallery-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-brand-slate mb-2"
          >
            Our Work in Action
          </h2>
          <p className="font-body text-gray-600 text-base md:text-lg">
            Browse our recent projects across Northeast Ohio
          </p>
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll gallery left"
            className={`
              flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2
              ${
                canScrollLeft
                  ? "border-brand-slate text-brand-slate hover:bg-brand-slate hover:text-white cursor-pointer"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }
            `}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll gallery right"
            className={`
              flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2
              ${
                canScrollRight
                  ? "border-brand-slate text-brand-slate hover:bg-brand-slate hover:text-white cursor-pointer"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }
            `}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Project Cards Carousel */}
      <div className="relative -mx-4 px-4 md:-mx-0 md:px-0">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] snap-start group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.type} in ${project.location}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="inline-block self-start px-3 py-1 bg-brand-yellow text-brand-slate text-xs font-heading font-bold uppercase tracking-wider rounded-full mb-3">
                    {project.type}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-white/80">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-body text-sm">{project.location}</span>
                  </div>
                </div>
                
                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-white rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <ArrowRight className="w-5 h-5 text-brand-slate" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {projects.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* View Full Gallery Button */}
      <div className="mt-8 md:mt-12 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center justify-center gap-2 bg-brand-slate text-white px-8 py-4 rounded-xl font-heading font-bold text-base hover:bg-brand-slate/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-slate focus-visible:ring-offset-2"
        >
          View Full Gallery
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}


