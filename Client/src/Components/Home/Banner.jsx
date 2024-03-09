import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import bannerVideo from "../../assets/Banner/banner.mp4";
import Content from "../Content/Content";
const Banner = () => {
  return (
    <Content>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 w-full  gap-6 h-[500px]">
        {/* Video */}

        <div className="relative rounded-md w-full h-[500px]">
          <video
            autoPlay
            loop
            muted
            className="absolute rounded-md inset-0 object-cover w-full h-full z-0"
          >
            <source src={bannerVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-white mr-20 ml-7 md:ml-0 space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold">
                Enjoy Up To $100 <br />
                Off Fire Pits
              </h1>
              <p className="text-lg md:text-xl mt-2">
                Lowest prices of the year are here.
              </p>
              <button className="primary-btn">Shop Fire Pits </button>
            </div>
          </div>
          <div className="absolute rounded-md inset-0 bg-black opacity-50 z-1"></div>
        </div>

        {/* Image */}
        <div className="flex flex-col gap-5 md:gap-0 justify-between">
          <div className="relative hidden md:block">
            <img
              className="h-[245px] w-full rounded-md"
              src="https://i.ibb.co/xFmwVpw/Pi-Prime-Lifestyle-Granbury052323-67-Large-57bc6855098e4ac3ab43012d5afccf37.png"
              alt=""
            />
            <div className="absolute inset-0 rounded-md bg-gray-900 opacity-50 z-1"></div>
            <div className="absolute inset-0 flex items-center justify-center z-2 text-white text-center">
              <div className="text-start mr-20 space-y-2">
                <h1 className="lg:text-2xl font-bold">
                  Win The Weekend With Pi Prime{" "}
                </h1>
                <p className="">Enjoy Up To $50 off Pi Prime</p>
                <button className="primary-btn">Shop Pi Prime </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[245px] rounded-md w-full"
              src="https://i.ibb.co/KGmg9pq/second.jpg"
              alt=""
            />
            <div className="absolute inset-0 rounded-md bg-gray-900 opacity-50 z-1"></div>
            <div className="absolute inset-0 flex items-center justify-center z-2 text-white text-center">
              <div className="text-start mr-20 space-y-2">
                <h1 className="lg:text-2xl font-bold">Bundle & Save</h1>
                <p className="">
                  All the essentials to get the most out of your Solo Stove.
                </p>
                <button className="primary-btn">Shop Now </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="relative h-[250px] w-full ">
                  <img
                    className="w-full rounded-md"
                    src="https://i.ibb.co/xFmwVpw/Pi-Prime-Lifestyle-Granbury052323-67-Large-57bc6855098e4ac3ab43012d5afccf37.png"
                    alt=""
                  />
                  <div className="absolute inset-0 rounded-md bg-gray-900 opacity-50 z-1"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-2 text-white text-center">
                    <div className="text-start ml-4 space-y-2">
                      <h1 className="text-2xl font-bold">
                        Win The Weekend With Pi Prime{" "}
                      </h1>
                      <p className="">Enjoy Up To $50 off Pi Prime</p>
                      <button className="primary-btn">Shop Pi Prime </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-[250px] w-full">
                  <img
                    className="h-[250px] w-full rounded-md"
                    src="https://i.ibb.co/KGmg9pq/second.jpg"
                    alt=""
                  />
                  <div className="absolute inset-0 rounded-md  bg-gray-900 opacity-50 z-1"></div>
                  <div className="absolute inset-0  flex items-center justify-center z-2 text-white text-center">
                    <div className="text-start ml-4 space-y-2">
                      <h1 className="text-2xl font-bold">Bundle & Save</h1>
                      <p className="">
                        All the essentials to get the most <br /> out of your
                        Solo Stove.
                      </p>
                      <button className="primary-btn">Shop Now</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Banner;
