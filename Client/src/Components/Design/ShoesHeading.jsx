import React from "react";
import { FaPlus } from "react-icons/fa";

const ShoesHeading = ({ name }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-400  pb-1">
      <h2 className="font-semibold text-lg border-b-2 pb-1 border-gray-500">
        {name}
      </h2>
      <FaPlus className="text-gray-600" />
    </div>
  );
};

export default ShoesHeading;