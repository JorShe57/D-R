"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Wrench,
  Snowflake,
  Shield,
  Hammer,
  Paintbrush,
  Clock,
  Users,
  Building2,
  CheckCircle2,
  ChevronRight,
  LucideIcon,
} from "lucide-react";

interface ServiceData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: {
    projectTime: string;
    bestFor: string;
    serviceType: string;
  };
  image: string;
}

const services: ServiceData[] = [
  {
    id: "driveways",
    icon: Home,
    title: "Driveways",
    description:
      "Professional driveway installation and repair. We use high-quality materials and expert techniques to ensure your driveway stands the test of time.",
    bullets: {
      projectTime: "2-5 days",
      bestFor: "Curb appeal & functionality",
      serviceType: "Residential & Commercial",
    },
    image: "/images/driveways-1.jpg",
  },
  {
    id: "patios",
    icon: Home,
    title: "Patios",
    description:
      "Create beautiful outdoor living spaces with our custom patio installations. Perfect for entertaining and enjoying your backyard.",
    bullets: {
      projectTime: "3-7 days",
      bestFor: "Outdoor entertainment",
      serviceType: "Residential",
    },
    image: "/images/patios-1.jpg",
  },
  {
    id: "stamped",
    icon: Paintbrush,
    title: "Stamped Concrete",
    description:
      "Add elegance and style to your property with decorative stamped concrete. Multiple patterns and colors available to match your vision.",
    bullets: {
      projectTime: "3-5 days",
      bestFor: "Decorative appeal",
      serviceType: "Residential & Commercial",
    },
    image: "/images/patios-3.jpg",
  },
  {
    id: "sealing",
    icon: Shield,
    title: "Sealing",
    description:
      "Protect your concrete investment with professional sealing services. Extends the life of your surfaces and maintains their appearance.",
    bullets: {
      projectTime: "1-2 days",
      bestFor: "Surface protection",
      serviceType: "Residential & Commercial",
    },
    image: "/images/walkways-1.jpg",
  },
  {
    id: "restoration",
    icon: Wrench,
    title: "Restoration",
    description:
      "Comprehensive restoration services to repair cracks, spalling, and other damage. We bring your concrete back to its original condition.",
    bullets: {
      projectTime: "2-4 days",
      bestFor: "Repair & renewal",
      serviceType: "Residential & Commercial",
    },
    image: "/images/repair1.png",
  },
  {
    id: "snow",
    icon: Snowflake,
    title: "Snow Plowing",
    description:
      "Reliable winter maintenance services. Keep your driveways and parking areas clear and safe throughout the winter season.",
    bullets: {
      projectTime: "On-demand",
      bestFor: "Winter safety",
      serviceType: "Residential & Commercial",
    },
    image: "/images/snow1.png",
  },
];

const trustBadges = [
  { icon: CheckCircle2, label: "Licensed" },
  { icon: Shield, label: "Insured" },
  { icon: Users, label: "Local Experts" },
];

export default function ServiceSelector() {
  const [activeService, setActiveService] = useState<string>("driveways");
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const selectedService = services.find((s) => s.id === activeService)!;
  const Icon = selectedService.icon;

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (activeTabRef.current && tabsRef.current) {
      const container = tabsRef.current;
      const tab = activeTabRef.current;
      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      
      const scrollLeft = tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeService]);

  return (
    <section className="py-12 md:py-20" aria-labelledby="services-heading">
      {/* Trust Badges Row */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 md:mb-14">
        {trustBadges.map((badge, index) => {
          const BadgeIcon = badge.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-brand-slate/5 rounded-full"
            >
              <BadgeIcon className="w-5 h-5 text-brand-yellow" />
              <span className="font-body text-sm font-medium text-brand-slate">
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Tabs / Pills */}
      <div
        ref={tabsRef}
        role="tablist"
        aria-label="Select a service"
        className="flex gap-2 md:gap-3 overflow-x-auto pb-4 mb-8 md:mb-12 scrollbar-hide snap-x snap-mandatory md:justify-center md:flex-wrap"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service) => {
          const TabIcon = service.icon;
          const isActive = activeService === service.id;
          return (
            <button
              key={service.id}
              ref={isActive ? activeTabRef : null}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${service.id}`}
              id={`tab-${service.id}`}
              onClick={() => setActiveService(service.id)}
              className={`
                flex-shrink-0 snap-center flex items-center gap-2 px-4 py-3 md:px-6 md:py-3.5
                rounded-full font-heading text-sm md:text-base font-semibold
                transition-all duration-300 ease-out
                focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2
                ${
                  isActive
                    ? "bg-brand-slate text-white shadow-lg shadow-brand-slate/25 scale-105"
                    : "bg-white text-brand-slate border-2 border-gray-200 hover:border-brand-slate hover:bg-gray-50"
                }
              `}
            >
              <TabIcon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? "text-brand-yellow" : ""}`} />
              <span className="whitespace-nowrap">{service.title}</span>
            </button>
          );
        })}
      </div>

      {/* Service Detail Panel */}
      <div
        id={`panel-${selectedService.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${selectedService.id}`}
        className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] lg:min-h-[500px]">
            <Image
              src={selectedService.image}
              alt={`${selectedService.title} project example`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/10" />
            
            {/* Mobile Overlay Title */}
            <div className="absolute bottom-4 left-4 right-4 md:hidden">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-brand-yellow rounded-full shadow-lg">
                  <Icon className="w-6 h-6 text-brand-slate" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white drop-shadow-lg">
                  {selectedService.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            {/* Desktop Title */}
            <div className="hidden md:flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-brand-slate rounded-2xl shadow-lg">
                <Icon className="w-8 h-8 text-brand-yellow" />
              </div>
              <h3 className="font-heading text-3xl lg:text-4xl font-bold text-brand-slate">
                {selectedService.title}
              </h3>
            </div>

            {/* Description */}
            <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              {selectedService.description}
            </p>

            {/* Bullet Points */}
            <div className="grid gap-3 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-center w-10 h-10 bg-brand-yellow/20 rounded-lg">
                  <Clock className="w-5 h-5 text-brand-slate" />
                </div>
                <div>
                  <span className="font-body text-xs text-gray-500 uppercase tracking-wider">
                    Typical Project Time
                  </span>
                  <p className="font-heading font-semibold text-brand-slate">
                    {selectedService.bullets.projectTime}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-center w-10 h-10 bg-brand-yellow/20 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-brand-slate" />
                </div>
                <div>
                  <span className="font-body text-xs text-gray-500 uppercase tracking-wider">
                    Best For
                  </span>
                  <p className="font-heading font-semibold text-brand-slate">
                    {selectedService.bullets.bestFor}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-center w-10 h-10 bg-brand-yellow/20 rounded-lg">
                  <Building2 className="w-5 h-5 text-brand-slate" />
                </div>
                <div>
                  <span className="font-body text-xs text-gray-500 uppercase tracking-wider">
                    Service Type
                  </span>
                  <p className="font-heading font-semibold text-brand-slate">
                    {selectedService.bullets.serviceType}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-slate px-6 py-4 rounded-xl font-heading font-bold text-base hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
              >
                Get Free Estimate
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-brand-slate px-6 py-4 rounded-xl font-heading font-bold text-base border-2 border-brand-slate hover:bg-brand-slate hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-slate focus-visible:ring-offset-2"
              >
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

