export type GalleryCategory = 
  | "all"
  | "driveways"
  | "patios"
  | "walkways"
  | "steps"
  | "commercial"
  | "repair";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  title: string;
  location?: string;
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "driveways", label: "Driveways" },
  { id: "patios", label: "Patios" },
  { id: "walkways", label: "Walkways" },
  { id: "steps", label: "Steps & Entrances" },
  { id: "commercial", label: "Commercial" },
  { id: "repair", label: "Repairs" },
];

export const galleryData: GalleryItem[] = [
  // Commercial projects
  {
    id: "comm-1",
    src: "/images/commercial-1.jpg",
    alt: "Commercial concrete entrance with canopy and steps",
    category: "commercial",
    title: "Church Entrance",
    location: "Canton, OH",
  },
  {
    id: "comm-2",
    src: "/images/commercial-2.jpg",
    alt: "Commercial building entrance renovation",
    category: "commercial",
    title: "Building Entrance",
    location: "Akron, OH",
  },
  // Driveways
  {
    id: "drive-1",
    src: "/images/driveways-1.jpg",
    alt: "Freshly poured concrete driveway",
    category: "driveways",
    title: "Residential Driveway",
    location: "Massillon, OH",
  },
  {
    id: "drive-2",
    src: "/images/driveways-2.jpg",
    alt: "Wide concrete driveway installation",
    category: "driveways",
    title: "Double-Wide Driveway",
    location: "North Canton, OH",
  },
  // Patios
  {
    id: "patio-1",
    src: "/images/patios-1.jpg",
    alt: "Backyard patio with fresh concrete",
    category: "patios",
    title: "Backyard Patio",
    location: "Green, OH",
  },
  {
    id: "patio-2",
    src: "/images/patios-2.jpg",
    alt: "Stamped concrete patio design",
    category: "patios",
    title: "Stamped Patio",
    location: "Jackson Township, OH",
  },
  {
    id: "patio-3",
    src: "/images/patios-3.jpg",
    alt: "Circular stamped concrete patio",
    category: "patios",
    title: "Circular Patio Design",
    location: "Canton, OH",
  },
  {
    id: "patio-4",
    src: "/images/patios-4.jpg",
    alt: "Large patio with fresh finish",
    category: "patios",
    title: "Extended Patio",
    location: "Louisville, OH",
  },
  {
    id: "patio-5",
    src: "/images/patios-5.jpg",
    alt: "Covered porch concrete floor",
    category: "patios",
    title: "Covered Porch",
    location: "Hartville, OH",
  },
  // Walkways
  {
    id: "walk-1",
    src: "/images/walkways-1.jpg",
    alt: "Residential walkway leading to entrance",
    category: "walkways",
    title: "Front Walkway",
    location: "Alliance, OH",
  },
  {
    id: "walk-2",
    src: "/images/walkways-2.jpg",
    alt: "Curved walkway installation",
    category: "walkways",
    title: "Curved Walkway",
    location: "Canton, OH",
  },
  {
    id: "walk-3",
    src: "/images/walkways-3.jpg",
    alt: "Garden path walkway",
    category: "walkways",
    title: "Garden Path",
    location: "Massillon, OH",
  },
  {
    id: "walk-4",
    src: "/images/walkways-4.jpg",
    alt: "Side yard walkway",
    category: "walkways",
    title: "Side Walkway",
    location: "North Canton, OH",
  },
  {
    id: "walk-5",
    src: "/images/walkways-5.jpg",
    alt: "Decorative walkway pattern",
    category: "walkways",
    title: "Decorative Walkway",
    location: "Green, OH",
  },
  // Steps & Entrances (from numbered images based on screenshot)
  {
    id: "steps-1",
    src: "/images/502938383_122215047842170624_1173453232484238679_n.jpg",
    alt: "Concrete steps with deterioration needing repair",
    category: "steps",
    title: "Step Repair Project",
    location: "Canton, OH",
  },
  {
    id: "steps-2",
    src: "/images/556911417_122233854608170624_5924657819992218567_n.jpg",
    alt: "Front entrance concrete steps",
    category: "steps",
    title: "Entrance Steps",
    location: "Akron, OH",
  },
  {
    id: "steps-3",
    src: "/images/559323596_122233854596170624_1694343454983765098_n.jpg",
    alt: "Side entrance with new concrete",
    category: "steps",
    title: "Side Entrance",
    location: "Massillon, OH",
  },
  // Repairs
  {
    id: "repair-1",
    src: "/images/repair1.png",
    alt: "Concrete repair before and after",
    category: "repair",
    title: "Crack Repair",
    location: "Canton, OH",
  },
  {
    id: "repair-2",
    src: "/images/repair2.png",
    alt: "Foundation repair work",
    category: "repair",
    title: "Foundation Repair",
    location: "North Canton, OH",
  },
  {
    id: "repair-3",
    src: "/images/repair3.png",
    alt: "Sidewalk section replacement",
    category: "repair",
    title: "Sidewalk Repair",
    location: "Massillon, OH",
  },
  {
    id: "repair-4",
    src: "/images/repair4.png",
    alt: "Driveway section repair",
    category: "repair",
    title: "Driveway Repair",
    location: "Green, OH",
  },
  // Additional projects from numbered images
  {
    id: "patio-6",
    src: "/images/550456371_122232436436170624_9186343151087704585_n.jpg",
    alt: "Large backyard patio installation",
    category: "patios",
    title: "Backyard Patio",
    location: "Jackson Township, OH",
  },
  {
    id: "patio-7",
    src: "/images/552532545_122232436400170624_1381580649810973763_n.jpg",
    alt: "Stamped concrete patio with border",
    category: "patios",
    title: "Stamped Patio",
    location: "Louisville, OH",
  },
];

