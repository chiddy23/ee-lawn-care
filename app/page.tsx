import type { Metadata } from "next";
import Link from "next/link";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title:
    "Professional Lawn Care in North Port & Port Charlotte, FL | E&E Lawn Care Service, LLC",
  description:
    "Professional lawn care services in North Port and Port Charlotte, FL. Family-owned. Mowing, trimming, landscaping, pressure washing & more. Free quotes! Your Lawn Is My Problem!",
  alternates: {
    canonical: "https://www.eelawncare.com",
  },
};

const featuredServices = [
  {
    icon: "🌿",
    title: "Lawn Mowing",
    description:
      "Weekly and bi-weekly professional mowing to keep your yard looking pristine. Includes mowing, blowing, and clean-up of all clippings.",
    price: "From $35",
  },
  {
    icon: "✂️",
    title: "Edging & Trimming",
    description:
      "Crisp, clean edges along driveways, walkways, and flower beds. The detail work that makes your lawn stand out on the block.",
    price: "From $25",
  },
  {
    icon: "🌳",
    title: "Hedge Trimming",
    description:
      "Expert shaping and trimming of hedges, bushes, and ornamental shrubs. We keep your landscaping neat and healthy year-round.",
    price: "From $40",
  },
  {
    icon: "🍂",
    title: "Mulching",
    description:
      "Fresh mulch installation to beautify garden beds, retain moisture, and suppress weeds. Multiple color options available.",
    price: "From $50",
  },
  {
    icon: "🧹",
    title: "Yard Cleanup",
    description:
      "Complete yard cleanups for overgrown properties, storm debris, or seasonal maintenance. We haul everything away.",
    price: "From $75",
  },
  {
    icon: "💦",
    title: "Pressure Washing",
    description:
      "Restore your driveway, sidewalks, patio, and pool deck to like-new condition. Safe, effective cleaning for all surfaces.",
    price: "From $99",
  },
];

const testimonials = [
  {
    quote:
      "E&E has been mowing our yard for six months now and it has never looked better. They show up every Thursday like clockwork. Our neighbors keep asking who we use!",
    name: "David & Maria R.",
    location: "North Port, FL",
    rating: 5,
  },
  {
    quote:
      "We moved down from Ohio and had no idea how to maintain a Florida lawn. E&E took one look at our yard and had it looking amazing within a month. Fair prices and great communication.",
    name: "Jennifer T.",
    location: "Port Charlotte, FL",
    rating: 5,
  },
  {
    quote:
      "I called E&E for a one-time cleanup after a storm and was so impressed I signed up for weekly service. They are professional, on time, and the quality is unbeatable for the price.",
    name: "Robert K.",
    location: "North Port, FL",
    rating: 5,
  },
  {
    quote:
      "As a property manager, I need lawn care I can count on. E&E handles three of my rental properties and every single one looks immaculate. Highly recommend for residential or commercial.",
    name: "Angela M.",
    location: "Port Charlotte, FL",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────── Hero Section ───────────── */}
      <section className="relative min-h-screen flex items-center justify-center bg-forest overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-lawn.jpg')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/70 to-green-primary/60" />

        {/* Decorative blurred orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-32">
          <p className="font-body text-sage text-lg sm:text-xl uppercase tracking-widest mb-4">
            E&amp;E Lawn Care Service, LLC
          </p>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl text-cream leading-tight mb-6">
            Your Lawn Is My{" "}
            <span className="text-lime">Problem</span>
          </h1>

          <p className="font-body text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Family-owned professional lawn care serving North Port &amp; Port
            Charlotte, FL
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-sage hover:bg-lime text-forest font-heading font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-sage/50 hover:border-sage text-cream font-heading font-bold px-8 py-4 rounded-lg text-lg transition-all hover:bg-sage/10"
            >
              Our Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-cream/50 text-sm font-body">
            <div className="text-center">
              <span className="block text-sage text-2xl font-heading font-bold">
                100+
              </span>
              Happy Customers
            </div>
            <div className="w-px h-10 bg-sage/30" />
            <div className="text-center">
              <span className="block text-sage text-2xl font-heading font-bold">
                5.0
              </span>
              Google Rating
            </div>
            <div className="w-px h-10 bg-sage/30" />
            <div className="text-center">
              <span className="block text-sage text-2xl font-heading font-bold">
                Family
              </span>
              Owned
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Why Choose Us ───────────── */}
      <WhyChooseUs />

      {/* ───────────── Featured Services ───────────── */}
      <section className="py-20 sm:py-28 bg-forest">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-cream">
              Our Services
            </h2>
            <p className="mt-4 font-body text-cream/60 text-lg max-w-2xl mx-auto">
              From routine lawn maintenance to complete property transformations,
              we have the skills and equipment to handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border-2 border-sage/50 hover:border-sage text-cream font-heading font-bold px-8 py-3 rounded-lg transition-all hover:bg-sage/10"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Testimonials ───────────── */}
      <section className="relative py-20 sm:py-28 bg-green-primary/10 overflow-hidden">
        {/* Subtle background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('/images/green-grass.jpg')" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-cream">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA Banner ───────────── */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home-lawn.jpg')" }}
        />
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-forest/85" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-cream mb-6">
            Ready for a Beautiful Lawn?
          </h2>
          <p className="font-body text-cream/70 text-lg max-w-2xl mx-auto mb-10">
            Get a free, no-obligation quote today. We&apos;ll visit your
            property, assess your needs, and provide an honest price &mdash; no
            pressure, no gimmicks.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-lime text-forest font-heading font-bold px-10 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
