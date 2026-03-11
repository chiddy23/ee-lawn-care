import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-forest grass-pattern overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-32">
        <p className="font-accent text-earth text-lg sm:text-xl uppercase tracking-widest mb-4 animate-fadeIn">
          North Port &amp; Port Charlotte&apos;s Trusted Lawn Care
        </p>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl text-cream leading-tight mb-6 animate-slideUp">
          Your Lawn Is
          <span className="text-gradient-green block sm:inline"> My Problem!</span>
        </h1>

        <p className="font-body text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-slideUp delay-200">
          Family-owned and operated, E&amp;E Lawn Care Service delivers
          professional lawn maintenance, landscaping, and pressure washing
          throughout Southwest Florida.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp delay-300">
          <Link
            href="/contact"
            className="bg-sage hover:bg-lime text-forest font-heading font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="border-2 border-sage/50 hover:border-sage text-cream font-heading font-bold px-8 py-4 rounded-lg text-lg transition-all hover:bg-sage/10"
          >
            View Services
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-cream/50 text-sm font-body animate-fadeIn delay-500">
          <div className="text-center">
            <span className="block text-sage text-2xl font-heading font-bold">100+</span>
            Happy Customers
          </div>
          <div className="w-px h-10 bg-sage/30" />
          <div className="text-center">
            <span className="block text-sage text-2xl font-heading font-bold">5.0</span>
            Google Rating
          </div>
          <div className="w-px h-10 bg-sage/30" />
          <div className="text-center">
            <span className="block text-sage text-2xl font-heading font-bold">Family</span>
            Owned
          </div>
        </div>
      </div>
    </section>
  );
}
