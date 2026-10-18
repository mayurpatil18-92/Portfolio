"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import ProjectGrid from "@/components/layout/ProjectGrid";

export default function Home() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <main className="bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <ProjectGrid />

      {/* Footer */}
      <footer className="px-6 py-20 text-center border-t border-black/5 mt-20">
        <p className="text-sm text-gray-400 font-light">
          © {year} Your Name. Designed with intention.
        </p>
      </footer>
    </main>
  );
}
