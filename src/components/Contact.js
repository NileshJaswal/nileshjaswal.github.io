import React from "react";

export default function Contact() {
  return (
    <section className="py-32 bg-mainbg border-t border-border-light relative overflow-hidden">
      
      {/* Background terminal grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        
        <div className="max-w-xl mb-12 md:mb-0">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Let's build something exceptional.
          </h2>
          <p className="text-text-secondary font-mono text-sm mb-8">
            <span className="text-accent">{">"}</span> status: available for freelance & full-time roles.
          </p>
          <a href="mailto:arcanenilesh@gmail.com" className="inline-flex items-center gap-4 group">
            <span className="text-2xl font-bold text-white group-hover:text-accent transition-colors">arcanenilesh@gmail.com</span>
            <span className="w-12 h-12 rounded-full border border-border-light flex items-center justify-center text-white group-hover:border-accent transition-colors group-hover:translate-x-2 transform duration-300">
              →
            </span>
          </a>
        </div>

        <div className="flex gap-16 font-mono text-sm">
          <div>
            <h4 className="text-text-secondary mb-4 uppercase tracking-widest">Socials</h4>
            <ul className="space-y-2">
              <li><a href="https://linkedin.com/in/nileshjaswal" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/nileshjaswal" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="https://twitter.com/nileshjaswal" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-text-secondary mb-4 uppercase tracking-widest">Location</h4>
            <ul className="space-y-2">
              <li className="text-white">Remote</li>
              <li className="text-white">Worldwide</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
