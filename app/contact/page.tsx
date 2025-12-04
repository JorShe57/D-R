import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import ContactQuickActions from "@/components/ContactQuickActions";
import LocationCard from "@/components/LocationCard";
import ContactFAQ from "@/components/ContactFAQ";
import WhatsNext from "@/components/WhatsNext";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-slate py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch for a free estimate on your next project
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <div className="mb-8">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-slate mb-2">
                    Send Us a Message
                  </h2>
                  <p className="font-body text-gray-600">
                    Fill out the form below and we'll get back to you within 1 business day.
                  </p>
                </div>
                
                <ContactForm />
              </div>

              {/* What's Next - Desktop (shows under form on larger screens) */}
              <div className="hidden lg:block mt-8">
                <WhatsNext />
              </div>
            </div>

            {/* Right Column - Contact Info, Location, FAQ */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Details with Quick Actions */}
              <ContactDetails />
              
              {/* Location Card with Map */}
              <LocationCard />
              
              {/* FAQ - Desktop Only */}
              <div className="hidden lg:block">
                <ContactFAQ />
              </div>
            </div>
          </div>

          {/* Mobile-only sections */}
          <div className="lg:hidden mt-8 space-y-8">
            {/* What's Next */}
            <WhatsNext />
            
            {/* FAQ */}
            <ContactFAQ />
          </div>
        </div>
      </section>

      {/* Mobile Quick Actions Bar (Fixed to bottom) */}
      <ContactQuickActions />
    </main>
  );
}

