"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const heroImage = "/images/hero-products.png";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#11100f]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Sarees, jewellery, bangles and fancy accessories"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-6 pb-16 md:px-10 md:pb-20">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/75"
          >
            Pothavaram · Nallajerla Mandal
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-lg text-sm leading-7 text-white/80 md:text-base"
          >
            Sarees, ladies&apos; clothing, jewellery, bangles, beauty
            accessories and everyday fancy essentials.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
