"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to form backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-primary/30 border border-sage/30 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">&#9989;</div>
        <h3 className="font-heading font-bold text-xl text-cream mb-2">Thank You!</h3>
        <p className="font-body text-cream/70">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-heading font-bold text-sm text-cream mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-forest border border-sage/30 rounded-lg px-4 py-3 text-cream font-body text-sm focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors placeholder:text-cream/30"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-heading font-bold text-sm text-cream mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full bg-forest border border-sage/30 rounded-lg px-4 py-3 text-cream font-body text-sm focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors placeholder:text-cream/30"
            placeholder="(941) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-heading font-bold text-sm text-cream mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-forest border border-sage/30 rounded-lg px-4 py-3 text-cream font-body text-sm focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors placeholder:text-cream/30"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block font-heading font-bold text-sm text-cream mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-forest border border-sage/30 rounded-lg px-4 py-3 text-cream font-body text-sm focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
        >
          <option value="">Select a service...</option>
          <option value="mowing">Weekly Lawn Mowing</option>
          <option value="edging">Edging &amp; Trimming</option>
          <option value="hedge">Hedge &amp; Bush Trimming</option>
          <option value="mulch">Mulch Installation</option>
          <option value="leaf">Leaf Removal</option>
          <option value="cleanup">Yard Cleanup</option>
          <option value="pressure">Pressure Washing</option>
          <option value="sod">Sod Installation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="address" className="block font-heading font-bold text-sm text-cream mb-2">
          Property Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="w-full bg-forest border border-sage/30 rounded-lg px-4 py-3 text-cream font-body text-sm focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors placeholder:text-cream/30"
          placeholder="123 Main St, North Port, FL"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-heading font-bold text-sm text-cream mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full bg-forest border border-sage/30 rounded-lg px-4 py-3 text-cream font-body text-sm focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors placeholder:text-cream/30 resize-none"
          placeholder="Tell us about your lawn care needs..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-sage hover:bg-lime text-forest font-heading font-bold py-4 rounded-lg text-lg transition-all hover:scale-[1.02]"
      >
        Send Message
      </button>
    </form>
  );
}
