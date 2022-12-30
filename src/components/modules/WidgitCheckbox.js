import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "../../scss/widgitsCheckbox.scss";

function WidgitCheckbox({ checkedStatus, children }) {
  const [checked, setChecked] = useState(checkedStatus);
  const dataWidgits = useRef();
  useEffect(() => {
    let checkboxs = [
      ...document.querySelectorAll(
        ".control-checkbox .widgit-control-checkbox"
      ),
    ];
    const checkbox = checkboxs.filter(
      (checkbox) =>
        checkbox.id ===
        `${children.toLowerCase().split(" ")[0]}${children
          .split(" ")
          .slice(1)
          .join("")}Checkbox`
    )[0];
    dataWidgits.current = JSON.parse(localStorage.getItem("dataWidgits"));
    localStorage.setItem(
      "dataWidgits",
      JSON.stringify({
        ...dataWidgits.current,
        ...{ [checkbox.id]: checkbox.checked },
      })
    );
  }, [children]);
  const handleChange = (e) => {
    setChecked(!checked);
    dataWidgits.current[e.target.id] = e.target.checked;
    localStorage.setItem(
      "dataWidgits",
      JSON.stringify({
        ...dataWidgits.current,
      })
    );
    window.location.reload();
  };

  return (
    <div className="control-checkbox">
      <input
        type="checkbox"
        className="widgit-control-checkbox"
        id={`${children.toLowerCase().split(" ")[0]}${children
          .split(" ")
          .slice(1)
          .join("")}Checkbox`}
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={`${children.toLowerCase().split(" ")[0]}${children
          .split(" ")
          .slice(1)
          .join("")}Checkbox`}
      >
        <span>
          <FaCheck />
        </span>
        {children}
      </label>
    </div>
  );
}

export default WidgitCheckbox;
