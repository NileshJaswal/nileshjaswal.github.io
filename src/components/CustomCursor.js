import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over a clickable element
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 50,
      }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 50,
      }
    }
  };

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white/30 border border-white/50 pointer-events-none z-[100] backdrop-blur-sm mix-blend-difference"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
      />
      
      {/* Small dot that strictly follows the cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[101] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0, // Follow instantly
        }}
      />
    </>
  );
}
