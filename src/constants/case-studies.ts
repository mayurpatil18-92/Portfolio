import { CaseStudy } from "@/types/casestudy";

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "nova-banking": {
    id: "nova-banking",
    title: "Nova Banking App",
    category: "Fintech / UX Research",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1563986768609-4450v6f2c86e?auto=format&fit=crop&q=80&w=1200",
    overview: {
      problem: "Gen-Z users find traditional banking apps intimidating and overly complex, leading to poor financial literacy and app abandonment.",
      solution: "A gamified, minimalist banking experience that prioritizes intuitive navigation, visual spending patterns, and micro-learning modules.",
      role: "Lead UX Designer",
      timeline: "3 Months",
    },
    sections: [
      {
        type: "text",
        title: "The Research Phase",
        content: "Conducted user interviews with 15 participants aged 18-24. Discovered that the primary friction point was the lack of clear feedback when performing complex transactions.",
      },
      {
        type: "image",
        images: ["https://images.unsplash.com/photo-1586717791820-a9b850c767e8?auto=format&fit=crop&q=80&w=1200"],
      },
      {
        type: "grid",
        title: "Iterative Prototyping",
        content: "Moved from low-fidelity wireframes to high-fidelity prototypes, testing three different navigation patterns before settling on the bottom-sheet approach.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38a70?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1558655146-d09347736d6c?auto=format&fit=crop&q=80&w=600",
        ],
      },
    ],
  },
};
