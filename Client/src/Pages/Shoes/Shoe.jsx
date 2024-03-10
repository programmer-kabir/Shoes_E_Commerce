import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Shoe = ({ shoes }) => {
  // console.log(shoes);
  return (
    <Link to={`${shoes._id}`}>
      <div className="group block overflow-hidden bg-white border border-gray-300">
        <div className="relative h-[250px]">
          <img
            src={shoes?.mainImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
            src={shoes?.hoverImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </div>

        <div className="relative bg-white pt-3 px-3">
          <div className="flex gap-4 ">
            <h3 className="text-sm text-gray-700 hover:text-blue-400 cursor-pointer">
              {shoes?.name}
            </h3>
          </div>
          {/* Review */}

          <div className="flex items-center  mt-4">
            <Rating
              className="mt-1"
              readonly
              placeholderRating={shoes?.star}
              emptySymbol={<AiFillStar color="#D6D6D6" size={16} />}
              placeholderSymbol={<AiFillStar color="#FF9933" size={16} />}
              fullSymbol={<AiFillStar color="#FF9933" size={16} />}
            />
          </div>

          <p className="mt-2 font-semibold text-lg">TK {shoes?.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Shoe;
