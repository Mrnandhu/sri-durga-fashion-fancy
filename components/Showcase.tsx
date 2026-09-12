"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Sarees",
    meta: "Cotton · Fancy · Silk · From ₹200",
    image: "/images/products/sarees.png",
  },
  {
    title: "Ladies' Clothing",
    meta: "Chudidars · Dress Materials · Leggings",
    image: "/images/products/dress-material.png",
  },
  {
    title: "Jewellery",
    meta: "Necklaces · Earrings · Chains · Rings",
    image: "/images/products/necklace-set.png",
  },
  {
    title: "Bangles & Bracelets",
    meta: "Traditional · Fancy · Roll-gold",
    image: "/images/products/roll-gold-bangles.png",
  },
  {
    title: "Beauty & Accessories",
    meta: "Bindis · Nail Polish · Hair Accessories",
    image: "/images/products/nail-polish.png",
  },
  {
    title: "Fancy Essentials",
    meta: "Key Chains · Small Fancy Items",
    image: "/images/products/keychains.png",
  },
];

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="bg-[#171714] py-24 md:py-36"
    >
      <div className="container-wide">
        <div className="mb-16 flex flex-col justify-between gap-7 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#c8b48a]">
              The Collection
            </p>

            <h2 className="editorial-title">
              A glimpse of
              <br />
              <span className="italic text-white/45">
                what&apos;s in store.
              </span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-white/45">
            From colourful sarees and traditional jewellery to everyday beauty
            accessories and little fancy essentials.
          </p>
        </div>

        <div className="grid gap-x-7 gap-y-16 md:grid-cols-12 md:gap-y-24">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
              }}
              className={
                index % 3 === 0
                  ? "md:col-span-7"
                  : "md:col-span-5 md:mt-24"
              }
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                <Image
                  src={product.image}
                  alt={`${product.title} at Sri Durga Fashion & Fancy`}
                  fill
                  loading="lazy"
                  className="object-cover transition duration-1000 hover:scale-[1.035]"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>

              <div className="mt-4 border-t border-white/15 pt-4">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#c8b48a]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="mt-1 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl tracking-[-0.03em]">
                    {product.title}
                  </h3>

                  <p className="text-right text-[9px] uppercase tracking-[0.13em] text-white/35">
                    {product.meta}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
