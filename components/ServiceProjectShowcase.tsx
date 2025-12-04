"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";

type Category = {
  id: string;
  label: string;
  serviceTitle: string;
  serviceBlurb: string;
  cta: string;
  projects: string[];
};

const CATEGORIES: Category[] = [
  {
    id: "concrete-install",
    label: "Concrete Installation",
    serviceTitle: "Concrete Installation",
    serviceBlurb:
      "Expert installation of driveways, patios, walkways, and foundations using high-grade materials for lasting durability.",
    cta: "Get a concrete quote",
    projects: [
      "/images/driveways-1.jpg",
      "/images/patios-1.jpg",
      "/images/patios-2.jpg",
      "/images/walkways-1.jpg",
      "/images/walkways-2.jpg",
    ],
  },
  {
    id: "restoration",
    label: "Restoration & Repair",
    serviceTitle: "Restoration & Repair",
    serviceBlurb:
      "Complete restoration services including resealing, levelling, and crack repair to bring your concrete surfaces back to life.",
    cta: "Request an inspection",
    projects: [
      "/images/repair1.png",
      "/images/repair2.png",
      "/images/repair3.png",
      "/images/repair4.png",
    ],
  },
  {
    id: "snow",
    label: "Snow Management",
    serviceTitle: "Snow Management",
    serviceBlurb:
      "Reliable commercial and residential snow plowing and ice management to keep your property safe and accessible.",
    cta: "Book snow service",
    projects: [
      "/images/snow1.png",
      "/images/snow2.png",
      "/images/snow3.png",
      "/images/snow4.png",
    ],
  },
];

export default function ServiceProjectShowcase() {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <section className="bg-gray-600 py-12 md:py-16 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <header className="text-center mb-8 md:mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-200 font-body">
            Services &amp; Projects
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white font-heading leading-tight">
            See what we do — and how it looks when it&apos;s done
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-100 max-w-2xl mx-auto font-body px-2">
            Choose a service to view details and real projects we&apos;ve
            completed for homeowners and businesses like you.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveId(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition font-heading
                ${
                  activeId === cat.id
                    ? "bg-brand-yellow text-brand-slate border-brand-yellow shadow"
                    : "border-gray-400 text-gray-100 hover:border-brand-yellow hover:text-white"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
          {/* Service card */}
          <div className="bg-brand-slate/90 rounded-2xl p-6 shadow-lg border border-gray-500">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow mb-2 font-body">
              Service
            </p>
            <h3 className="text-2xl font-semibold text-white mb-3 font-heading">
              {active.serviceTitle}
            </h3>
            <p className="text-gray-100 text-sm mb-6 font-body">
              {active.serviceBlurb}
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold text-brand-slate shadow hover:bg-yellow-400 transition font-heading overflow-hidden"
            >
              <BorderBeam
                size={80}
                duration={4}
                colorFrom="#FFD700"
                colorTo="#FFFFFF"
                borderWidth={2}
                className="rounded-full"
              />
              <span className="relative z-10">{active.cta}</span>
            </Link>
            <p className="mt-4 text-xs text-gray-300 font-body">
              Free estimates • Licensed &amp; insured • Residential &amp;
              commercial
            </p>
          </div>

          {/* Project images */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-200 mb-3 font-body">
              Recent {active.label.toLowerCase()} projects
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {active.projects.map((src, idx) => (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-xl bg-gray-700 aspect-square group"
                >
                  <img
                    src={src}
                    alt={`${active.label} project ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/gallery"
              className="mt-4 inline-block text-sm font-medium text-gray-100 underline-offset-4 hover:underline font-body"
            >
              View full gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


