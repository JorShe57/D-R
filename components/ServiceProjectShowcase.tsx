"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { TextAnimate } from "@/components/ui/text-animate";
import { Lens } from "@/components/ui/lens";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement | null>(null);
  const serviceCardRef = useRef<HTMLDivElement>(null);

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
          {CATEGORIES.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <button
                key={cat.id}
                ref={isActive ? activeTabRef : null}
                type="button"
                onClick={() => setActiveId(cat.id)}
                className={`relative rounded-full border px-4 py-2 text-sm font-medium transition font-heading overflow-hidden
                  ${
                    isActive
                      ? "bg-brand-yellow text-brand-slate border-brand-yellow shadow"
                      : "border-gray-400 text-gray-100 hover:border-brand-yellow hover:text-white"
                  }`}
              >
                {isActive && (
                  <BorderBeam
                    size={80}
                    duration={3}
                    colorFrom="#FFD700"
                    colorTo="#FFA500"
                    borderWidth={2}
                    className="rounded-full"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div ref={containerRef} className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
          {/* Animated Beam from active tab to service card */}
          {activeTabRef.current && serviceCardRef.current && containerRef.current && (
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={activeTabRef}
              toRef={serviceCardRef}
              curvature={30}
              gradientStartColor="#FFD700"
              gradientStopColor="#FFA500"
              duration={3}
              className="hidden lg:block"
            />
          )}
          {/* Service card */}
          <div ref={serviceCardRef}>
            <MagicCard
              className="bg-brand-slate/90 rounded-2xl p-6 shadow-lg border border-gray-500"
              gradientFrom="#FFD700"
              gradientTo="#FFA500"
              gradientSize={200}
            >
            <BorderBeam
              size={100}
              duration={5}
              colorFrom="#FFD700"
              colorTo="#FFA500"
              borderWidth={2}
              className="rounded-2xl"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow mb-2 font-body relative z-10">
              Service
            </p>
            <h3 className="text-2xl font-semibold text-white mb-3 font-heading relative z-10">
              {active.serviceTitle}
            </h3>
            <TextAnimate
              by="word"
              animation="fadeIn"
              delay={0.1}
              className="text-gray-100 text-sm mb-6 font-body relative z-10"
            >
              {active.serviceBlurb}
            </TextAnimate>
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold text-brand-slate shadow hover:bg-yellow-400 transition font-heading overflow-hidden relative z-10"
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
            <p className="mt-4 text-xs text-gray-300 font-body relative z-10">
              Free estimates • Licensed &amp; insured • Residential &amp;
              commercial
            </p>
          </MagicCard>
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
                  <BorderBeam
                    size={60}
                    duration={4}
                    colorFrom="#FFD700"
                    colorTo="#FFA500"
                    borderWidth={1}
                    className="rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
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


