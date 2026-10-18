"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import ProjectGrid from "@/components/layout/ProjectGrid";

export default function Home() {
  return (
    <main className="bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <ProjectGrid />

      {/* Footer */}
      <footer className="px-6 py-20 text-center border-t border-black/5 mt-20">
        <p className="text-sm text-gray-400 font-light">
          © {new Date().getFullYear()} Your Name. Designed with intention.
        </p>
      </footer>
    </main>
  );
}
