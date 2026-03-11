import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See our work! Browse before and after photos of lawn care, landscaping, yard cleanup, and pressure washing projects in North Port and Port Charlotte, FL.",
  alternates: {
    canonical: "https://www.eelawncare.com/gallery",
  },
};

const galleryItems = [
  {
    id: 1,
    title: "Weekly Mow — North Port Residence",
    category: "Lawn Care",
    image: "/images/lawn-mowing.jpg",
  },
  {
    id: 2,
    title: "Fresh Cut Lawn Lines",
    category: "Lawn Care",
    image: "/images/lawn-stripes.jpg",
  },
  {
    id: 3,
    title: "Landscape Maintenance",
    category: "Landscaping",
    image: "/images/garden-landscape.jpg",
  },
  {
    id: 4,
    title: "Curb Appeal Transformation",
    category: "Landscaping",
    image: "/images/landscaping.jpg",
  },
  {
    id: 5,
    title: "Residential Property Care",
    category: "Lawn Care",
    image: "/images/home-lawn.jpg",
  },
  {
    id: 6,
    title: "Pressure Wash — Driveway Restoration",
    category: "Pressure Washing",
    image: "/images/pressure-washing.jpg",
  },
  {
    id: 7,
    title: "Garden Bed Maintenance",
    category: "Landscaping",
    image: "/images/green-nature.jpg",
  },
  {
    id: 8,
    title: "Front Yard Refresh",
    category: "Lawn Care",
    image: "/images/hero-lawn.jpg",
  },
  {
    id: 9,
    title: "Full Property Mow & Trim",
    category: "Lawn Care",
    image: "/images/house-yard.jpg",
  },
  {
    id: 10,
    title: "Home Exterior Detailing",
    category: "Pressure Washing",
    image: "/images/home-exterior.jpg",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 sm:py-28 bg-forest grass-pattern">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-earth text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-cream mb-6">
            Project Gallery
          </h1>
          <p className="font-body text-cream/60 text-lg max-w-2xl mx-auto">
            Take a look at some of the properties we maintain across North Port and
            Port Charlotte. Every yard tells a story of care and consistency.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-green-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={galleryItems} />

          <div className="mt-12 text-center">
            <div className="inline-block bg-forest border border-sage/20 rounded-xl px-8 py-6">
              <p className="font-body text-cream/70 text-sm">
                Want to see more of our work?{" "}
                <a
                  href="https://www.facebook.com/p/EE-Lawn-Care-Service-LLC-61550549894671/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:text-lime font-semibold transition-colors"
                >
                  Follow us on Facebook
                </a>{" "}
                to see our latest projects, before-and-after transformations, and
                seasonal tips!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest mb-6">
            Your Lawn Could Be Next
          </h2>
          <p className="font-body text-forest/70 text-lg max-w-2xl mx-auto mb-10">
            Ready to see your property in our gallery? Contact us for a free
            quote and let us show you what E&amp;E can do.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-forest hover:bg-bark text-cream font-heading font-bold px-10 py-4 rounded-lg text-lg transition-all hover:scale-105"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
