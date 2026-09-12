"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section id="work" className="bg-[#11110f] py-28 md:py-40">
      <div className="container-wide">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#c8b48a]">
              Selected Work
            </p>

            <h2 className="editorial-title max-w-3xl">
              Spaces with
              <br />
              <span className="italic text-white/55">
                a sense of place.
              </span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-white/45">
            A selection of residential, hospitality and creative spaces
            exploring material, light and human experience.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              href="#"
              key={project.title}
              initial={false}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.05,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`group block ${
                index % 2 === 1 ? "md:mt-32" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/15" />

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 transition duration-500 group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between border-t border-white/15 pt-4">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[#c8b48a]">
                    {project.number}
                  </p>

                  <h3 className="text-2xl tracking-[-0.03em]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/40">
                    {project.category}
                  </p>
                </div>

                <div className="text-right text-[10px] uppercase tracking-[0.15em] text-white/35">
                  <p>{project.location}</p>
                  <p className="mt-1">{project.year}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
