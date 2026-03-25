import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-high text-on-surface-variant text-xs font-medium uppercase tracking-widest ghost-border">
            Next-Gen Content Agency
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter">
            Stop Guessing.<br/>
            <span className="text-accent text-glow italic">Start Converting.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
            High-performance AI product imagery and UGC videos designed specifically for D2C brands. Scale your creative output by 10x while slashing costs by 80%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,214,0,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-accent text-black font-bold rounded-full text-lg transition-all"
            >
              Book Your Content Audit
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-surface-high text-white font-bold rounded-full text-lg ghost-border transition-all"
            >
              View Portfolio
            </motion.button>
          </div>
          <div className="flex items-center gap-4 text-sm text-on-surface-variant/60">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background" 
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p>Joined by 250+ D2C Founders</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-accent/20 blur-[100px] rounded-full"></div>
          <div className="relative bg-surface p-4 rounded-xl ghost-border overflow-hidden">
            <img 
              alt="Premium Watch" 
              className="rounded-lg w-full object-cover aspect-[4/5]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAplp9ERIXxgdDVxTWsKYU-rMdWwjZSklMyHFC_NwRLl9zu-x8cMZQ0TfmBhgEcjGEGtLj-9_sEFC3TNLdDcAFHAZGKi1KV988X-6mMWJsSr6srHWfc5U1K6-dWDiYzczYmp6M2zWiSEClDvEjgOmEcdLfeO4T6_PflEMljpEuHSWvGY7eFxVna0W4EBIy-C1MplMKlk2jTzefroYs18dHCnYzrpvmpbkRPt7u_9jTEWokqILfLrLJaR2wGKDtX6d6VkCPcIue7ehM"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] bg-surface/80 backdrop-blur-xl p-6 rounded-xl ghost-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium uppercase text-accent">AI-Generated Content</span>
                <Sparkles className="text-accent w-4 h-4" />
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-accent"
                ></motion.div>
              </div>
              <p className="mt-4 text-sm font-medium">Optimization Score: 98%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
