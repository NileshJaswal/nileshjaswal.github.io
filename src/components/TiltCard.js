import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TiltCard({ children, className, href }) {
  const ref = useRef(null);
  
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    // The multiplier controls how extreme the tilt is
    setRotateX(yPct * -15);
    setRotateY(xPct * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
      className={`block transform-gpu ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </div>
    </motion.a>
  );
}
