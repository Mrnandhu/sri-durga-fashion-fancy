import { ArrowUpRight } from "lucide-react";

export default function Intro() {
  return (
    <section id="about" className="bg-[#eee9df] py-28 text-[#171512] md:py-40">
      <div className="container-wide">
        <div className="grid gap-14 md:grid-cols-[1fr_2fr] md:gap-20">
          <p className="text-[9px] uppercase tracking-[.3em] text-black/45">The Store</p>
          <div>
            <h2 className="editorial-title">Fashion,<br /><span className="italic text-black/45">for how you feel.</span></h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <p className="text-sm leading-7 text-black/60">Sri Durga Fashion & Fancy is a local ladies' clothing and fancy store serving customers with sarees, clothing, jewellery and everyday accessories.</p>
              <p className="text-sm leading-7 text-black/60">From sarees and chudidars to bangles, earrings, hair accessories, bindis and more, the store brings many everyday fashion essentials together in one place.</p>
            </div>
            <a href="#collections" className="group mt-12 inline-flex items-center gap-3 border-b border-black/25 pb-3 text-[10px] uppercase tracking-[.2em]">What we offer <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
