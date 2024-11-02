import React, { useState, useRef, useEffect } from 'react';
import './customhover.css'; // Import your CSS

const Tooltip = ({ text, tooltip }) => {
  const [position, setPosition] = useState('top');
  const tooltipRef = useRef(null);

  useEffect(() => {
    const adjustTooltipPosition = () => {
      if (tooltipRef.current) {
        const rect = tooltipRef.current.getBoundingClientRect();
        const topBarHeight = 120; // Adjust this value to match your site's top bar height

        const isOutOfTop = rect.top < topBarHeight; // Check if the tooltip is too close to the top bar
        const isOutOfBottom = rect.bottom > window.innerHeight;
        const isOutOfRight = rect.right > window.innerWidth;
        const isOutOfLeft = rect.left < 0;

        if (isOutOfTop) {
          setPosition('bottom'); // More aggressively switch to bottom if the tooltip is near the top bar
        } else if (isOutOfBottom) {
          setPosition('top');
        } else if (isOutOfRight) {
          setPosition('left');
        } else if (isOutOfLeft) {
          setPosition('right');
        } else {
          setPosition('top');
        }
      }
    };

    adjustTooltipPosition(); // Initial adjustment
    window.addEventListener('resize', adjustTooltipPosition); // Re-adjust on resize
    window.addEventListener('scroll', adjustTooltipPosition); // Re-adjust on scroll

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
