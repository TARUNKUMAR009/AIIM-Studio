import { Mail, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="bg-surface rounded-[4rem] p-16 md:p-24 ghost-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tighter">Ready to<br/>Scale Your Brand?</h2>
            <p className="text-on-surface-variant text-xl max-w-md">Book a free 15-minute content audit and see how AIIM Studio can transform your creative output.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <span>hello@aiimstudio.com</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          <form className="bg-surface-high p-10 rounded-[2.5rem] ghost-border space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Name</label>
                <input type="text" className="w-full bg-surface p-4 rounded-xl ghost-border outline-none focus:border-accent transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email</label>
                <input type="email" className="w-full bg-surface p-4 rounded-xl ghost-border outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
              <textarea rows={4} className="w-full bg-surface p-4 rounded-xl ghost-border outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us about your brand..."></textarea>
            </div>
            <button className="w-full py-5 bg-accent text-black font-bold rounded-2xl text-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
              Send Message <MessageSquare className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
