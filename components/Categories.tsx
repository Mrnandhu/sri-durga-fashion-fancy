"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/categories";

export default function Categories() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="offer" className="border-t border-white/10 bg-[#11110f] py-24 md:py-36">
      <div className="container-wide">
        <div className="grid gap-14 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c8b48a]">What We Offer</p>
          </div>
          <div>
            <h2 className="editorial-title max-w-4xl">A little bit of<br /><span className="italic text-white/45">everything beautiful.</span></h2>
            <div className="mt-16 border-t border-white/15">
              {categories.map((category, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={category.title} className="border-b border-white/15">
                    <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} className="group flex w-full items-center justify-between py-6 text-left md:py-7">
                      <div className="flex items-center gap-6 md:gap-8">
                        <span className="text-[9px] tracking-[0.2em] text-white/30">{category.number}</span>
                        <h3 className="text-xl tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">{category.title}</h3>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                        {isOpen ? <Minus size={18} className="text-[#c8b48a]" /> : <Plus size={18} className="text-white/35" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25 } }} className="overflow-hidden">
                          <div className="grid grid-cols-2 gap-3 pb-8 pt-1 md:grid-cols-[180px_180px_1fr] md:gap-5">
                            {category.images.map((image, imageIndex) => (
                              <motion.div key={image} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: imageIndex * 0.06 }} className="aspect-[4/5] overflow-hidden bg-white/5">
                                <img src={image} alt={`${category.title} product detail ${imageIndex + 1}`} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]" />
                              </motion.div>
                            ))}
                            <div className="col-span-2 flex items-center md:col-span-1">
                              <p className="max-w-md text-xs leading-6 text-white/50 md:text-sm md:leading-7">{category.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
