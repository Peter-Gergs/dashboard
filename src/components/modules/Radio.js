import React from "react";
import "../../scss/radio.scss";
function Radio({ children }) {
  return (
    <div className="radio">
      <input type="radio" name="time" id={children.toLowerCase()} onChange={() => {localStorage.setItem("backupTime", children);}} />
      <label htmlFor={children.toLowerCase()}>{children}</label>
    </div>
  );
}

export default Radio;
