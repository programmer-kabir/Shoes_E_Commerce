import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">{title}</h2>
      <h2 className="font-semibold text-sm text-gray-600 text-center">
        {subtitle}
      </h2>
    </div>
  );
};

export default Title;