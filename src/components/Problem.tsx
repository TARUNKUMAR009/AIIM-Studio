import { motion } from "motion/react";
import { CameraOff, TrendingDown, TimerOff } from "lucide-react";

const problems = [
  {
    icon: <CameraOff className="w-6 h-6" />,
    title: "Low-Quality Assets",
    description: "Grainy, poorly lit images that scream \"amateur\" and destroy your brand's perceived value instantly."
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Stagnant Sales",
    description: "Ads that don't stop the scroll. You're burning through your marketing budget with zero ROAS to show for it."
  },
  {
    icon: <TimerOff className="w-6 h-6" />,
    title: "Slow Turnarounds",
    description: "Waiting weeks for photographers and editors while your competitors launch three new campaigns."
  }
];

export default function Problem() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl md:text-6xl font-headline font-bold">The Content Struggle is Real</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Scaling a brand without high-quality visuals is like running a race with your shoes tied together.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="p-10 rounded-xl bg-surface/50 ghost-border group hover:bg-surface transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center mb-6 text-error">
              {problem.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
