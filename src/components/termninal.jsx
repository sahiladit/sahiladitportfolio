import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "C++",
  "JavaScript",
  "React.js",
  "Python",
  "Machine Learning",
  "AI & Blockchain",
  "Tailwind CSS",
  "Node.js",
  "SQL",
];

const Terminal = () => {
  const [displayedText, setDisplayedText] = useState(
    "> Loading Sahil Adit's Tech Stack...\n"
  );
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [typingLastSkill, setTypingLastSkill] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (index < skills.length - 1) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + `> ${skills[index]} ✓\n`);
        setIndex(index + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else if (index === skills.length - 1 && !typingComplete) {
      // Typing effect for the last skill
      let charIndex = 0;
      const lastSkill = skills[index];
      const typingEffect = setInterval(() => {
        if (charIndex < lastSkill.length) {
          setTypingLastSkill((prev) => prev + lastSkill[charIndex]);
          charIndex++;
        } else {
          clearInterval(typingEffect);
          setDisplayedText((prev) => prev + `> ${lastSkill} ✓`); // Append final text
          setTypingLastSkill(""); // Reset to avoid undefined issue
          setTypingComplete(true);
        }
      }, 200);

      return () => clearInterval(typingEffect);
    }
  }, [index, typingComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen relative overflow-hidden">
      {/* Matrix-style background */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-green-500 opacity-30 text-xs"
          initial={{ top: "-10%", left: `${Math.random() * 100}%`, opacity: 0 }}
          animate={{
            top: "110%",
            opacity: [0.3, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {String.fromCharCode(33 + Math.random() * 94)}
        </motion.span>
      ))}

      {/* Terminal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full max-w-2xl border border-green-500 p-4 rounded-lg shadow-lg bg-black text-green-400 font-mono"
      >
        <pre className="whitespace-pre-wrap text-lg leading-relaxed">
          {displayedText}
          {!typingComplete && `> ${typingLastSkill}`}
          {showCursor && <span className="inline-block w-2 bg-green-400 h-5"></span>}
        </pre>
      </motion.div>
    </div>
  );
};

export default Terminal;
