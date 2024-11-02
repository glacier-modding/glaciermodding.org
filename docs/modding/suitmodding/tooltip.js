import React, { useState, useRef, useEffect } from 'react';
import './customhover.css'; // Import your CSS

const Tooltip = ({ text, tooltip }) => {
  const [position, setPosition] = useState('top');
  const tooltipRef = useRef(null);

  useEffect(() => {
    const adjustTooltipPosition = () => {
      if (tooltipRef.current) {
        const rect = tooltipRef.current.getBoundingClientRect();
        const navBarHeight = 80; // Height of your navigation bar

        // Check if the top of the tooltip would be blocked by the navigation bar
        if (rect.top < navBarHeight) {
          setPosition('bottom');
        } else {
          setPosition('top');
        }
      }
    };

    adjustTooltipPosition(); // Initial check
    window.addEventListener('resize', adjustTooltipPosition); // Recheck on resize
    window.addEventListener('scroll', adjustTooltipPosition); // Recheck on scroll

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
