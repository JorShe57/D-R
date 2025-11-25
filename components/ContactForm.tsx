"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Thank you! We've received your message and will get back to you within 1 business day.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }, 1000);
  };

  const projectTypes = [
    { value: "", label: "Select a project type" },
    { value: "driveway", label: "Driveway" },
    { value: "patio", label: "Patio" },
    { value: "walkway", label: "Walkway" },
    { value: "stamped-concrete", label: "Stamped Concrete" },
    { value: "sealing", label: "Sealing & Protection" },
    { value: "repair", label: "Repair & Restoration" },
    { value: "snow-removal", label: "Snow Removal" },
    { value: "commercial", label: "Commercial Project" },
    { value: "other", label: "Other" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="block text-sm font-body font-medium text-gray-700"
        >
          Full Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="John Smith"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow 
                     outline-none font-body text-gray-900 placeholder:text-gray-400
                     transition-colors duration-200"
          aria-required="true"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block text-sm font-body font-medium text-gray-700"
        >
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow 
                     outline-none font-body text-gray-900 placeholder:text-gray-400
                     transition-colors duration-200"
          aria-required="true"
        />
      </div>

      {/* Phone Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="phone"
          className="block text-sm font-body font-medium text-gray-700"
        >
          Phone Number <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          autoComplete="tel"
          placeholder="(216) 555-1234"
          pattern="[\d\s\-\+\(\)]{10,}"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow 
                     outline-none font-body text-gray-900 placeholder:text-gray-400
                     transition-colors duration-200"
          aria-required="true"
          aria-describedby="phone-hint"
        />
        <p id="phone-hint" className="text-xs text-gray-500 font-body">
          We may call to discuss project details
        </p>
      </div>

      {/* Project Type Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="projectType"
          className="block text-sm font-body font-medium text-gray-700"
        >
          Project Type <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <div className="relative">
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow 
                       outline-none font-body text-gray-900 bg-white
                       appearance-none cursor-pointer transition-colors duration-200"
            aria-required="true"
          >
            {projectTypes.map((type) => (
              <option
                key={type.value}
                value={type.value}
                disabled={type.value === ""}
                className={type.value === "" ? "text-gray-400" : "text-gray-900"}
              >
                {type.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-sm font-body font-medium text-gray-700"
        >
          Project Details <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project: size, timeline, any specific requirements..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow 
                     outline-none font-body text-gray-900 placeholder:text-gray-400
                     resize-none transition-colors duration-200"
          aria-required="true"
        />
      </div>

      {/* Status Messages */}
      {submitStatus.type && (
        <div
          role="alert"
          className={`flex items-start gap-3 p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
          )}
          <p className="font-body text-sm">{submitStatus.message}</p>
        </div>
      )}

      {/* Response Time Hint */}
      <p className="text-sm text-gray-500 font-body flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
        We typically respond within 1 business day
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto md:min-w-[200px] bg-brand-slate text-white 
                   px-8 py-3.5 rounded-lg font-heading font-bold text-lg
                   hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-brand-slate
                   transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed 
                   flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" aria-hidden="true" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
