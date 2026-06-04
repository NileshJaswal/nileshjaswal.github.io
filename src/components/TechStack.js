import React from "react";

export default function TechStack() {
  const stack = [
    "Hubspot CMS CLI",
    "Webflow Client-First",
    "Figma UI/UX",
    "GSAP Animations",
    "AI-Assisted Workflows",
    "JavaScript ES6+",
    "HTML5 / CSS3",
    "Marketo LP Development"
  ];

  const marqueeItems = [...stack, ...stack];

  return (
    <section className="py-20 border-y border-border-light bg-cardbg overflow-hidden relative flex flex-col">
      
      {/* Infinite Marquee Track (For Visual Flair) */}
      <div className="relative flex items-center mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cardbg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cardbg to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center mx-8 group cursor-default">
              <span className="text-3xl md:text-5xl font-mono font-bold text-border-light whitespace-nowrap transition-colors duration-300 group-hover:text-white">
                {item}
              </span>
              <span className="mx-8 text-accent text-3xl">/</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scannable Grid (For Recruiters) */}
      <div className="container mx-auto px-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-8 border-b border-border-light pb-4">Core Competencies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stack.map((item, idx) => (
            <div key={idx} className="p-4 border border-border-light rounded-lg bg-mainbg flex items-center gap-3 hover:border-accent transition-colors">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-sm font-mono text-text-primary">{item}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
