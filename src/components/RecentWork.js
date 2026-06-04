import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";
import pcmega from "../img/pcmega.png";
import conns from "../img/conns.png";
import block from "../img/block.png";
import signprice from "../img/signprice.png";
import sleep from "../img/sleep.png";

gsap.registerPlugin(ScrollTrigger);

export default function RecentWork() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Real Figma UI/UX Projects
  const projects = [
    { id: "01", title: "PC MegaMart", category: "UX A/B Testing & Figma", color: "#111111", img: pcmega, link: "https://pcmegamart.com.au/" },
    { id: "02", title: "We Will BlockYou", category: "UX Design & Figma", color: "#161616", img: block, link: "https://www.figma.com/design/YHBKNew97uejL15ISNnC0y/WWBU?node-id=0-363&t=8SLyTaTsLo3D4yRV-1" },
    { id: "03", title: "Sign Price Calculator", category: "UI/UX Design & Prototyping", color: "#1A1A1A", img: signprice, link: "https://www.figma.com/design/gOiTNF6ujvXvDSgBzgSm0T/Sign-Price-Calculator?node-id=10-743&t=NmMWekwVNyANAs1H-1" },
    { id: "04", title: "SleepCountry Canada", category: "Figma to E-Commerce", color: "#111111", img: sleep, link: "https://www.sleepcountry.ca/" },
    { id: "05", title: "Conn's", category: "UX Research & Design Systems", color: "#161616", img: conns, link: "https://www.conns.com/" },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      gsap.to(scrollContainerRef.current, {
        x: () => {
          const scrollWidth = scrollContainerRef.current.scrollWidth;
          // Simply translate by the total width minus viewport width
          // Since the left padding is inside the container, scrollWidth accounts for it perfectly.
          return -(scrollWidth - window.innerWidth);
        },
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1, // Smooth scrubbing
          // Increase the scroll duration (end value) so it doesn't zip by too fast
          end: () => "+=" + (scrollContainerRef.current.scrollWidth * 1.5),
          invalidateOnRefresh: true, // Recalculate on resize
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-6 md:py-8 bg-mainbg overflow-hidden relative h-screen w-full flex flex-col justify-center">
      <div className="container mx-auto px-6 relative z-10 w-full mb-4 md:mb-8 shrink-0">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-border-light pb-4 md:pb-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Selected <br/> <span className="text-text-secondary">Works.</span>
          </h2>
          <p className="text-text-secondary max-w-sm mt-4 md:mt-0 font-light font-mono text-xs md:text-sm uppercase tracking-widest hidden sm:block">
            A showcase of engineered interfaces and scalable front-end architectures.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Layout */}
      <div className="w-full flex-1 min-h-0 flex items-center relative overflow-hidden">
        <div 
          ref={scrollContainerRef} 
          className="flex gap-6 md:gap-10 w-max px-6 md:pl-[calc(50vw-45vh)] pr-[10vw]"
        >
          {projects.map((project, idx) => (
            <TiltCard 
              key={project.id}
              href={project.link}
              className="project-card relative overflow-visible rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent cursor-none p-1 w-[85vw] sm:w-[450px] md:w-[80vh] max-w-[600px] h-[55vh] min-h-[250px] max-h-[70vh] shrink-0"
            >
              {/* Ensure preserve-3d is passed down and remove overflow-hidden so text isn't clipped */}
              <div 
                className="group relative h-full w-full rounded-[1.8rem] bg-[#050505] p-3 flex flex-col justify-end shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                
                {/* Project Image (Full Card Height) */}
                <div 
                  className="absolute inset-3 rounded-[1.2rem] overflow-hidden transition-all duration-700 ease-out border border-white/10 bg-[#0a0a0a]"
                  style={{ transform: "translateZ(20px)" }} // 3D pop for the image
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-40 transition-all duration-[1.5s] ease-out" 
                  />
                  {/* Dark gradient overlay that appears on hover to make text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  {/* Glassmorphism shine effect across the image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-20 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                </div>

                {/* Text Content Overlay (Hidden by default, slides up on hover) */}
                <div 
                  className="w-full relative z-30 p-6 md:p-8 pointer-events-none"
                  style={{ transform: "translateZ(60px)" }} // Extra 3D pop for text
                >
                  <div className="opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100 flex flex-col">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-black/80 text-white text-xs font-mono tracking-widest uppercase backdrop-blur-md border border-white/20">
                        {project.id}
                      </span>
                      <span className="font-mono text-accent text-xs uppercase tracking-widest drop-shadow-md">{project.category}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-tight drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
          {/* Spacer to ensure the last card stops exactly in the center of the screen */}
          <div className="w-[7.5vw] md:w-[calc(50vw-300px)] shrink-0"></div>
        </div>
      </div>
    </section>
  );
}
