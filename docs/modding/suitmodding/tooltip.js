import React, { useState, useRef, useEffect } from 'react';
import './customhover.css'; // Import your CSS

const Tooltip = ({ text, tooltip }) => {
  const [position, setPosition] = useState('bottom'); // Default position set to 'bottom'
  const tooltipRef = useRef(null);

  useEffect(() => {
    const adjustTooltipPosition = () => {
      if (tooltipRef.current) {
        const rect = tooltipRef.current.getBoundingClientRect();
        const navBarHeight = 60; // The height of your navigation bar

        // Check if there's enough space above to show the tooltip
        if (rect.top > navBarHeight + 10) { // Add a buffer to switch to top
          setPosition('top'); // Switch to top if there's enough space
        } else {
          setPosition('bottom'); // Keep at bottom if near the top bar
        }
      }
    };



    return () => {
      window.removeEventListener('resize', adjustTooltipPosition);
      window.removeEventListener('scroll', adjustTooltipPosition);
    };
  }, [tooltipRef]);

  return (
    <span className="tooltip">
      {text}
      <span ref={tooltipRef} className={`tooltip-text ${position}`}>
        {tooltip}
      </span>
    </span>
  );
};

export default Tooltip;
