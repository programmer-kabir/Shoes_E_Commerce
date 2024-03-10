import React, { useEffect } from "react";
import Title from "../Design/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoes } from "../../Pages/Redux/Shoes/shoesSlice";
import useShoes from "../Hooks/useShoes";
import Content from "../Content/Content";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
const DiscountShoes = () => {
  //   const { isLoading, shoes, review } = useSelector((state) => state.shoes);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchShoes());
  //   }, []);
  const [shoes] = useShoes();
  // console.log(shoes);
  return (
    <Content>
      <div className="mt-16 text-center">
        <Title
          title={"New Year, New Trends Shoe Bliss Awaits!"}
          subtitle={
            "Put Your Best Foot Forward with Unbeatable Discounts on Stylish Footwear."
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pb-7 pt-10">
          {shoes.map((shoe) => (
            <div key={shoe._id}>
              <div className="group text-start relative block overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-gray-300 p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <BiHeart className="h-5 w-5" />
                </button>

                <img
                  src={shoe.mainImage}
                  alt=""
                  className="h-64 w-full hover:rotate-3 object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-6">
                  <span className="whitespace-nowrap text-start bg-[#B63155] text-white px-3 py-1.5 text-xs font-medium">
                    Offer
                  </span>

                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {shoe.name}
                  </h3>

                  <p className="mt-1.5 text-sm text-gray-700">
                    TK {shoe.price}
                  </p>

                  <div className="mt-4">
                    <button className="block w-full text-white rounded bg-[#439DDF] font-semibold py-2 text-sm transition hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to='/discount'>
          <button
            className="bg-[#B63155] transition-colors 0.5s ease-out text-white font-semibold rounded-md px-7 py-2"
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            See More
          </button>
        </Link>
      </div>
    </Content>
  );
};

export default DiscountShoes;