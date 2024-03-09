import React, { useState } from "react";

const CheckBox = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ width: "20px", height: "20px" }}
      />
      <span className="text-black text-base">{text}</span>
    </div>
  );
};

export default CheckBox;
