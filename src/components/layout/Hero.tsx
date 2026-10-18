import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl"
      >
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
          UI/UX <br />
          <span className="text-gray-400">DESIGNER</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-xl leading-relaxed font-light"
          >
            {SITE_CONFIG.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm uppercase tracking-widest font-medium underline underline-offset-4"
          >
            <a href="/work" className="hover:text-gray-500 transition-colors">
              View Selected Works →
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
