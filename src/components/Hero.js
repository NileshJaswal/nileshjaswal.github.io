import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import StaggeredText from "./StaggeredText";

export default function Hero() {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Delaying the GSAP animations slightly to allow the Framer Motion staggered text to start
      gsap.from(subtitleRef.current, { y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 1.5 });
      gsap.from(ctaRef.current, { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 1.8 });
      
      gsap.to(".hero-orb", { rotate: 360, duration: 20, repeat: -1, ease: "linear" });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-mainbg">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>
      <div className="hero-orb absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-20">
        
        <div className="mb-6 px-4 py-2 rounded-full border border-accent/50 bg-accent/10 text-accent font-mono text-sm tracking-widest uppercase">
          Open to New Opportunities
        </div>

        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[1.1] text-white">
            <StaggeredText text="HubSpot / " delay={0.2} staggerDuration={0.05} />
            <br />
            <StaggeredText 
              text="Landing Page Developer." 
              delay={0.7} 
              staggerDuration={0.04}
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white inline-block"
            />
          </h1>
        </div>
        
        <div className="overflow-hidden mb-12">
          <p ref={subtitleRef} className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I am <strong className="text-white">Nilesh Jaswal</strong>. A UI/UX Designer turned Frontend Engineer specializing in custom <strong className="text-white font-mono text-sm tracking-tight">HubSpot CMS</strong> architectures, <strong className="text-white font-mono text-sm tracking-tight">Webflow CLI</strong> integrations, and <strong className="text-white font-mono text-sm tracking-tight">AI-Assisted Workflows</strong>.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-[280px] sm:max-w-none mx-auto">
          <a href="/resume.pdf" target="_blank" className="relative group inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 w-full sm:w-auto text-sm md:text-base">
            <span className="relative z-10">Download Resume (PDF)</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {/* Glow effect behind button */}
            <div className="absolute -inset-2 bg-white/20 blur-xl rounded-full z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
