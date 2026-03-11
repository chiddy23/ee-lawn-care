import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free lawn care quote from E&E Lawn Care Service in North Port, FL. Call, email, or fill out our contact form. We serve North Port, Port Charlotte & surrounding areas.",
  alternates: {
    canonical: "https://www.eelawncare.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 sm:py-28 bg-forest grass-pattern">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-earth text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-cream mb-6">
            Contact Us
          </h1>
          <p className="font-body text-cream/60 text-lg max-w-2xl mx-auto">
            Ready for a beautiful lawn? Fill out the form below or give us a call.
            We provide free quotes and respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-green-primary/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-green-primary/30 border border-sage/20 rounded-2xl p-8 sm:p-10">
              <h2 className="font-heading font-bold text-2xl text-cream mb-2">
                Send Us a Message
              </h2>
              <p className="font-body text-cream/50 text-sm mb-8">
                Tell us about your property and what services you need. We will get
                back to you with a quote.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Business Info */}
              <div className="bg-forest border border-sage/20 rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-cream mb-6">
                  Business Info
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="text-sage text-xl mt-0.5">&#9742;</span>
                    <div>
                      <p className="font-heading font-bold text-sm text-cream">Phone</p>
                      <a
                        href="tel:+19415550123"
                        className="font-body text-cream/70 text-sm hover:text-sage transition-colors"
                      >
                        (941) 555-0123
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-sage text-xl mt-0.5">&#9993;</span>
                    <div>
                      <p className="font-heading font-bold text-sm text-cream">Email</p>
                      <a
                        href="mailto:info@eelawncare.com"
                        className="font-body text-cream/70 text-sm hover:text-sage transition-colors"
                      >
                        info@eelawncare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-sage text-xl mt-0.5">&#9719;</span>
                    <div>
                      <p className="font-heading font-bold text-sm text-cream">Hours</p>
                      <p className="font-body text-cream/70 text-sm">
                        Monday &ndash; Saturday
                      </p>
                      <p className="font-body text-cream/70 text-sm">
                        7:00 AM &ndash; 6:00 PM
                      </p>
                      <p className="font-body text-cream/50 text-xs mt-1">
                        Closed Sunday
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-sage text-xl mt-0.5">&#9873;</span>
                    <div>
                      <p className="font-heading font-bold text-sm text-cream">
                        Service Areas
                      </p>
                      <p className="font-body text-cream/70 text-sm">
                        North Port, Port Charlotte, Englewood, Venice, Nokomis
                      </p>
                    </div>
                  </div>
                </div>

                <div className="green-divider my-6" />

                <div>
                  <p className="font-heading font-bold text-sm text-cream mb-3">
                    Follow Us
                  </p>
                  <SocialLinks />
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-forest border border-sage/20 rounded-2xl overflow-hidden">
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-cream mb-2">
                    Our Location
                  </h3>
                  <p className="font-body text-cream/50 text-xs mb-4">
                    North Port, FL &mdash; Serving Sarasota &amp; Charlotte Counties
                  </p>
                </div>
                <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                  <iframe
                    title="E&amp;E Lawn Care Service location — North Port, FL"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56838.57177799999!2d-82.28!3d27.044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c37e3e6e5f4c7b%3A0x3c0f1e1b1c1e1e1e!2sNorth%20Port%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
