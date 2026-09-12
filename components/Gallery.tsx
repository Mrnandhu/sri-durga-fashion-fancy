import { site } from "@/data/site";

export default function Gallery() {
  return (
    <section className="bg-[#eee9df] py-28 text-[#171512] md:py-40">
      <div className="container-wide">
        <div className="mb-14"><p className="mb-6 text-[9px] uppercase tracking-[.3em] text-black/40">Inside the store</p><h2 className="editorial-title">A closer<br /><span className="italic text-black/40">look.</span></h2></div>
        <div className="grid gap-4 md:grid-cols-[1.35fr_.65fr]">
          <div className="aspect-[4/5] overflow-hidden md:aspect-[3/4]"><img src={site.temporaryImages.hero} alt="Temporary fashion-store visual reference" className="h-full w-full object-cover" /></div>
          <div className="flex flex-col gap-4"><div className="aspect-[4/3] overflow-hidden"><img src={site.temporaryImages.jewellery} alt="Temporary jewellery visual reference" className="h-full w-full object-cover" /></div><div className="flex flex-1 items-end border-t border-black/15 pt-5"><p className="max-w-xs text-sm leading-7 text-black/55">Real shop and product photographs will replace these temporary references in the final version.</p></div></div>
        </div>
      </div>
    </section>
  );
}
