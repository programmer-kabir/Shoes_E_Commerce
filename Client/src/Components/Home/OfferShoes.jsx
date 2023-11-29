import React, { useRef, useState } from "react";
import useDateComponent from "../Hooks/useDateComponent";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Content from "../Content/Content";
import Title from "../Design/Title";
import { Link } from "react-router-dom";
const OfferShoes = () => {
  const { formattedDate, monthName } = useDateComponent();
  return (
    <div className="pt-16 rounded-lg">
      <Content>
        <Title
          title={`${monthName} Offer `}
          subtitle={`Amazing deals for ${monthName}`}
        />
        <Link to="/offer-Shoes">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper rounded-lg mt-12"
          >
            {/* https://i.ibb.co/SwKBYzk/2bbcfa99737217-5ef9be3dbb9a9-cleanup-cleanup.png */}
            <SwiperSlide>
              <div className="h-[510px] w-full relative">
                <img
                  className="w-16 bg-cover rounded-lg absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2"
                  src="https://i.ibb.co/SwKBYzk/2bbcfa99737217-5ef9be3dbb9a9-cleanup-cleanup.png"
                  alt=""
                />
                <div className="absolute mt-10 md:mt-0 text-center mx-10 lg:bottom-20 lg:right-2/3 lg:top-1/4  transform lg:-translate-x-1/2">
                  <div className="flex w-24 md:w-32 gap-2 pb-7">
                    <img
                      className=" w-5"
                      src="https://i.ibb.co/MSQ5Zw9/pngwing-com-1.png"
                      alt=""
                    />
                    <img
                      className="md:w-5 "
                      src="https://i.ibb.co/4p2Ddkv/pngwing-com-2.png"
                      alt=""
                    />
                  </div>
                  <div className="w-20 absolute -mt-10 -ml-10">
                    <img
                      className="w-5"
                      src="https://i.ibb.co/y6Q4Jz1/Pngtree-crazy-offer-sign-style-promotional-6834646.png"
                      alt=""
                    />
                  </div>
                  <h2 className="text-2xl py-2 px-5 mt-5 font-semibold bg-[#bebebe] text-black rounded-md">
                    Full {monthName}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[510px] w-full relative">
                <img
                  className="w-16 rounded-lg absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2"
                  src="https://i.ibb.co/4t8dYQL/pngtree-cool-shoes-banner-png-image-7525412-transformed.png"
                  alt=""
                />
                <div className="absolute text-center ml-14   md:bottom-20 md:ml-5 left-1/3  md:left-3/4 bottom-1/3 lg:top-1/4  transform -translate-x-1/2">
                  <div className="flex w-20 md:w-32 gap-2 pb-7">
                    <img
                      className="w-5"
                      src="https://i.ibb.co/MSQ5Zw9/pngwing-com-1.png"
                      alt=""
                    />
                    <img
                      className=""
                      src="https://i.ibb.co/4p2Ddkv/pngwing-com-2.png"
                      alt=""
                    />
                  </div>
                  <div className="w-20 absolute -mt-10 -ml-10">
                    <img
                      className=" w-5"
                      src="https://i.ibb.co/y6Q4Jz1/Pngtree-crazy-offer-sign-style-promotional-6834646.png"
                      alt=""
                    />
                  </div>
                  <h2 className="text-2xl py-2 md:px-5 px-3 mt-5 font-semibold bg-[#bebebe] text-black rounded-md">
                    Full {monthName}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Link>
      </Content>
    </div>
  );
};

export default OfferShoes;
