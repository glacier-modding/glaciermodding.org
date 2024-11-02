import React, { useState, useRef, useEffect } from 'react';
import './customhover.css'; // Import your CSS

const Tooltip = ({ text, tooltip }) => {
  const [position, setPosition] = useState('top');
  const tooltipRef = useRef(null);

  useEffect(() => {
    const adjustTooltipPosition = () => {
      if (tooltipRef.current) {
        const rect = tooltipRef.current.getBoundingClientRect();
        const navBarHeight = 60; // Height of the navigation bar
        const availableSpaceAbove = rect.top - navBarHeight;
        const availableSpaceBelow = window.innerHeight - rect.bottom;

        // Compare the available space above and below
        if (availableSpaceAbove < tooltipRef.current.offsetHeight && availableSpaceBelow > availableSpaceAbove) {
          // Switch to bottom if there's more space below than above
          setPosition('bottom');
        } else {
          // Keep at the top if there's more space above or equal
          setPosition('top');
        }
      }
    };

    // Initial adjustment and event listeners for scroll/resize
    adjustTooltipPosition();
    window.addEventListener('resize', adjustTooltipPosition);
    window.addEventListener('scroll', adjustTooltipPosition);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('resize', adjustTooltipPosition);
      window.removeEventListener('scroll', adjustTooltipPosition);
    };
  }, []);

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
