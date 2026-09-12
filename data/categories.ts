export type Category = {
  number: string;
  title: string;
  description: string;
  images: string[];
};

export const categories: Category[] = [
  {
    number: "01",
    title: "Sarees",
    description:
      "Cotton, fancy, silk and more, with sarees starting from ₹200.",
    images: [
      "/images/products/cotton-saree.png",
      "/images/products/fancy-saree.png",
      "/images/products/silk-saree.png",
      "/images/products/sarees.png",
    ],
  },
  {
    number: "02",
    title: "Ladies' Clothing",
    description:
      "Chudidars, dress materials, leggings and nightwear for everyday style.",
    images: [
      "/images/products/chudidhar.png",
      "/images/products/dress-material.png",
      "/images/products/leggings.jpg",
    ],
  },
  {
    number: "03",
    title: "Jewellery",
    description:
      "Roll-gold / 1 gram gold jewellery, chains, necklaces, earrings and rings.",
    images: [
      "/images/products/necklace-set.png",
      "/images/products/chains.png",
      "/images/products/earrings.png",
      "/images/products/rings.png",
    ],
  },
  {
    number: "04",
    title: "Bangles & Bracelets",
    description:
      "Traditional and colourful bangles, roll-gold styles and fancy bracelets.",
    images: [
      "/images/products/bangles.png",
      "/images/products/traditional-bangles.png",
      "/images/products/roll-gold-bangles.png",
      "/images/products/bracelets.png",
    ],
  },
  {
    number: "05",
    title: "Beauty & Accessories",
    description:
      "Bindis, nail polishes, hair accessories, mehndi cones and more.",
    images: [
      "/images/products/bindis.png",
      "/images/products/nail-polish.png",
      "/images/products/hair-accessories.png",
      "/images/products/mehndi-cones.png",
    ],
  },
  {
    number: "06",
    title: "Fancy Essentials",
    description:
      "Key chains and other small fancy items, with key chains starting from ₹20.",
    images: [
      "/images/products/keychains.png",
      "/images/products/keychains-2.png",
    ],
  },
];
