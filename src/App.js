import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import RecentWork from "./components/RecentWork";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="bg-mainbg min-h-screen text-white font-sans overflow-x-hidden selection:bg-accent selection:text-white cursor-none">
      <CustomCursor />
      {/* Navbar Minimalist */}
      <nav className="fixed top-0 w-full p-6 z-50 mix-blend-difference flex justify-between items-center pointer-events-none">
        <div className="font-bold text-xl tracking-tighter">NJ.</div>
      </nav>

      <main>
        <Hero />
        <TechStack />
        <Experience />
        <RecentWork />
        <Contact />
      </main>
    </div>
  );
}

export default App;
