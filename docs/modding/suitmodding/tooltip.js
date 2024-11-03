import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Import Tippy.js default styles
import './customhover.css'; // Import your custom CSS

const Tooltip = ({ text, tooltip }) => {
  return (
    <Tippy content={<span className="tooltip-text">{tooltip}</span>} arrow={true}>
      <span className="tooltip">{text}</span>
    </Tippy>
  );
};

export default Tooltip;
