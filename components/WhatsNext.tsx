"use client";

import { CheckCircle, Clock, Phone, FileText } from "lucide-react";

const steps = [
  {
    icon: Clock,
    title: "Same-Day Review",
    description: "We review your message the same day it's received.",
  },
  {
    icon: Phone,
    title: "Quick Follow-Up",
    description: "We may call to discuss your project details.",
  },
  {
    icon: FileText,
    title: "Free Estimate",
    description: "You'll receive a clear, no-obligation written estimate.",
  },
];

export default function WhatsNext() {
  return (
    <div className="bg-brand-slate/5 rounded-xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div 
          className="w-10 h-10 bg-brand-slate rounded-full flex items-center justify-center"
          aria-hidden="true"
        >
          <CheckCircle className="w-5 h-5 text-brand-yellow" />
        </div>
        <h3 className="font-heading text-xl font-bold text-brand-slate">
          What Happens Next?
        </h3>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              <div 
                className="flex-shrink-0 w-8 h-8 bg-white rounded-full 
                           flex items-center justify-center shadow-sm border border-gray-100"
                aria-hidden="true"
              >
                <IconComponent className="w-4 h-4 text-brand-slate" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-semibold text-brand-slate text-sm mb-0.5">
                  {step.title}
                </h4>
                <p className="font-body text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-5 border-t border-gray-200">
        <p className="font-body text-sm text-gray-500 italic">
          "From first contact to finished project, we keep you informed every step of the way."
        </p>
      </div>
    </div>
  );
}


