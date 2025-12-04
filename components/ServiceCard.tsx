"use client";

import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  featured?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  imageSrc,
  href = "/services",
  featured = false,
}: ServiceCardProps) {
  const CardWrapper = featured ? NeonGradientCard : MagicCard;
  
  return (
    <CardWrapper
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      gradientFrom="#FFD700"
      gradientTo="#FFA500"
      neonColors={featured ? { firstColor: "#FFD700", secondColor: "#FFA500" } : undefined}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-brand-slate/20 group-hover:bg-transparent transition-colors z-10" />
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <BorderBeam
          size={80}
          duration={5}
          colorFrom="#FFD700"
          colorTo="#FFA500"
          borderWidth={2}
          className="rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="relative p-6 pt-12">
        <div className="absolute -top-8 left-6 flex items-center justify-center w-16 h-16 bg-brand-yellow rounded-full shadow-lg z-20 border-4 border-white">
          <Icon className="text-brand-slate" size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-brand-slate mb-3">
          {title}
        </h3>
        <p className="font-body text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="relative inline-flex items-center text-brand-slate font-body font-bold group-hover:text-brand-yellow transition-colors uppercase tracking-wide text-sm overflow-hidden px-2 py-1 rounded"
        >
          <BorderBeam
            size={60}
            duration={3}
            colorFrom="#FFD700"
            colorTo="#FFA500"
            borderWidth={1}
            className="rounded opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <span className="relative z-10">Learn More</span>
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform relative z-10">
            →
          </span>
        </Link>
      </div>
    </CardWrapper>
  );
}
