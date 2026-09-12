"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Thoughtful architectural solutions shaped around structure, proportion, light, and the way people experience a space.",
    image: "/projects/casa.jpg",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Interiors where materials, furniture, lighting, and spatial details work together to create a cohesive experience.",
    image: "/projects/house-light.jpg",
  },
  {
    number: "03",
    title: "Hospitality",
    description:
      "Distinctive environments for hotels, restaurants, and hospitality spaces that balance identity, comfort, and memorable experiences.",
    image: "/projects/forma.jpg",
  },
  {
    number: "04",
    title: "Residential",
    description:
      "Considered homes shaped around the people who live there, with attention to comfort, privacy, material, and everyday life.",
    image: "/projects/casa.jpg",
  },
  {
    number: "05",
    title: "Commercial",
    description:
      "Professional environments designed to support the identity, function, and experience of modern businesses.",
    image: "/projects/atelier.jpg",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="services"
      className="border-t border-white/10 bg-[#11110f] py-28 md:py-40"
    >
      <div className="container-wide">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c8b48a]">
              Capabilities
            </p>
          </div>

          <div>
            <h2 className="editorial-title mb-20">
              How we
              <br />
              <span className="italic text-white/45">shape space.</span>
            </h2>

            <div className="border-t border-white/15">
              {services.map((service, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={service.title}
                    className="border-b border-white/15"
                  >
                    <button
                      type="button"
                      onClick={() => toggleService(index)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between py-7 text-left"
                    >
                      <div className="flex items-center gap-8">
                        <span className="text-[10px] tracking-[0.2em] text-white/30">
                          {service.number}
                        </span>

                        <h3 className="text-2xl tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                          {service.title}
                        </h3>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                        {isOpen ? (
                          <Minus
                            size={19}
                            className="text-[#c8b48a]"
                          />
                        ) : (
                          <Plus
                            size={19}
                            className="text-white/35 transition-transform duration-300 group-hover:rotate-45"
                          />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.45,
                              ease: [0.16, 1, 0.3, 1],
                            },
                            opacity: {
                              duration: 0.25,
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-8 pb-9 pt-2 sm:grid-cols-[180px_1fr] md:grid-cols-[240px_1fr]">
                            <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                              <motion.img
                                src={service.image}
                                alt={service.title}
                                initial={{ scale: 1.05, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="h-full w-full object-cover"
                              />
                            </div>

                            <div className="flex items-center">
                              <p className="max-w-lg text-sm leading-7 text-white/55 md:text-base">
                                {service.description}
                              </p>
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
