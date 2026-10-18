import React from "react";
import { PROJECTS } from "@/constants/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-medium mb-4">
          Selected Works
        </h2>
        <div className="h-px w-full bg-black/10" />
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
