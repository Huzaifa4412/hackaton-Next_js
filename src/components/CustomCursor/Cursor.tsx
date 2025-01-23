"use client";
// components/CustomCursor.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  const updateCursorPosition = (event:  MouseEvent) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", updateCursorPosition);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", updateCursorPosition);
      }
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed mix-blend-difference top-0 left-0 w-8 h-8 rounded-full bg-neutral-950 z-[999]"
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{ x: cursorPosition.x - 16, y: cursorPosition.y - 16 }}
      animate={{ x: cursorPosition.x - 16, y: cursorPosition.y - 16 }}
    />
  );
};

export default CustomCursor;
