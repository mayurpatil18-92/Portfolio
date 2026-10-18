export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  year: string;
  heroImage: string;
  overview: {
    problem: string;
    solution: string;
    role: string;
    timeline: string;
  };
  sections: Array<{
    type: "text" | "image" | "grid";
    title?: string;
    content?: string;
    images?: string[];
  }>;
}
