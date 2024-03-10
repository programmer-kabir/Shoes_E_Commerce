import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Content from "../../Components/Content/Content";
import useCategories from "../../Components/Hooks/useCategories";
import ProductVariation from "../../Components/Design/ProductVariation";
import CheckBoxRating from "../../Components/Design/CheckBoxRating";
import Shoe from "./Shoe";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoes } from "../Redux/Shoes/shoesSlice";
import ShoesHeading from "../../Components/Design/ShoesHeading";

const Shoes = () => {
  // const [shoes] = useShoes();
  const { isLoading, shoes, review } = useSelector((state) => state.shoes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoes());
  }, []);

  // console.log(shoes);
  const [category] = useCategories();
  const link = useParams();
  //  console.log(shoes);
  const shoesCategory = link.shoes;
  const filteredShoes = shoes.filter((shoe) => shoe.category === shoesCategory);
  // console.log(filteredShoes);
  const mensCategories = category.filter((shoe) => shoe.Gender === "male");
  const womenCategories = category.filter((shoe) => shoe.Gender === "women"); // console.log(mensCategories);
  const [selectedGender, setSelectedGender] = useState('male');

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className=" bg-white">
      <Content>
        <section className="pt-5 bg-white">
          <div className="w-full mx-auto">
            <img
              className="mx-auto rounded"
              src="https://i.ibb.co/vH1KL6r/Fromal-Shoesbanner.jpg"
              alt=""
            />
          </div>

          <div className="flex gap-10 mt-12 gap-">
            <div className="w-1/4 ">
              {/*Category  */}
              {pathname !== "/offer-Shoes" && (
                <div>
                  <ShoesHeading name={"Categories"} />
                  <div className="pt-2">
                    <Link className="py-2">Fashion</Link>
                    <p
                      onClick={() => handleGenderChange("male")}
                      className={
                        selectedGender === "male"
                          ? "font-bold cursor-pointer"
                          : "cursor-pointer"
                      }
                    >
                      Men
                    </p>
                    {selectedGender === "male" && (
                      <div className="flex flex-col gap-2 pl-5 py-2">
                        {mensCategories.map((category) => (
                          <Link
                            key={category._id}
                            to={category.link}
                            className={
                              location.pathname === category.link
                                ? "font-semibold cursor-pointer"
                                : "cursor-pointer"
                            }
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    )}
                    <p
                      onClick={() => handleGenderChange("women")}
                      className={
                        selectedGender === "women"
                          ? "font-bold cursor-pointer"
                          : "cursor-pointer"
                      }
                    >
                      Women
                    </p>
                    {selectedGender === "women" && (
                      <div className="flex flex-col gap-2 pl-5 py-2">
                        {womenCategories.map((category) => (
                          <Link
                            className={
                              location.pathname === category.link
                                ? "font-semibold cursor-pointer"
                                : "cursor-pointer"
                            }
                            key={category._id}
                            to={category.link}
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Color */}
              <div className="pt-8">
                <ShoesHeading name={"Color"} />
                {/* Content */}
                <div className="pt-5 space-y-3">
                  <ProductVariation
                    variations={["Black", "Blue", "Brown", "Gray", "Mixed"]}
                  />
                </div>
              </div>

              {/* Size */}
              <div className="pt-8">
                <ShoesHeading name={"Size"} />
                {/* Content */}
                <div className="pt-5 space-y-3">
                  <ProductVariation
                    variations={[
                      "35",
                      "36",
                      "37",
                      "38",
                      "39",
                      "40",
                      "41",
                      "42",
                      "43",
                      "44",
                      "45",
                    ]}
                  />
                </div>
              </div>

              {/* Filter By Brand */}
              <div className="pt-8">
                <ShoesHeading name={"Filter By Brand"} />
                {/* Content */}
                <div className="pt-5 space-y-3">
                  <ProductVariation
                    variations={["Walkar", "TOFFPARK", "CORIUM BANGLADESH"]}
                  />
                </div>
              </div>

              {/* Filter By Ratting */}
              <div className="pt-8">
                <ShoesHeading name={"Filter By Rating"} />
                {/* Content */}
                <div className="pt-5 space-y-3">
                  <CheckBoxRating number={5} />
                  <CheckBoxRating number={4} />
                  <CheckBoxRating number={3} />
                  <CheckBoxRating number={2} />
                  <CheckBoxRating number={1} />
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="w-3/4  bg">
              <div className="grid grid-cols-4 gap-4">
                {filteredShoes.map((shoes) => (
                  <Shoe key={shoes._id} shoes={shoes} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Content>
    </div>
  );
};

export default Shoes;
