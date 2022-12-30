import React, { useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import '../../scss/checkbox.scss'
function Checkbox({ checkedStatus, id }) {
  function handleCheckbox(e) {
    e.target.parentElement.classList.toggle("checked");
  }
  useEffect(() => {
    if (checkedStatus === true) {
      document
        .querySelector(`#${id}`)
        .parentElement.classList.add("checked");
      document.querySelector(`#${id}`).setAttribute("checked", "");
    }
  });
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        className="toggle-checkbox"
        onClick={handleCheckbox}
        id={id}
      />
      <div className="toggle-switch">
        <div className="icon">
          <FaCheck className="icon-svg" />
          <FaTimes className="icon-svg" />
        </div>
      </div>
    </label>
  );
}

export default Checkbox;
