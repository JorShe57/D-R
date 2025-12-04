import Link from "next/link";
import { Phone, ArrowRight, Clock, DollarSign, MessageCircle } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Meteors } from "@/components/ui/meteors";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

interface PageCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  showReassurance?: boolean;
}

export default function PageCTA({
  title = "Ready to Get Started?",
  description = "Contact us today for a free estimate on your next concrete or restoration project.",
  buttonText = "Get Free Estimate",
  buttonHref = "/contact",
  showReassurance = true,
}: PageCTAProps) {
  const reassuranceItems = [
    { icon: MessageCircle, text: "No obligation" },
    { icon: Clock, text: "Fast response" },
    { icon: DollarSign, text: "Honest pricing" },
  ];

  return (
    <section
      className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-brand-slate py-12 px-6 md:py-16 md:px-12 lg:py-20 lg:px-16"
      aria-labelledby="cta-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
        {/* Meteors Effect */}
        <Meteors number={10} className="opacity-30" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2
          id="cta-heading"
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
        >
          <AnimatedGradientText
            colorFrom="#FFD700"
            colorTo="#FFFFFF"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            {title}
          </AnimatedGradientText>
        </h2>
        
        <p className="font-body text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA Button */}
        <Link
          href={buttonHref}
          className="relative inline-flex items-center justify-center gap-3 bg-brand-yellow text-brand-slate w-full sm:w-auto px-8 py-5 sm:py-4 rounded-xl font-heading font-bold text-lg sm:text-base hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate overflow-hidden"
        >
          <BorderBeam
            size={120}
            duration={4}
            colorFrom="#FFD700"
            colorTo="#FFFFFF"
            borderWidth={2}
            className="rounded-xl"
          />
          <Phone className="w-5 h-5 relative z-10" />
          <span className="relative z-10">{buttonText}</span>
          <ArrowRight className="w-5 h-5 relative z-10" />
        </Link>

        {/* Reassurance Line */}
        {showReassurance && (
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {reassuranceItems.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <ItemIcon className="w-4 h-4 text-brand-yellow" />
                  <span className="font-body text-sm">{item.text}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}


