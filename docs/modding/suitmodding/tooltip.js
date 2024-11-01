import React from 'react';
import './customhover.css'; // Make sure your CSS file is imported

const Tooltip = ({ text, tooltip }) => (
  <span className="tooltip">
    {text}
    <span className="tooltip-text">{tooltip}</span>
  </span>
);

export default Tooltip;
