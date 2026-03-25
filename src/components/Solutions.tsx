import { Sparkles, Video, Share2 } from "lucide-react";

const solutions = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI Product Imagery",
    description: "Studio-grade photoshoots without the studio. Unlimited environments, perfect lighting, every time."
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "AI UGC Videos",
    description: "Hyper-realistic creator content that feels organic and drives massive engagement on TikTok and Reels."
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Management",
    description: "Full-service distribution. We don't just make the content; we make sure it reaches your audience."
  }
];

const images = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeka9OJ1fKHp6k2hOEwH-hTMLox3HzzvP8QnJmFyg_WSrknZtlrVmqqm1aRqAbewOFaU-kfozoyyOQVyVNQHuvyIFrVo4qt-Z0m8F_0osrcz8W5R4L0ZO0Qwz7hGQcYUpoUw2Cx63H-KLwrmFUZvH-ZA2k8WfrJc5TtGBrnZLHPqO35cKATU1y9XT0PrDa1DpuWBptqUwetVb-6qV5HjjNpLZE7-GwavXlA8n3GzxziaT-eDZjWmYOabRu5FSHY7MhGXKMiP-cTgQ", aspect: "aspect-square" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPzSbE-brP89fk4DBxs7onNRKKycNUYIMHWuhPEj5MkAaypjuk_ayqwPCkXjhO6wvcBOUnD7hB-rA9BT88e2lcqLGC6F4i2PhEmH6kmnAlIsrihKJJwOGZMzoJ23rkffmV6ywlNCOFfs_TJKGQT2OLFPRgHnpfNBiGoo2t2JCp9QJsHgcbEEGKIwQthyjdR32qTSfvJiAgIxFEdZoVNpIXQ5f4H-Buz0A-e6PIhdAGnDBwC5cylj8cPVRskfoRTdA4bHbmpMfn3P4", aspect: "aspect-[3/4]" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD-GIk0oalAnU_ShydgqN-z9WBSPwkJgWodXLWaveo_huCq0oLJjSM_gMBJYmHjVdG8sPeYX1by0mjcXBBROkybWJ96lCL79lyumYGL53CBw2yRDe3si0HyB9UeEoQ46VKzswVFd7a58YwGlmnp4vcF0gylRdtMy-jC8idwdeGHbLiRty9nT5yrwjY3ZzFORCQNkesoQnd8ZxnK6Dw0VbZVC68QAXfqvT1A9jgmY5SfkZEUP9t5sdPJBmUVzRXT1nGhFjb7PPjcoU", aspect: "aspect-[3/4]" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKfZqMIDq6ErBEgPjJlYbHj04B0wDM9l38KGjf3FXlEw5HUnwNkpy2al2UpWHUEfXfaw8-b5QGucCkQN2JmacWrbO0ZCGT6hxBGxLX2gnuTpepYdpVoD8BOLbYAN75yb9CSBnInAYjT2aDuVzKA-6uu_JVDDR1TZZr1U_E6wTP3Vx8sjxpdcW5kizmCCNSBonUR2loZk9iaGOxwUgcKh9RyVpQqcouepcTHQD5dSOmORTGicM-_Id3cJgYjL47-wqN79kPwAKsqXA", aspect: "aspect-square" }
];

export default function Solutions() {
  return (
    <section className="py-32 px-6 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-accent font-medium uppercase tracking-widest text-xs mb-4 block">The Solution</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold leading-tight">Better content,<br/>Lower effort.</h2>
            </div>
            <div className="space-y-8">
              {solutions.map((sol, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center ${idx === 0 ? 'bg-accent text-black' : 'bg-surface-high text-accent ghost-border'}`}>
                    {sol.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{sol.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{sol.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {images.slice(0, 2).map((img, idx) => (
                <div key={idx} className={`${img.aspect} rounded-3xl overflow-hidden bg-surface ghost-border group`}>
                  <img 
                    src={img.src} 
                    alt="Product" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-12">
              {images.slice(2, 4).map((img, idx) => (
                <div key={idx} className={`${img.aspect} rounded-3xl overflow-hidden bg-surface ghost-border group`}>
                  <img 
                    src={img.src} 
                    alt="Product" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
