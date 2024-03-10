import React from "react";
import useCategories from "../Hooks/useCategories";

import Content from "../Content/Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Title from "../Design/Title";
const WomenCategories = () => {
  const [categories] = useCategories();
  const womenCategories = categories.filter(
    (category) => category.Gender === "women"
  );
  return (
    <Content>
      <div className="md:mt-14 mt-9 h-full ">
        <Title title={"Mens Shoes"} />
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
            {womenCategories.map((category) => (
              <SwiperSlide key={category._id}>
                <section className="w-[500px] relative h-[500px] md:mb-10 -mb-10">
                  <div className="h-[300px]  rounded-md overflow-hidden">
                    <img
                      className="w-full  transform hover:scale-110 duration-200"
                      src={category?.image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-4 h-[270px] rounded-md shadow absolute mx-10 z-50 bg-white md:top-60 top-40 flex flex-col py-2 px-5 justify-center text-start text-black">
                    <p className="font-semibold text-2xl ">{category?.title}</p>
                    <p className="font-[300] text-sm md:text-base">
                      {category?.description}
                    </p>
                    <Link
                      to={`${category?.link}`}
                      className="-bottom-10 w-full"
                    >
                      <button className="py-1 bg-black rounded w-full text-white font-medium">
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

export default WomenCategories;
