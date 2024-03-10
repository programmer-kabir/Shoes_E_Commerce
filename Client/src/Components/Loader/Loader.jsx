import React from "react";
import GridLoader from "react-spinners/GridLoader";

// Default values shown

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gray-700">
      <GridLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
