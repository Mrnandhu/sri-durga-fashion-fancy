export const site = {
  name: "Sri Durga Fashion & Fancy",
  phone: "+918096748489",
  displayPhone: "+91 80967 48489",
  address: [
    "Near High School",
    "Pothavaram",
    "Nallajerla Mandal",
    "Andhra Pradesh",
    "PIN 543176",
  ],
  hours: "10:00 AM — 8:00 PM",
  mapsUrl: "",
  temporaryImages: {
    hero: "/images/hero-products.png",
    saree: "/images/hero-products.png",
    jewellery: "/images/products/necklace-set.png",
    bangles: "/images/products/necklace-set.png",
  },
} as const;

export const categories = [
  {
    number: "01",
    title: "Sarees",
    detail: "Cotton · Fancy · Silk · and more",
    price: "From ₹200",
  },
  {
    number: "02",
    title: "Ladies' Clothing",
    detail: "Chudidars · Dress materials · Leggings · Nightwear",
  },
  {
    number: "03",
    title: "Jewellery",
    detail: "Roll-gold / 1 gram gold · Rings · Earrings",
  },
  {
    number: "04",
    title: "Bangles & Bracelets",
    detail: "Traditional and everyday styles",
  },
  {
    number: "05",
    title: "Beauty & Accessories",
    detail: "Bindis · Nail polish · Hair accessories · Mehndi cones",
  },
  {
    number: "06",
    title: "Fancy Essentials",
    detail: "Key chains · Small gifts · Everyday fancy items",
  },
] as const;
