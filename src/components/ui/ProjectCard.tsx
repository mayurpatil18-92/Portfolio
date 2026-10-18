import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full mb-32 last:mb-0"
    >
      <Link href={project.link} className="block overflow-hidden bg-gray-100">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] w-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </Link>

      <div className="mt-6 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold tracking-tighter group-hover:italic transition-all">
            {project.title}
          </h3>
          <p className="text-gray-500 font-light">{project.category}</p>
        </div>
        <span className="text-sm font-mono text-gray-400">{project.year}</span>
      </div>
    </motion.div>
  );
}
