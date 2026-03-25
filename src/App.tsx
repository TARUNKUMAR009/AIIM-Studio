/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Problem from "./components/Problem";
import Solutions from "./components/Solutions";
import Comparison from "./components/Comparison";
import Process from "./components/Process";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <Logos />
      <Problem />
      <Solutions />
      <Comparison />
      <Process />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

