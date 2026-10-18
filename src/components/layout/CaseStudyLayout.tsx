import React from "react";
import { motion } from "framer-motion";
import { CaseStudy } from "@/types/casestudy";

interface SectionProps {
  section: CaseStudy["sections"][0];
}

function Section({ section }: SectionProps) {
  if (section.type === "text") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 max-w-3xl"
      >
        {section.title && <h3 className="text-2xl font-bold mb-4 tracking-tight">{section.title}</h3>}
        <p className="text-lg text-gray-600 leading-relaxed">{section.content}</p>
      </motion.div>
    );
  }

  if (section.type === "image") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-20 w-full"
      >
        <img src={section.images?.[0]} alt="Project detail" className="w-full object-cover" />
      </motion.div>
    );
  }

  if (section.type === "grid") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        {section.title && <h3 className="text-2xl font-bold mb-4 tracking-tight">{section.title}</h3>}
        {section.content && <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">{section.content}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.images?.map((img, i) => (
            <img key={i} src={img} alt="Detail" className="w-full object-cover" />
          ))}
        </div>
      </motion.div>
    );
  }

  return null;
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // In Next.js 15, params is a Promise
  // For simplicity in this demo, I'll handle the slug lookup
  return null; // Logic moved to the dynamic route
}
