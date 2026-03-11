"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-sage/20 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-green-primary/20 hover:bg-green-primary/30 transition-colors"
          >
            <span className="font-heading font-bold text-sm sm:text-base text-cream pr-4">
              {item.question}
            </span>
            <span className="text-sage text-xl flex-shrink-0 transition-transform duration-200"
              style={{ transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-5 bg-forest/50">
              <p className="font-body text-cream/70 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
