import React from "react";
import { AiFillStar } from "react-icons/ai";
import Rating from "react-rating";
import CheckBox from "./CheckBox";

const CheckBoxRating = ({ number }) => {
  return (
    <div className="flex items-center ">
        <CheckBox />
      <Rating className="mt-1" readonly
        placeholderRating={number}
        emptySymbol={<AiFillStar color="#D6D6D6" size={16} />}
        placeholderSymbol={<AiFillStar color="#FF9933" size={16} />}
        fullSymbol={<AiFillStar color="#FF9933" size={16} />}
      />
    </div>
  );
};

export default CheckBoxRating;