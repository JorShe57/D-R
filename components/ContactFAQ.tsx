"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How soon can you start my project?",
    answer: "Our typical lead time is 1-2 weeks depending on the season and project size. For urgent repairs, we offer expedited scheduling when available. Contact us for current availability."
  },
  {
    question: "Do you handle permits?",
    answer: "Yes, we handle all necessary permits for your project. We're familiar with local Northeast Ohio building codes and will ensure your project meets all requirements."
  },
  {
    question: "What's included in a free estimate?",
    answer: "Our free estimates include an on-site visit, detailed project assessment, material recommendations, and a written quote with no hidden fees. There's absolutely no obligation."
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h2 className="font-heading text-2xl font-bold text-brand-slate mb-6">
        Common Questions
      </h2>
      
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left
                         hover:bg-gray-50 transition-colors duration-150
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-yellow"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-heading font-semibold text-brand-slate pr-4">
                {faq.question}
              </span>
              <ChevronDown 
                className={`w-5 h-5 text-brand-slate flex-shrink-0 transition-transform duration-200
                           ${openIndex === index ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`overflow-hidden transition-all duration-200 ease-in-out
                         ${openIndex === index ? "max-h-48" : "max-h-0"}`}
            >
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="font-body text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

