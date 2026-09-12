import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Showcase from "@/components/Showcase";
import VisitStore from "@/components/VisitStore";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="noise">
      <Navbar />
      <Hero />

      <section id="about" className="bg-[#e8e3d9] py-24 text-[#171612] md:py-36">
        <div className="container-wide">
          <div className="grid gap-14 md:grid-cols-[1fr_2fr] md:gap-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">The Store</p>
            <div>
              <h2 className="editorial-title">Fashion,<br /><span className="italic text-black/45">for how you feel.</span></h2>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <p className="text-sm leading-7 text-black/60">Sri Durga Fashion & Fancy is a local ladies fashion and fancy store offering sarees, clothing, jewellery and everyday accessories.</p>
                <p className="text-sm leading-7 text-black/60">From traditional sarees and jewellery to bangles, beauty accessories and small fancy essentials, there is a little bit of everything beautiful to discover in store.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Categories />
      <Showcase />

      <section className="bg-[#1b1b18] py-24 md:py-36">
        <div className="container-wide">
          <p className="mb-10 text-[10px] uppercase tracking-[0.3em] text-[#c8b48a]">A Little Detail</p>
          <blockquote className="max-w-6xl text-[clamp(2.8rem,7vw,7rem)] leading-[0.9] tracking-[-0.065em]">The right detail can change <span className="italic text-white/45">the whole look.</span></blockquote>
        </div>
      </section>

      <VisitStore />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
