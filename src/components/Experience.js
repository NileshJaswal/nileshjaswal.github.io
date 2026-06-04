import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const lineRef = useRef(null);

  // Original roles array (newest to oldest)
  const originalRoles = [
    {
      id: 0,
      date: "AUG 2024 — PRESENT",
      title: "HubSpot / Landing Page Developer",
      company: "Mavlers",
      url: "http://mavlers.com/",
      highlights: [
        "Developing and maintaining custom HubSpot CMS themes and modules.",
        "Collaborating with cross-functional teams to engineer high-converting landing pages.",
        "Optimizing frontend architectures and UI/UX workflows for enterprise clients."
      ]
    },
    {
      id: 1,
      date: "JUL 2022 — JUN 2024",
      title: "Senior Web & UI Designer (TL)",
      company: "Baseline IT Developments",
      url: "http://baselineitdevelopment.com/",
      highlights: [
        "Promoted to Senior Web & UI Designer and Team Lead, overseeing agile workflows.",
        "Led design and development for Klevu search, PLP, and order tracking via GraphQL API.",
        "Created comprehensive design systems and custom widgets for complex e-commerce needs."
      ]
    },
    {
      id: 2,
      date: "APR 2021 — JUL 2022",
      title: "Web Designer",
      company: "Baseline IT Developments",
      url: "http://baselineitdevelopment.com/",
      highlights: [
        "Developed websites using HTML, CSS, WordPress, and Squarespace with direct client interaction.",
        "Worked extensively on BigCommerce agile projects, significantly improving product UX.",
        "Integrated advanced Figma UI practices and custom JavaScript into live environments."
      ]
    },
    {
      id: 3,
      date: "FEB 2020 — AUG 2020",
      title: "Web Designer Trainee",
      company: "Solitaire Info Systems",
      url: "http://solitaireinfosystems.com/",
      highlights: [
        "Mastered fundamentals of HTML, CSS, and precise PSD/Figma to Code conversion.",
        "Engineered pixel-perfect layouts from complex design files."
      ]
    }
  ];

  // Reverse to show "Start to Present" Journey
  const roles = [...originalRoles].reverse();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      const scrollTween = gsap.to(scrollContainerRef.current, {
        x: () => -(scrollContainerRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (scrollContainerRef.current.scrollWidth * 1.5),
          invalidateOnRefresh: true,
        }
      });

      // Animate the active line drawing from left to right as we scroll
      gsap.to(lineRef.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + (scrollContainerRef.current.scrollWidth * 1.5),
          scrub: 1,
        }
      });

      // Fade up cards as they enter view (optional polish)
      gsap.utils.toArray(".timeline-card").forEach((card) => {
        gsap.from(card, {
          y: (i, el) => el.classList.contains("top-card") ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left 80%",
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-mainbg overflow-hidden relative h-screen flex flex-col justify-center border-b border-border-light">
      
      {/* Background Grid Pattern (Optional polish) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      <div className="w-full overflow-hidden h-full">
        <div 
          ref={scrollContainerRef} 
          className="flex items-center w-max h-full relative pl-[10vw] md:pl-[20vw]"
        >
          
          {/* Title Block */}
          <div className="w-[80vw] md:w-[40vw] shrink-0 z-10 flex flex-col justify-center h-full pr-12 relative">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
              Career <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Journey.</span>
            </h2>
            <p className="mt-8 text-text-secondary max-w-sm font-light font-mono text-sm uppercase tracking-widest">
              From trainee to landing page specialist. A timeline of professional growth.
            </p>
          </div>

          {/* The Timeline Track Container (Lines stop here) */}
          <div className="relative flex items-center h-full">
            {/* Background Axis Line */}
            <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-white/10 -translate-y-1/2"></div>
            {/* Animated Active Line */}
            <div ref={lineRef} className="absolute left-0 top-1/2 h-[2px] bg-gradient-to-r from-accent to-purple-500 -translate-y-1/2 w-0 z-0 shadow-[0_0_15px_rgba(0,112,243,0.5)]"></div>

            {/* Milestones */}
            {roles.map((role, idx) => {
              const isTop = idx % 2 === 0;
              return (
                <div key={role.id} className="relative w-[85vw] md:w-[450px] shrink-0 h-full flex items-center justify-center group">
                  
                  {/* Connection Line (vertical) */}
                  <div className={`absolute left-1/2 w-[2px] bg-white/10 -translate-x-1/2 group-hover:bg-accent/50 transition-colors duration-500 ${isTop ? 'bottom-1/2 h-[5vh] md:h-[8vh] max-h-16' : 'top-1/2 h-[5vh] md:h-[8vh] max-h-16'}`}></div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[12px] h-[12px] rounded-full bg-[#0a0a0a] border-[2px] border-white/30 group-hover:border-accent shadow-[0_0_10px_rgba(0,0,0,1)] group-hover:shadow-[0_0_15px_rgba(0,112,243,0.8)] z-20 transition-all duration-500"></div>
                  
                  {/* The Card Container */}
                  <div className={`timeline-card absolute left-1/2 -translate-x-1/2 w-[85vw] sm:w-[380px] z-30 cursor-pointer ${isTop ? 'bottom-[calc(50%+3vh)] md:bottom-[calc(50%+5vh)] top-card' : 'top-[calc(50%+3vh)] md:top-[calc(50%+5vh)] bottom-card'}`}>
                    
                    {/* Meta Info (Always Visible Minimalist Box) */}
                    <div className="relative bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 transition-all duration-500 group-hover:border-white/30 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                      <span className="font-mono text-[10px] md:text-xs tracking-widest text-text-secondary uppercase mb-2 block bg-white/5 w-fit px-3 py-1 rounded-full border border-white/10 group-hover:border-accent/50 transition-colors">
                        {role.date}
                      </span>
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-1 leading-tight group-hover:text-accent transition-colors duration-300">{role.title}</h3>
                      <a href={role.url} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-white text-xs md:text-sm transition-colors font-mono block w-fit">
                        {role.company} ↗
                      </a>
                    </div>
                    
                    {/* Highlights Dropdown/Pop-up */}
                    <div 
                      className={`absolute left-0 w-full transition-all duration-500 ease-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-40 ${
                        isTop 
                          ? 'top-[100%] mt-4 translate-y-[-10px] group-hover:translate-y-0' 
                          : 'bottom-[100%] mb-4 translate-y-[10px] group-hover:translate-y-0'
                      }`}
                    >
                      <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
                        <ul className="space-y-3 relative z-10">
                          {role.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-text-primary text-xs md:text-sm flex gap-3 leading-relaxed">
                              <span className="text-accent/60 mt-0.5 font-mono font-bold">{`>`}</span>
                              <span className="text-text-secondary/90">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Spacer to allow the last item to center (Outside track container so lines don't draw over it) */}
          <div className="w-[50vw] shrink-0 h-full relative"></div>
        </div>
      </div>
    </section>
  );
}
