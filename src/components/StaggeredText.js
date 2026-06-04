import React from "react";
import { motion } from "framer-motion";

export default function StaggeredText({ text, className, delay = 0, staggerDuration = 0.03, as: Component = "span" }) {
  // Split text into words, then words into characters for full control
  // Or just split by characters directly
  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
