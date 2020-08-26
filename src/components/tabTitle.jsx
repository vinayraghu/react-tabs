import React from "react";
import "./tabStyles.scss";
const TabTitle = ({ title, disabled, onClick }) => {
  return (
    <div
      className={`chewy-tab-title ${
        disabled ? "chewy-tab-title--disabled" : ""
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default TabTitle;
