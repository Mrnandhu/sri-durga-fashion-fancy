"use client";

import { motion } from "framer-motion";

const links = [
  { label: "What We Offer", href: "#categories" },
  { label: "Showcase", href: "#showcase" },
  { label: "Visit Us", href: "#visit" },
  { label: "Contact ↗", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-7 md:px-10">
        <div className="flex items-center gap-7 md:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[9px] uppercase tracking-[0.2em] text-black/70 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
