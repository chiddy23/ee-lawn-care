import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "E&E Lawn Care Service LLC is a family-owned lawn care company in North Port, FL. Honest, reliable service for residential and commercial properties across Sarasota and Charlotte Counties.",
  alternates: {
    canonical: "https://www.eelawncare.com/about",
  },
};

const values = [
  {
    icon: "\u{1F3AF}",
    title: "Quality Workmanship",
    description:
      "We never cut corners \u2014 pun intended. Every lawn we service gets our full attention, from the first pass of the mower to the final edge along your driveway. We treat your yard like it is our own.",
  },
  {
    icon: "\u{1F552}",
    title: "Reliability",
    description:
      "Same day, same quality, every time. When we commit to a schedule, we stick to it. You can count on E&E to show up on time and deliver consistent, professional results week after week.",
  },
  {
    icon: "\u{1F4B2}",
    title: "Fair Pricing",
    description:
      "Honest prices with no hidden fees. We provide transparent quotes upfront so you know exactly what you are paying for. No surprises on your bill, no bait-and-switch \u2014 just straightforward value.",
  },
  {
    icon: "\u2764\uFE0F",
    title: "Community",
    description:
      "Proud to serve our North Port neighbors. This is where we live, where we raise our families, and where we built our business. Every yard we care for makes our whole community a little more beautiful.",
  },
];

const stats = [
  { label: "Years of Experience", value: "5+" },
  { label: "Happy Customers", value: "150+" },
  { label: "Lawns Maintained Weekly", value: "75+" },
  { label: "5-Star Reviews", value: "47+" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/lawn-stripes.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative z-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-accent text-earth text-sm uppercase tracking-widest mb-3">
              About Us
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-cream mb-6">
              Family-Owned. Community-Driven.
            </h1>
            <p className="font-body text-cream/60 text-lg max-w-2xl mx-auto">
              E&amp;E Lawn Care Service is built on hard work, honest values, and a
              genuine passion for making our neighbors&apos; yards look their best.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-green-primary/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-forest border border-sage/20 rounded-2xl p-8 sm:p-12">
            <h2 className="font-heading font-extrabold text-3xl text-cream mb-6">
              Our Story
            </h2>
            <div className="space-y-4 font-body text-cream/70 text-base leading-relaxed">
              <p>
                E&amp;E Lawn Care Service, LLC started right here in North Port,
                Florida, from a passion for making neighborhoods beautiful. As a
                family-owned and operated business, we built our company on a
                simple promise: deliver the kind of lawn care we would want for
                our own home. Every customer is treated like a neighbor &mdash;
                because most of them are.
              </p>
              <p>
                What began with a mower, a trimmer, and a whole lot of
                determination has grown into a trusted, full-service lawn care
                company serving homeowners and businesses across North Port, Port
                Charlotte, and the surrounding Southwest Florida communities.
                We have earned our reputation one yard at a time through honest
                work, consistent results, and the kind of personal attention that
                only a locally owned company can provide.
              </p>
              <p>
                We take pride in every single yard we touch. Whether it is a
                quick weekly mow or a complete property transformation, we bring
                the same level of care and professionalism to the job. Our
                tagline &mdash;{" "}
                <span className="text-sage font-semibold italic">
                  &quot;Your Lawn Is My Problem!&quot;
                </span>{" "}
                &mdash; is more than a catchy phrase. It reflects our mindset.
                When you hire E&amp;E, you are handing us the responsibility of
                keeping your property looking its absolute best, and we take
                that responsibility seriously.
              </p>
              <p>
                We are proud to serve this community with honest, reliable lawn
                care, and we look forward to showing you the E&amp;E difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-forest">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-accent text-earth text-sm uppercase tracking-widest mb-3">
              Our Values
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-cream">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center bg-green-primary/10 border border-sage/20 rounded-2xl p-6 sm:p-8"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-heading font-bold text-lg text-cream mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-cream/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-green-primary/10 grass-pattern">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-earth text-sm uppercase tracking-widest mb-3">
            Where We Serve
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-cream mb-6">
            Sarasota &amp; Charlotte County
          </h2>
          <p className="font-body text-cream/70 text-base leading-relaxed max-w-3xl mx-auto">
            E&amp;E Lawn Care Service is based in North Port and proudly serves
            homeowners and businesses across both Sarasota and Charlotte
            Counties. Our primary service areas include North Port, Port
            Charlotte, Englewood, Venice, and Nokomis. The warm, humid climate
            of Southwest Florida means lawns grow year-round, and we are here
            52 weeks a year to keep your property in top shape. Whether you live
            in a quiet neighborhood off Price Boulevard or a gated community in
            Port Charlotte, we bring the same professional, dependable service
            to every yard we touch.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/green-nature.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative z-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-green-primary/20 border border-sage/20 rounded-2xl p-6 sm:p-8"
                >
                  <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-sage mb-2">
                    {stat.value}
                  </span>
                  <span className="font-body text-cream/60 text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest mb-6">
            Ready to Experience the E&amp;E Difference?
          </h2>
          <p className="font-body text-forest/70 text-lg max-w-2xl mx-auto mb-10">
            Join the growing family of satisfied customers across North Port
            and Port Charlotte. Your free quote is just a phone call away.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-forest hover:bg-bark text-cream font-heading font-bold px-10 py-4 rounded-lg text-lg transition-all hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
