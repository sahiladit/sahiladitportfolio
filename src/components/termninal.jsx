import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const skills = [
  'C++', 'JavaScript', 'React.js', 'Python', 'Machine Learning', 'AI & Blockchain', 'Tailwind CSS', 'Node.js', 'SQL'
];

const Terminal = () => {
  const [displayedText, setDisplayedText] = useState("> Loading Sahil Adit's Tech Stack...\n");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < skills.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + `> ${skills[index]} ✓\n`);
        setIndex(index + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="flex items-center justify-center h-screen w-screen text-green-400 font-mono p-6">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="w-full max-w-2xl border border-green-500 p-4 rounded-lg shadow-lg bg-black"
      >
        <pre className="whitespace-pre-wrap text-lg leading-relaxed">{displayedText}</pre>
      </motion.div>
    </div>
  );
};

export default Terminal;
