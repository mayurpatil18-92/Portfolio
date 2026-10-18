"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG, NAVIGATION } from "@/constants";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white px-6 py-8 flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter"
      >
        <Link href="/">{SITE_CONFIG.name}</Link>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex gap-8 text-sm font-medium uppercase tracking-widest"
      >
        {NAVIGATION.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="hover:opacity-50 transition-opacity duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
}
