import React from 'react';
import Tippy from '@tippyjs/react';
import './customhover.css'; // Import your custom CSS

const Tooltip = ({ text, tooltip }) => {
  return (
    <Tippy content={tooltip} arrow={true} className="tippy-tooltip">
      <span className="tooltip">{text}</span>
    </Tippy>
  );
};

export default Tooltip;
