import React from "react";

const Grainy = () => {
  return (
    <svg className="grain-overlay h-screen w-screen fixed z-10 opacity-50">
      <filter id="grainy">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grainy)" />
    </svg>
  );
};

export default Grainy;
