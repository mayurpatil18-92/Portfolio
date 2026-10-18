"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { SITE_CONFIG } from "@/constants";

export default function AboutPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />

      <section className="pt-32 px-6 pb-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-16">
            ABOUT<br />ME
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Bio Section */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl font-light leading-relaxed"
            >
              <p className="mb-8">
                I am a UI/UX Designer dedicated to creating
                <span className="font-bold italic"> intentional digital experiences</span>.
                My approach blends rigorous user research with a minimalist aesthetic,
                ensuring that beauty never comes at the cost of usability.
              </p>
              <p className="text-gray-500">
                With a background in visual communication, I specialize in
                building scalable design systems and intuitive interfaces
                that help brands connect with their users on a deeper, more emotional level.
              </p>
            </motion.div>
          </div>

          {/* Skills/Details Section */}
          <div className="md:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-6">Expertise</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex justify-between border-b border-black/5 pb-2">
                  <span>Product Design</span>
                  <span className="text-gray-400 font-mono">01</span>
                </li>
                <li className="flex justify-between border-b border-black/5 pb-2">
                  <span>UX Research</span>
                  <span className="text-gray-400 font-mono">02</span>
                </li>
                <li className="flex justify-between border-b border-black/5 pb-2">
                  <span>Design Systems</span>
                  <span className="text-gray-400 font-mono">03</span>
                </li>
                <li className="flex justify-between border-b border-black/5 pb-2">
                  <span>Interaction Design</span>
                  <span className="text-gray-400 font-mono">04</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-6">Toolbox</h3>
              <div className="flex flex-wrap gap-3">
                {["Figma", "Framer", "Adobe CC", "Webflow", "Notion"].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-gray-100 text-sm font-medium rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-32 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Let's create something <br />meaningful together.
          </h2>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-block text-xl underline underline-offset-8 hover:text-gray-400 transition-colors"
          >
            {SITE_CONFIG.email}
          </a>
        </motion.div>
      </section>
    </main>
  );
}
