import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2 space-y-8">
            <div className="text-3xl font-bold tracking-tighter text-accent font-headline">
              AIIM Studio
            </div>
            <p className="text-on-surface-variant max-w-sm leading-relaxed">
              High-performance AI content agency for D2C brands. We specialize in product imagery and UGC videos that drive massive conversions.
            </p>
            <div className="flex gap-6 text-on-surface-variant">
              <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest text-accent">Company</h5>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our Process</li>
              <li className="hover:text-white cursor-pointer transition-colors">Portfolio</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest text-accent">Services</h5>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">AI Product Imagery</li>
              <li className="hover:text-white cursor-pointer transition-colors">AI UGC Videos</li>
              <li className="hover:text-white cursor-pointer transition-colors">Social Management</li>
              <li className="hover:text-white cursor-pointer transition-colors">Content Audit</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-xs text-on-surface-variant/40 gap-4">
          <p>© 2026 AIIM Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
