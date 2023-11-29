import React, { useEffect, useState } from "react";
import Content from "../Content/Content";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoes } from "../../Pages/Redux/Shoes/shoesSlice";

const Wishlist = () => {
  const { isLoading, shoes, review } = useSelector((state) => state.shoes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoes());
  }, []);
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    // Retrieve favorite IDs from local storage
    const storedIdsString = localStorage.getItem("favoriteShoes");
    const storedIds = storedIdsString ? JSON.parse(storedIdsString) : [];
    setFavoriteIds(storedIds);
  }, []);

  const favoriteShoes = shoes.filter((shoe) => favoriteIds.includes(shoe._id));
  console.log(favoriteShoes);
  return (
    <Content>
      {/* {favoriteShoes.length > 0 ? (
        <div className="grid xl:grid-cols-3 pt-5 2xl:grid-cols-4 gap-5">
          {favoriteShoes.map((favoriteShoe) => (
            <div key={favoriteShoe._id}>
              <div className="p-4 shadow-md bg-gray-100 text-gray-100">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="overflow-hidden ">
                      <img
                        src={favoriteShoe.mainImage}
                        alt=""
                        className="block object-cover object-center w-full rounded-md h-72 transform hover:scale-110 duration-200 bg-gray-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-black">
                      {favoriteShoe.name}
                    </h3>
                    <button className="uppercase w-full bg-[#439DDF] hover:bg-[#B63155] text-white rounded-sm font-semibold px-6 py-2">
                      ADD to cart
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite items yet.</p>
      )} */}
      <p>No favorite items yet.</p>
    </Content>
  );
};

export default Wishlist;
