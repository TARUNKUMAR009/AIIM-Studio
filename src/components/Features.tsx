import { Bolt, CircleDollarSign, BarChart3, Infinity } from "lucide-react";

export default function Features() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 lg:row-span-2 p-12 rounded-[3rem] bg-surface ghost-border flex flex-col justify-end min-h-[400px]">
          <Bolt className="text-accent w-12 h-12 mb-8" />
          <h3 className="text-3xl font-bold font-headline mb-4">Insanely Fast</h3>
          <p className="text-on-surface-variant text-lg">Move from idea to live ad in hours, not weeks. Our AI pipeline is optimized for speed without sacrificing a single pixel of quality.</p>
        </div>
        <div className="p-8 rounded-[2rem] bg-surface-high ghost-border">
          <CircleDollarSign className="text-accent w-6 h-6 mb-4" />
          <h4 className="text-xl font-bold mb-2">80% Cheaper</h4>
          <p className="text-on-surface-variant text-sm">Eliminate models, travel, studios, and expensive editing hours.</p>
        </div>
        <div className="p-8 rounded-[2rem] bg-surface-high ghost-border">
          <BarChart3 className="text-accent w-6 h-6 mb-4" />
          <h4 className="text-xl font-bold mb-2">Data-Driven</h4>
          <p className="text-on-surface-variant text-sm">Visuals engineered based on millions of high-converting ad data points.</p>
        </div>
        <div className="lg:col-span-2 p-8 rounded-[2rem] bg-surface-high ghost-border flex items-center gap-8">
          <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
            <Infinity className="text-accent w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Unlimited Scalability</h4>
            <p className="text-on-surface-variant text-sm">Need 100 variations for A/B testing? We generate them with a click.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
