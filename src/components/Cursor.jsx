import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size for responsiveness
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Hide cursor on mobile (below 768px)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Hide cursor on mobile
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-white lg:block hidden rounded-full mix-blend-difference pointer-events-none"
      animate={{ x: cursorPosition.x - 12, y: cursorPosition.y - 12 }}
      transition={{ type: "tween", ease: "linear", duration: 0.05 }}
      style={{ zIndex: 9999 }} // High z-index
    />
  );
};

export default Cursor;
