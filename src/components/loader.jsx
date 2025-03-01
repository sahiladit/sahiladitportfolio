import { useEffect, useState } from "react";
import "./loaderstyle.css";

export default function GameLoader() {
  const [showLoader, setShowLoader] = useState(true); // Show loader on refresh
  const [showStart, setShowStart] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const [zIndex, setZIndex] = useState(9999); // Initially high z-index

  useEffect(() => {
    // Disable scrolling when loader is active
    document.body.style.overflow = "hidden";

    // Show "Press Start" after 3 seconds
    setTimeout(() => setShowStart(true), 3000);

    return () => {
      // Re-enable scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleStart = () => {
    setHideLoader(true); // Apply fade-out effect

    setTimeout(() => {
      setZIndex(-9999); // Push loader to the back
      setShowLoader(false); // Hide loader after fade-out
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }, 1000); // Sync with CSS transition duration
  };

  return showLoader ? (
    <div
      className={`loader-container ${hideLoader ? "fade-out" : ""}`}
      style={{ zIndex }}
    >
      <p className="loading-text">Loading Portfolio...</p>
      {showStart && (
        <p className="start-text" onClick={handleStart}>▶ Press Start</p>
      )}
    </div>
  ) : null;
}
