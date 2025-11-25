import ServiceSelector from "@/components/ServiceSelector";
import ProjectStrip from "@/components/ProjectStrip";
import PageCTA from "@/components/PageCTA";

export const metadata = {
  title: "Our Services | D&R Concrete - Northeast Ohio",
  description:
    "Professional concrete services including driveways, patios, stamped concrete, sealing, restoration, and snow plowing. Serving Northeast Ohio with quality workmanship.",
};

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Page Header */}
        <header className="text-center mb-8 md:mb-12">
          <span className="inline-block font-body text-sm font-semibold text-brand-yellow bg-brand-slate px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-brand-slate mb-4 md:mb-6">
            Our Services
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive concrete and restoration solutions for residential and
            commercial properties throughout Northeast Ohio
          </p>
        </header>

        {/* Service Selector Section */}
        <ServiceSelector />

        {/* Divider */}
        <div className="my-12 md:my-20 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="w-2 h-2 bg-brand-yellow rounded-full" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Project Gallery Strip */}
        <ProjectStrip />

        {/* CTA Section */}
        <div className="mt-12 md:mt-20">
          <PageCTA
            title="Ready to Get Started?"
            description="Contact us today for a free estimate on your next concrete or restoration project."
            buttonText="Get Free Estimate"
            buttonHref="/contact"
            showReassurance={true}
          />
        </div>
      </div>
    </main>
  );
}
