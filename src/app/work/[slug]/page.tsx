import { CASE_STUDIES } from "@/constants/case-studies";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

// Motion components extracted to a client-only wrapper to prevent prerender errors
import { motion } from "framer-motion";

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({
    slug: slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = CASE_STUDIES[slug];

  if (!project) notFound();

  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">{project.title}</h1>
          <img src={project.heroImage} className="w-full aspect-video object-cover mb-12" alt={project.title} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/10 pt-12">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Role</h4>
              <p className="text-lg">{project.overview.role}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Timeline</h4>
              <p className="text-lg">{project.overview.timeline}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Category</h4>
              <p className="text-lg">{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4">The Problem</h2>
            <p className="text-2xl font-light leading-relaxed">{project.overview.problem}</p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4">The Solution</h2>
            <p className="text-2xl font-light leading-relaxed">{project.overview.solution}</p>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        {project.sections.map((section, i) => (
          <div key={i} className="mb-32">
            {section.type === "text" && (
              <div className="mb-10">
                {section.title && <h3 className="text-3xl font-bold mb-6 tracking-tight">{section.title}</h3>}
                <p className="text-xl text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            )}
            {section.type === "image" && (
              <img src={section.images?.[0]} className="w-full object-cover" alt="Detail" />
            )}
            {section.type === "grid" && (
              <div>
                {section.title && <h3 className="text-3xl font-bold mb-6 tracking-tight">{section.title}</h3>}
                {section.content && <p className="text-xl text-gray-600 leading-relaxed mb-8">{section.content}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.images?.map((img, idx) => (
                    <img key={idx} src={img} className="w-full object-cover" alt="Detail" />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
