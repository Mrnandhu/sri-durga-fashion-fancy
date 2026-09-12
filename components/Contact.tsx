import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";

const phone = "+918096748489";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#11110f] py-24 md:py-36">
      <div className="container-wide">
        <div className="border-t border-white/15 pt-7">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c8b48a]">Let's Connect</p>
          <div className="mt-14 flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <h2 className="editorial-title max-w-4xl">Looking for<br /><span className="italic text-white/45">something special?</span></h2>
            <p className="max-w-xs text-sm leading-7 text-white/45">Call or message Sri Durga Fashion & Fancy for questions about the store and its collections.</p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            <a href={`tel:${phone}`} className="group flex items-center justify-between border border-white/15 px-5 py-5 transition hover:border-white/35 hover:bg-white/[0.03]">
              <span className="flex items-center gap-4"><Phone size={17} /><span className="text-[10px] uppercase tracking-[0.2em]">Call +91 80967 48489</span></span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="group flex items-center justify-between border border-white/15 px-5 py-5 transition hover:border-white/35 hover:bg-white/[0.03]">
              <span className="flex items-center gap-4"><MessageCircle size={17} /><span className="text-[10px] uppercase tracking-[0.2em]">WhatsApp Us</span></span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <footer className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.18em] text-white/30 sm:flex-row">
            <span>Sri Durga Fashion & Fancy</span>
            <span>Ladies' Clothing / Jewellery / Fancy</span>
            <span>© 2026</span>
          </footer>
        </div>
      </div>
    </section>
  );
}
