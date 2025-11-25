Here’s the markdown file content. Save it as
docs/add-service-project-showcase.md (or any name you like).

⸻


# Implement the `ServiceProjectShowcase` Component

This document tells the agent exactly how to implement the new unified **Services + Featured Projects** component in a Next.js + Tailwind app.

Goal:  
Replace the current separate “Our Professional Services” and “Featured Projects” blocks with a **single interactive component** where the user chooses a category (Driveways, Patios, etc.) and the UI updates both:

- The service description + CTA  
- A grid of recent project photos for that category

---

## 1. Create the Component File

**File path (create if missing):**

```text
/components/ServiceProjectShowcase.tsx

File contents:

"use client";

import { useState } from "react";

type Category = {
  id: string;
  label: string;
  serviceTitle: string;
  serviceBlurb: string;
  cta: string;
  projects: string[];
};

const CATEGORIES: Category[] = [
  {
    id: "concrete-install",
    label: "Concrete Installation",
    serviceTitle: "Concrete Installation",
    serviceBlurb:
      "Expert installation of driveways, patios, walkways, and foundations using high-grade materials for lasting durability.",
    cta: "Get a concrete quote",
    projects: [
      "/projects/concrete-install-1.jpg",
      "/projects/concrete-install-2.jpg",
      "/projects/concrete-install-3.jpg",
    ],
  },
  {
    id: "restoration",
    label: "Restoration & Repair",
    serviceTitle: "Restoration & Repair",
    serviceBlurb:
      "Complete restoration services including resealing, levelling, and crack repair to bring your concrete surfaces back to life.",
    cta: "Request an inspection",
    projects: [
      "/projects/restoration-1.jpg",
      "/projects/restoration-2.jpg",
      "/projects/restoration-3.jpg",
    ],
  },
  {
    id: "snow",
    label: "Snow Management",
    serviceTitle: "Snow Management",
    serviceBlurb:
      "Reliable commercial and residential snow plowing and ice management to keep your property safe and accessible.",
    cta: "Book snow service",
    projects: [
      "/projects/snow-1.jpg",
      "/projects/snow-2.jpg",
      "/projects/snow-3.jpg",
    ],
  },
];

export default function ServiceProjectShowcase() {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <section className="bg-slate-800 py-16 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <header className="text-center mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-300">
            Services &amp; Projects
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            See what we do — and how it looks when it&apos;s done
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Choose a service to view details and real projects we&apos;ve
            completed for homeowners and businesses like you.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveId(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition
                ${
                  activeId === cat.id
                    ? "bg-yellow-400 text-slate-900 border-yellow-400 shadow"
                    : "border-slate-500 text-slate-200 hover:border-yellow-300 hover:text-white"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
          {/* Service card */}
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg border border-slate-700">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-2">
              Service
            </p>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {active.serviceTitle}
            </h3>
            <p className="text-slate-200 text-sm mb-6">
              {active.serviceBlurb}
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-yellow-300 transition">
              {active.cta}
            </button>
            <p className="mt-4 text-xs text-slate-400">
              Free estimates • Licensed &amp; insured • Residential &amp;
              commercial
            </p>
          </div>

          {/* Project images */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 mb-3">
              Recent {active.label.toLowerCase()} projects
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {active.projects.map((src, idx) => (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-xl bg-slate-700 aspect-[4/3]"
                >
                  <img
                    src={src}
                    alt={`${active.label} project ${idx + 1}`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
            <button className="mt-4 text-sm font-medium text-slate-100 underline-offset-4 hover:underline">
              View full gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


⸻

2. Add Project Images

Use the existing image style from the site. Put the new project images in the Next.js public folder so the paths in CATEGORIES work.

Paths to create:

/public/projects/concrete-install-1.jpg
/public/projects/concrete-install-2.jpg
/public/projects/concrete-install-3.jpg

/public/projects/restoration-1.jpg
/public/projects/restoration-2.jpg
/public/projects/restoration-3.jpg

/public/projects/snow-1.jpg
/public/projects/snow-2.jpg
/public/projects/snow-3.jpg

Images can be renamed or swapped; just keep the paths in sync with the projects arrays in CATEGORIES.

If the project already has similar images for services / gallery, reuse those by pointing the paths here to the existing files.

⸻

3. Wire the Component Into the Homepage

There are two common setups. Use the one that matches the project.

3.1 If the project uses the App Router (app/)
	1.	Locate the main home page file, usually:

/app/page.tsx


	2.	At the top of the file, import the component:

import ServiceProjectShowcase from "@/components/ServiceProjectShowcase";


	3.	In the JSX, find the existing sections for:
	•	“Our Professional Services”
	•	“Featured Projects”
Remove those two sections entirely.
	4.	Insert the new component in roughly the same vertical position in the page:

export default function Page() {
  return (
    <>
      {/* Existing hero / intro sections above */}

      <ServiceProjectShowcase />

      {/* Any sections that used to come after Featured Projects can stay below */}
    </>
  );
}



3.2 If the project uses the Pages Router (pages/)
	1.	Locate the main index page:

/pages/index.tsx


	2.	Import the component:

import ServiceProjectShowcase from "@/components/ServiceProjectShowcase";


	3.	Remove the old “Our Professional Services” and “Featured Projects” markup.
	4.	Insert:

<ServiceProjectShowcase />

where those sections used to be.

⸻

4. Match Existing Styling

The component already uses Tailwind classes compatible with the current design:
	•	Dark background: bg-slate-800
	•	Cards: bg-slate-900/80, border-slate-700
	•	Accent color: bg-yellow-400 (matches existing yellow icons/buttons)
	•	Responsive layout: grid, max-w-6xl, etc.

No Tailwind config changes are required.

If needed, minor tweaks:
	•	If the site uses a different accent (e.g. #fbbf24 vs another yellow), update the few bg-yellow-400 and border-yellow-400 classes to the project’s chosen color utilities.
	•	If vertical spacing needs adjustment, tweak py-16 on the <section>.

⸻

5. Optional Enhancements (Future)

Not required now, but the component is structured so these can be added easily later:
	•	Per-category links (e.g. “View Concrete Installation page”)
	•	Hover overlay on project images with location / short label
	•	Additional categories for other concrete services

For now, implement exactly as above so the homepage has a single unified Service + Project showcase section.

---