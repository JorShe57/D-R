import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import ServiceProjectShowcase from "@/components/ServiceProjectShowcase";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/556911417_122233854608170624_5924657819992218567_n.jpg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="D&R Concrete and Restoration"
              width={1600}
              height={532}
              className="h-64 md:h-[512px] w-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            <span className="block text-brand-yellow mb-2">Premium Concrete</span>
            <span className="block">Restoration & Design</span>
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-gray-200 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            Transforming properties in Northeast Ohio with expert craftsmanship, durable materials, and guaranteed quality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-yellow text-brand-slate px-6 py-3 md:px-8 md:py-4 rounded-md font-heading font-bold text-base md:text-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Get Free Estimate
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              href="/gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-heading font-bold text-base md:text-lg hover:bg-white hover:text-brand-slate transition-all transform hover:-translate-y-1 shadow-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services & Projects Showcase */}
      <ServiceProjectShowcase />

      {/* Trust Section */}
      <section className="py-12 bg-brand-slate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-brand-yellow" size={24} />
              <span className="font-heading text-lg font-semibold">
                Licensed
              </span>
            </div>
            <div className="hidden md:block text-gray-400">|</div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-brand-yellow" size={24} />
              <span className="font-heading text-lg font-semibold">
                Insured
              </span>
            </div>
            <div className="hidden md:block text-gray-400">|</div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-brand-yellow" size={24} />
              <span className="font-heading text-lg font-semibold">
                Residential & Commercial
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
