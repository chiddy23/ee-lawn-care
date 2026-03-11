interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating?: number;
}

export default function TestimonialCard({ quote, name, location, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-forest border border-sage/20 rounded-2xl p-6 sm:p-8">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-earth text-lg">&#9733;</span>
        ))}
      </div>
      <blockquote className="font-body text-cream/70 text-sm leading-relaxed mb-6 italic">
        &quot;{quote}&quot;
      </blockquote>
      <div>
        <p className="font-heading font-bold text-cream text-sm">{name}</p>
        <p className="font-body text-sage text-xs">{location}</p>
      </div>
    </div>
  );
}
