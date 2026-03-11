"use client";

import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-body text-sm px-5 py-2 rounded-full border transition-all ${
              active === cat
                ? "bg-forest text-cream border-forest"
                : "bg-transparent text-cream/70 border-sage/30 hover:border-sage hover:text-cream"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="card-hover group relative aspect-[4/3] rounded-xl overflow-hidden border border-sage/20"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Default bottom gradient with title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent p-5 pt-12 transition-opacity duration-300 group-hover:opacity-0">
              <p className="font-heading font-bold text-cream text-sm">
                {item.title}
              </p>
              <p className="font-body text-sage text-xs mt-1">
                {item.category}
              </p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-forest/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-heading font-bold text-cream text-lg">
                  {item.title}
                </p>
                <div className="w-10 h-0.5 bg-sage mx-auto my-3" />
                <p className="font-body text-sage text-sm">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
