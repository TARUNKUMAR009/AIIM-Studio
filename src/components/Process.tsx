const steps = [
  { num: "01", title: "Onboarding", desc: "Upload your raw product shots or share your brand vision." },
  { num: "02", title: "AI Magic", desc: "Our AI engine creates hundreds of hyper-realistic variations." },
  { num: "03", title: "Curation", desc: "We hand-select the winners that align with your goals." },
  { num: "04", title: "Delivery", desc: "Get your conversion-ready assets in less than 48 hours." }
];

export default function Process() {
  return (
    <section className="py-32 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-headline font-bold">Simple. Fast. Seamless.</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center group">
              <div className="w-20 h-20 bg-surface rounded-3xl ghost-border flex items-center justify-center mx-auto mb-8 group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                <span className="text-3xl font-headline font-bold">{step.num}</span>
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-on-surface-variant text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
