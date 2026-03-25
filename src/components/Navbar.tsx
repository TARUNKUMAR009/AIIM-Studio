import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-accent font-headline">
          AIIM Studio
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-accent font-bold border-b-2 border-accent pb-1 font-headline tracking-tight text-sm uppercase" href="#">Services</a>
          <a className="text-neutral-400 hover:text-white transition-colors font-headline tracking-tight text-sm uppercase" href="#">Portfolio</a>
          <a className="text-neutral-400 hover:text-white transition-colors font-headline tracking-tight text-sm uppercase" href="#">Pricing</a>
          <a className="text-neutral-400 hover:text-white transition-colors font-headline tracking-tight text-sm uppercase" href="#">How It Works</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-black px-6 py-2.5 rounded-full font-bold text-sm"
        >
          Get Free Demo
        </motion.button>
      </div>
    </nav>
  );
}
