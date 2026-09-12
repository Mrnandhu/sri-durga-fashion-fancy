import { ArrowUpRight, MapPin } from "lucide-react";

export default function VisitStore() {
  return (
    <section id="visit" className="bg-[#c8b48a] py-24 text-[#171612] md:py-36">
      <div className="container-wide">
        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">Visit Us</p>
            <h2 className="editorial-title mt-7">Come see<br /><span className="italic text-black/45">the collection.</span></h2>
          </div>

          <div className="border-t border-black/20 pt-6">
            <div className="flex gap-4">
              <MapPin size={18} className="mt-1 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em]">Sri Durga Fashion & Fancy</p>
                <p className="mt-4 max-w-md text-sm leading-7 text-black/65">Near High School<br />Pothavaram, Nallajerla Mandal<br />Andhra Pradesh — 543176</p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="border-t border-black/20 pt-4">
                <p className="text-[9px] uppercase tracking-[0.2em] text-black/45">Shop Hours</p>
                <p className="mt-2 text-sm">10:00 AM — 8:00 PM</p>
                <p className="mt-1 text-[10px] text-black/45">Operating days — to be confirmed</p>
              </div>
              <div className="border-t border-black/20 pt-4">
                <p className="text-[9px] uppercase tracking-[0.2em] text-black/45">Location</p>
                <p className="mt-2 text-sm">Google Maps link coming soon.</p>
              </div>
            </div>

            <a href="#contact" className="group mt-10 inline-flex items-center gap-3 border-b border-black/30 pb-3 text-[10px] uppercase tracking-[0.2em]">
              Get directions
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
