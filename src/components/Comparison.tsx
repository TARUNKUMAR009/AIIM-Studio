export default function Comparison() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-20">The AIIM Impact</h2>
      <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden ghost-border">
        <div className="relative bg-surface p-12 flex flex-col items-center justify-center group">
          <span className="absolute top-6 left-6 px-3 py-1 rounded bg-error text-black text-[10px] font-bold uppercase tracking-widest">Typical Agency</span>
          <img 
            className="w-full max-w-sm rounded-xl grayscale brightness-75 mb-8" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-FfMVQLAalCWTIgoHLdC4S4CaELLxwG6-g3MJjtPYPJzcORDxmVIcJiNLVSd4Z5Tm9bVUaeOU3RWmjlL1CFvrH9p9ObhG_Wvis0QZc-DnmdtZL-3Omf9bakwIs1Q1V2A5O6oYiSfBopwBurgWRZkxKSrv0DqjXZYh4rkc1zQjkJuZ0F2BxPzrDI7eL6698YQnasukTPiw9K9HJOicII9WI-EBWqmh582pc4rDA6-P_8t5LcRRd2sqAA3WdSQrOx5GvE0RtaJD8bI"
            alt="Typical Agency Quality"
            referrerPolicy="no-referrer"
          />
          <div className="text-center">
            <p className="text-lg font-bold text-error mb-2">High Cost, Average Quality</p>
            <p className="text-on-surface-variant text-sm">2-week turnaround • Expensive logistics • Zero optimization</p>
          </div>
        </div>
        <div className="relative bg-surface p-12 flex flex-col items-center justify-center group">
          <span className="absolute top-6 left-6 px-3 py-1 rounded bg-accent text-black text-[10px] font-bold uppercase tracking-widest">AIIM Studio</span>
          <img 
            className="w-full max-w-sm rounded-xl border-4 border-accent mb-8" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPIC-n5Swra3k8CZtTLQ7o7fZqldP7J17jCqQBBG5uJWKMHYxWV6by3IkfiDv0NEZu5Oh_yhPFREFMGkMlpzYS0aWH9ff0q6ktqZl7GHCnBO6WQFY1fQ_rYuVjmzBOUTABH3QmNCbO3N9BGsnge81m9zdBdOKU7voBt26_YdA9vcFZMfZa6b78Vi-A8XmX8jTM7pfV2in8ZsMD9Zy5qnVR9LPFhJIXvtmT5tp7rCsyqFogmV3GZh4Pb-s4DSeIqmA24yENb2sBwrQ"
            alt="AIIM Studio Quality"
            referrerPolicy="no-referrer"
          />
          <div className="text-center">
            <p className="text-lg font-bold text-accent mb-2">Low Cost, Elite Quality</p>
            <p className="text-on-surface-variant text-sm">24-hour turnaround • AI-optimized • High conversion</p>
          </div>
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
