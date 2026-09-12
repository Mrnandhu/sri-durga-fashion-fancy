import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sri Durga Fashion & Fancy | Ladies' Clothing & Fancy Store",
  description: "Sri Durga Fashion & Fancy — ladies' clothing, sarees, jewellery, bangles, accessories and fancy essentials in Pothavaram, Nallajerla Mandal, Andhra Pradesh.",
  keywords: ["Sri Durga Fashion & Fancy", "ladies clothing", "sarees", "fancy store", "jewellery", "Pothavaram", "Nallajerla"],
  openGraph: {
    title: "Sri Durga Fashion & Fancy",
    description: "Ladies' clothing, sarees, jewellery and fancy essentials.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
