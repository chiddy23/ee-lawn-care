import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Lawn Care Services",
  description:
    "Full-service lawn care in North Port & Port Charlotte, FL. Mowing, edging, hedge trimming, mulch, leaf removal, yard cleanup, pressure washing & sod installation. Free quotes!",
  alternates: {
    canonical: "https://www.eelawncare.com/services",
  },
};

const services = [
  {
    emoji: "\u{1F33F}",
    title: "Weekly Lawn Mowing",
    price: "From $35/visit",
    description:
      "Professional mowing with clean striping, trimming around obstacles, and clipping cleanup.",
  },
  {
    emoji: "\u2702\uFE0F",
    title: "Edging & Trimming",
    price: "From $25",
    description:
      "Precision edging along walkways, driveways, and landscape beds.",
  },
  {
    emoji: "\u{1F333}",
    title: "Hedge & Bush Trimming",
    price: "From $40",
    description:
      "Expert shaping and maintenance of hedges, shrubs, and ornamentals.",
  },
  {
    emoji: "\u{1F343}",
    title: "Mulch Installation",
    price: "From $50",
    description:
      "Fresh mulch delivery and installation for beds and landscaping areas.",
  },
  {
    emoji: "\u{1F342}",
    title: "Leaf Removal",
    price: "From $45",
    description:
      "Complete yard leaf cleanup, blowing, and removal.",
  },
  {
    emoji: "\u{1F9F9}",
    title: "Yard Cleanup",
    price: "From $75",
    description:
      "Full property cleanup including debris removal, bed cleanup, and detailing.",
  },
  {
    emoji: "\u{1F4A6}",
    title: "Pressure Washing",
    price: "From $99",
    description:
      "Driveways, sidewalks, patios, pool decks, and building exteriors.",
  },
  {
    emoji: "\u{1F331}",
    title: "Sod Installation",
    price: "Custom Quote",
    description:
      "New sod installation for fresh, green lawns. Includes soil prep and grading.",
  },
];

const serviceAreas = [
  "North Port",
  "Port Charlotte",
  "Englewood",
  "Venice",
  "Nokomis",
];

const faqs = [
  {
    question: "How often should I mow my lawn in Florida?",
    answer:
      "During the growing season from March through October, we recommend weekly mowing to keep your lawn healthy and looking its best. From November through February, bi-weekly mowing is usually sufficient as growth slows down in the cooler months.",
  },
  {
    question: "Do you offer one-time services?",
    answer:
      "Yes, we are happy to handle one-time jobs like yard cleanups, pressure washing, or sod installation. That said, we also offer weekly and bi-weekly maintenance plans for customers who want consistent, hassle-free lawn care year-round.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, E&E Lawn Care Service, LLC is fully licensed and insured in the state of Florida. We carry general liability insurance to protect both our team and your property. Proof of insurance is available upon request.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve North Port, Port Charlotte, Englewood, Venice, and Nokomis across Sarasota and Charlotte Counties. If you are in a nearby area not listed, give us a call and we will do our best to accommodate you.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, always! We provide free, no-obligation estimates for every service we offer. Just give us a call or fill out our contact form and we will come out to assess your property and provide an honest, upfront quote.",
  },
  {
    question: "What if it rains on my scheduled day?",
    answer:
      "If heavy rain prevents us from completing your service safely, we reschedule to the next available day, typically within 24 to 48 hours. We always communicate any schedule changes so you know exactly when to expect us.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ───────────── Page Header ───────────── */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/garden-landscape.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative z-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-accent text-earth text-sm uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-cream mb-6">
              Our Services
            </h1>
            <p className="font-body text-cream/60 text-lg max-w-2xl mx-auto">
              Comprehensive lawn care and property maintenance for homes and
              businesses across North Port &amp; Port Charlotte, FL. From weekly
              mowing to complete yard transformations, we do it all.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Service Grid ───────────── */}
      <section className="py-20 bg-green-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-cream/95 border-l-4 border-l-sage rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{service.emoji}</div>
                <h3 className="font-heading font-bold text-xl text-forest mb-2">
                  {service.title}
                </h3>
                <span className="inline-block bg-sage/20 text-green-primary font-accent text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {service.price}
                </span>
                <p className="font-body text-bark/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Service Areas ───────────── */}
      <section className="py-20 bg-forest">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-accent text-earth text-sm uppercase tracking-widest mb-3">
              Where We Work
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-cream">
              Service Areas
            </h2>
            <p className="mt-4 font-body text-cream/60 text-lg max-w-2xl mx-auto">
              We proudly serve communities across Sarasota and Charlotte
              Counties in Southwest Florida.
            </p>
          </div>

          <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
            {serviceAreas.map((area) => (
              <li key={area} className="flex items-center gap-2">
                <span className="text-sage text-xl">&#10003;</span>
                <span className="font-heading font-bold text-cream text-lg">
                  {area}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-center mt-8 font-body text-cream/40 text-sm">
            Don&apos;t see your area? Contact us &mdash; we may still be able
            to serve your location.
          </p>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="py-20 bg-green-primary/10 grass-pattern">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-accent text-earth text-sm uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-cream">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="relative py-20">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/home-lawn.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative z-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-cream mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-body text-cream/60 text-lg max-w-2xl mx-auto mb-10">
              Contact us today for a free, no-obligation quote. We respond to
              all inquiries within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-sage hover:bg-earth text-forest font-heading font-bold px-10 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
