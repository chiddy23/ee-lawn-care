export default function WhyChooseUs() {
  const features = [
    {
      icon: "👨‍👩‍👦",
      title: "Family Owned & Operated",
      description:
        "We're a local family business that takes pride in every lawn we touch. Your property is treated like our own.",
    },
    {
      icon: "🛡️",
      title: "Licensed & Insured",
      description:
        "Fully licensed and insured for your peace of mind. We carry full liability coverage on every job.",
    },
    {
      icon: "💰",
      title: "Free Estimates",
      description:
        "No surprises — get a free, no-obligation quote before we start. Transparent pricing you can count on.",
    },
    {
      icon: "⭐",
      title: "Satisfaction Guaranteed",
      description:
        "We're not happy until you are. If something isn't right, we'll come back and make it right — no questions asked.",
    },
  ];

  return (
    <section className="py-20 px-4 grass-pattern">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
            Why Choose E&amp;E Lawn Care?
          </h2>
          <div className="green-divider w-24 mx-auto mb-6" />
          <p className="text-cream/70 font-body text-lg max-w-2xl mx-auto">
            North Port&apos;s trusted lawn care professionals since day one
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-green-primary/30 backdrop-blur-sm border border-sage/20 rounded-2xl p-8 text-center card-hover"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>
              <h3 className="font-heading text-xl font-bold text-cream mb-3">
                {feature.title}
              </h3>
              <p className="text-cream/70 font-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
