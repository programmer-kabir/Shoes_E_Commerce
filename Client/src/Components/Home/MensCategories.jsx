import useCategories from "../Hooks/useCategories";

import Content from "../Content/Content";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import Title from "../Design/Title";
const MensCategories = () => {
  const [categories] = useCategories();
  const mensCategories = categories.filter((category) => category.Gender === "male");
  
  return (
    <Content>
      <div className="mt-16 h-full ">
        <Title title={'Mens Shoes'}/>
        <div className="pt-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {mensCategories.map((category) => (
            <SwiperSlide>
              <section className="w-[390px] relative h-[500px] mb-5">
              <div className="h-[300px] overflow-hidden">
                <img
                  className="w-full  transform hover:scale-110 duration-200"
                  src={category?.image}
                  alt=""
                />
              </div>
              <div className="space-y-4  absolute mx-10 z-50 bg-white top-60 flex flex-col py-2 px-5 justify-center text-start text-black">
                <p className="font-semibold text-2xl ">{category?.title}</p>
                <p className="font-[300]">
                  {category?.description}
                </p>
                <Link to={`${category?.link}`} className="absolute -bottom-10 w-full">
                  <button  className="py-1 bg-black rounded w-full text-white font-medium">
                    Explore Our Product
                  </button>
                </Link>
              </div>
            </section>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Content>
  );
};

export default MensCategories;
