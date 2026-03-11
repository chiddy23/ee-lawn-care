interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price: string;
}

export default function ServiceCard({ icon, title, description, price }: ServiceCardProps) {
  return (
    <div className="card-hover bg-green-primary/30 border border-sage/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-heading font-bold text-xl text-cream mb-2">{title}</h3>
      <p className="font-body text-cream/60 text-sm leading-relaxed mb-4">{description}</p>
      <p className="font-accent text-sage text-lg font-medium">{price}</p>
    </div>
  );
}
