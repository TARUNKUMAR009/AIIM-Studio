export default function Logos() {
  const brands = ["LUMINA", "AETHER", "VORA", "NEXUS", "GLOSS"];
  return (
    <section className="py-12 bg-surface/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-on-surface-variant/50 mb-10">Powering high-growth brands globally</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <span key={brand} className="text-2xl font-bold font-headline">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
