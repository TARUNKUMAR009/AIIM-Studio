import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    desc: "Perfect for new brands testing the waters.",
    features: ["10 AI Product Images", "2 AI UGC Videos", "48-Hour Delivery", "1 Round of Revisions"]
  },
  {
    name: "Growth",
    price: "$1,499",
    desc: "Our most popular plan for scaling brands.",
    features: ["50 AI Product Images", "10 AI UGC Videos", "24-Hour Delivery", "Unlimited Revisions", "A/B Testing Support"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For brands that need massive creative volume.",
    features: ["Unlimited Assets", "Dedicated Account Manager", "Custom AI Model Training", "Full Social Management"]
  }
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-headline font-bold mb-4">Pricing That Scales With You</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">High-performance content shouldn't break the bank.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className={`p-10 rounded-3xl ghost-border flex flex-col relative ${plan.popular ? 'bg-surface border-accent shadow-2xl shadow-accent/10' : 'bg-surface/50'}`}>
            {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-black text-xs font-bold rounded-full uppercase tracking-widest">Most Popular</span>}
            <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-headline font-bold">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-on-surface-variant text-sm">/mo</span>}
            </div>
            <p className="text-on-surface-variant text-sm mb-8">{plan.desc}</p>
            <div className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feat, i) => (
                <div key={i} className="flex gap-3 items-center text-sm">
                  <CheckCircle2 className="text-accent w-4 h-4 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <button className={`w-full py-4 rounded-full font-bold transition-all ${plan.popular ? 'bg-accent text-black hover:scale-105' : 'bg-surface-high text-white hover:bg-white/10'}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
