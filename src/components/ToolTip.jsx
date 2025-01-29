/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ToolTip.css";

function ToolTip(props) {
  const [active, setActive] = useState(false);

  const toggleTip = () => {
    setActive((active) => !active);
    
    if (active) {
      setTimeout(hideTip, 5000);
    }
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="tooltip-wrapper"
      // When to show the tooltip
      onClick={toggleTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`tooltip-tip ${props.direction || "top"}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
}

export default ToolTip;
