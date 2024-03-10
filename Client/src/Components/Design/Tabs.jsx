import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Rating from "react-rating";

const Tabs = ({ DetailsShoes }) => {
  console.log(DetailsShoes.reviews);
  const [activeTab, setActiveTab] = useState("description");
  //   Ratting
  const [rating, setRating] = useState(0);
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  //   Ratting
  const handleRatingChange = (value) => {
    setRating(value);
  };

  const getRatingText = () => {
    switch (rating) {
      case 1:
        return "Very Bad";
      case 2:
        return "Bad";

      case 3:
        return "Average";

      case 4:
        return "Satisfactory";

      case 5:
        return "Very Good";

      default:
        return "";
    }
  };
  const [orderNotes, setOrderNotes] = useState("");

  const handleClear = () => {
    setOrderNotes("");
  };

  return (
    <div>
      <div className="w-full pt-10">
        <div className="border-gray-200 ">
          <nav className=" border-b-2 -mb-px flex gap-6" aria-label="Tabs">
            <button
              className={`shrink-0   px-1 pb-4 text-sm font-semibold ${
                activeTab === "description"
                  ? "border-blue-500 border-b-2 text-blue-500"
                  : "border-gray-300 text-gray-500"
              }`}
              onClick={() => changeTab("description")}
            >
              Description
            </button>

            <button
              className={`shrink-0  px-1 pb-4 text-sm font-semibold ${
                activeTab === "reviews"
                  ? "border-blue-500 border-b-2 text-blue-500"
                  : "border-gray-300 text-gray-500"
              }`}
              onClick={() => changeTab("reviews")}
            >
              Customer Reviews{" "}
              <span className="text-base">
                ({DetailsShoes?.reviews?.length})
              </span>
            </button>
            <button
              className={`shrink-0  px-1 pb-4 text-sm font-semibold ${
                activeTab === "question"
                  ? "border-blue-500 border-b-2 text-blue-500"
                  : "border-gray-300 text-gray-500"
              }`}
              onClick={() => changeTab("question")}
            >
              Question & Answer
            </button>
          </nav>
          {activeTab === "description" && (
            <div className="py-4">
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold"> Brand Name:</span>{" "}
                  {DetailsShoes?.Description?.Brand}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold"> Item code:</span>{" "}
                  {DetailsShoes?.Description?.Item_code}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold"> Gender:</span>{" "}
                  {DetailsShoes?.gender}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold"> Upper material:</span>{" "}
                  {DetailsShoes?.Description?.Upper_Material}
                </p>

                <p className="text-gray-600">
                  <span className="font-semibold"> Sole material:</span>{" "}
                  {DetailsShoes?.Description?.product.join(", ")}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold"> Sole material:</span>{" "}
                  {DetailsShoes?.Description?.Sole_material}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold"> Color:</span>{" "}
                  {DetailsShoes?.Description?.Color}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Size:</span>{" "}
                  {DetailsShoes?.size.join(", ")}
                </p>
              </div>
              <p className="text-red-500 font-semibold pt-5">
                N.B: Please check the size chart and select your size before
                placing <br />
                order.
                <br />
                Product delivery duration may vary due to product availability
                in <br />
                stock.
                <br />
                Disclaimer: The actual color of the physical product may
                slightly <br /> vary due to the deviation of lighting sources,
                photography or your <br /> device display settings.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="py-4 w-full ">
              <div className="pt-5">
                <h2 className="text-2xl text-center font-semibold">
                  Submit Your Review
                </h2>
              </div>
              <div className="flex items-center  justify-center pb-2 pt-8 gap-2">
                <p className="text-gray-600  -mb-3">
                  Your Rating Of This Product :
                </p>

                <Rating
                  className=""
                  emptySymbol={<AiFillStar color="#D6D6D6" size={40} />}
                  placeholderSymbol={<AiFillStar color="#FF9933" size={40} />}
                  fullSymbol={<AiFillStar color="#FF9933" size={40} />}
                  onChange={handleRatingChange}
                />

                {rating > 0 && (
                  <p className="pl-2 text-xl font-medium">{getRatingText()}</p>
                )}
              </div>
              {/* your reviews */}
              <div>
                <div className="overflow-hidden  rounded p-2 border border-gray-200 shadow-sm focus-within:border-[#439DDF] focus-within:ring-1 focus-within:ring-[#439DDF]">
                  <textarea
                    id="OrderNotes"
                    className="w-full outline-none text-base resize-none border-none align-top "
                    rows="4"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Enter any additional order notes..."
                  ></textarea>

                  <div className="flex items-center justify-end gap-2 bg-white p-3">
                    <button
                      onClick={handleClear}
                      type="button"
                      className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                    >
                      Clear
                    </button>

                    <button
                      type="button"
                      className="rounded bg-[#439DDF] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1e4a69]"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/* Review Show */}
              <div className="pt-10">
                <div className="border-t "></div>
              </div>
            </div>
          )}

          {activeTab === "question" && <div className="py-4">Call Content</div>}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
