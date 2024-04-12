import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Content from "../../Components/Content/Content";
import toast from "react-hot-toast";
import { fetchShoes } from "../Redux/Shoes/shoesSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiHeart, FiPhone } from "react-icons/fi";
import DeliveryOption from "../../Components/Design/DeliveryOption";
import Tabs from "../../Components/Design/Tabs";
import useAuth from "../../Components/Hooks/useAuth";
import axios from "axios";
import Swal from 'sweetalert2'
// import { handleAddToFavorite } from "../../Components/Favorite/Favorite";
// import toast from 'react-hot-toast'
const SingleShoes = () => {
  const param = useParams();
  const { user } = useAuth();
  const navigate = useNavigate()
  const { isLoading, shoes, review } = useSelector((state) => state.shoes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoes()); 
  }, []);
  const DetailsShoes = shoes.find((shoe) => shoe._id === param.id);

  // const existingBooking = booked.find(
  //   (booking) => booking.productId === DetailsShoes?._id
  // );
  // const isButtonDisabled = !!existingBooking;
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("mainImage");
  const [activeSize, setActiveSize] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  if (isLoading) {
    return <Loader />;
  }
  // Check if DetailsShoes is undefined
  if (!DetailsShoes) {
    return <Loader />;
  }

  const handleImageChange = (imageProperty) => {
    setSelectedImage(imageProperty);
  };
  const handleSizeClick = (size) => {
    setActiveSize(size);
  };
  // Button + -

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  // Cart
  const handleAddToCart = (id) => {
    if(user){
      if (!activeSize || quantity <= 0) {
        toast.error("size not Select");
        return;
      }
      console.log(id);
      
      axios
        .post(`${import.meta.env.VITE_LOCALHOST_KEY}/booked`, {
          productId: id,
          name:DetailsShoes?.name,
          image:DetailsShoes.mainImage,
          email: user?.email,
          size: activeSize,
          quantity,
          price:DetailsShoes.price,
          upperMaterial:DetailsShoes.Description.Upper_Material,
          seller:DetailsShoes.seller
        })
        .then((data) => {
          // console.log(data.data);
          if (data.data.insertedId) {
            toast.success("Product Added To Cart");
          }else  {
            toast.error('Product Already Added');
          }
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
        });
    }else{
      Swal.fire({
        title: "Please Login now?",
        text: "Your account is not active. Please log in now!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!"
      }).then((result) => {
        if (result.isConfirmed) {
    navigate('/sign-in');
        }
      });
    }

  };


const handleAddToFavorite = (id) => {
  const storedIdsString = localStorage.getItem("favoriteShoes");
  const storedIds = storedIdsString ? JSON.parse(storedIdsString) : [];

  if (!storedIds.includes(id)) {
    storedIds.push(id);
    localStorage.setItem("favoriteShoes", JSON.stringify(storedIds));
    setIsFavorite(true);
  } else {
    // If item is already a favorite, you can handle accordingly
    toast.error("Item is already a favorite");
  }
};

  return (
    <div className="bg-white">
      <Content>
        <section className="w-full">
          <div className="">
            <div className="flex  gap-7">
              <div className=" w-3/4 ">
                <div className="grid grid-cols-2">
                  {/* Left Side */}
                  <div className="">
                    <div className="h-[400px] overflow-hidden rounded-lg">
                      <img
                        className="w-2/3 h-full object-fill"
                        src={DetailsShoes[selectedImage]}
                        alt=""
                      />
                    </div>

                    <div className="">
                      {Object.keys(DetailsShoes).map((key) => {
                        if (key.endsWith("Image")) {
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => handleImageChange(key)}
                              className={`flex-0 aspect-square mb-3 h-20 p-1 overflow-hidden rounded-sm border ${
                                key === selectedImage
                                  ? "border-blue-700"
                                  : "border-transparent"
                              } text-center`}
                            >
                              <img
                                className="h-full w-full object-cover"
                                src={DetailsShoes[key]}
                                alt=""
                              />
                            </button>
                          );
                        }
                        return null;
                      })}
                    </div>
                    {/*  */}
                  </div>
                  {/* Right Side */}
                  <div className="pt-10 space-y-1">
                    <h2 className="text-xl font-semibold">
                      {DetailsShoes?.name}
                    </h2>

                    <div className="flex gap-4 items-center">
                      <img
                        className="border border-gray-200 w-[80px] h-[80px]"
                        src={DetailsShoes?.cateimg}
                        alt=""
                      />
                      <div className="">
                        <h2 className="text-gray-600">
                          <span className="font-medium text-gray-800">
                            Category:
                          </span>{" "}
                          {DetailsShoes?.item}
                        </h2>
                        <h2 className="text-gray-600">
                          <span className="font-medium text-gray-800">
                            Seller:
                          </span>{" "}
                          {DetailsShoes?.seller}
                        </h2>
                      </div>
                    </div>
                    <h2 className="text-3xl pt-3 text-gray-700 font-semibold">
                      Tk {DetailsShoes?.price}
                    </h2>
                    <div className="flex items-center gap-2">
                      <Rating
                        className="mt-1"
                        readonly
                        placeholderRating={DetailsShoes?.star}
                        emptySymbol={<AiFillStar color="#D6D6D6" size={16} />}
                        placeholderSymbol={
                          <AiFillStar color="#FF9933" size={16} />
                        }
                        fullSymbol={<AiFillStar color="#FF9933" size={16} />}
                      />
                      <span className="text-gray-600">
                        {DetailsShoes?.reviews?.length} Review(S)
                      </span>
                    </div>
                    <div>
                      {/* Select a size */}
                      <p className="pt-1">
                        Select a size: <span className="text-red-700">*</span>
                      </p>

                      <div className="pt-3">
                        {DetailsShoes?.size.map((size, index) => (
                          <button
                            key={index}
                            onClick={() => handleSizeClick(size)}
                            className={`mx-2 py-1 px-2 border-2 font-medium ${
                              activeSize === size
                                ? "border-blue-500 text-blue-500"
                                : "border-gray-300 text-gray-700"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      {/* Button */}
                      <div className="flex items-center gap-3  w-full pt-5 pb-8">
                        {/* Quantity input */}
                        <div className="flex items-center gap-1 border border-gray-500 rounded w-[144px]">
                          <input
                            type="text"
                            id="Quantity"
                            value={quantity}
                            className="h-10 outline-none w-10 pl-5 border-gray-200 text-center"
                            readOnly
                          />
                          <button
                            type="button"
                            onClick={handleDecrement}
                            className="w-7 h-7 mr-2 ml-3 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition hover:opacity-75"
                          >
                            &minus;
                          </button>
                          <button
                            type="button"
                            onClick={handleIncrement}
                            className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition hover:opacity-75"
                          >
                            +
                          </button>
                        </div>
                        {/* Add to cart button */}
                        <button
                          onClick={() => handleAddToCart(DetailsShoes._id)}
                          className="uppercase flex items-center gap-2 bg-[#439DDF] hover:bg-[#B63155] text-white rounded-sm font-semibold px-6 py-2"
                          
                        >
                          <MdOutlineShoppingBag size={24} color="white" />
                          ADD to cart
                        </button>
                        {/* Heart icon */}
                        <button onClick={()=>handleAddToFavorite(DetailsShoes._id)}>
                        <FiHeart size={27} />
                        </button>
                      </div>
                      {/* Call us */}
                      <div className="py-4 flex hover:text-blue-400  items-center gap-3 border-y ">
                        <FiPhone size={33} />{" "}
                        <p className="font-semibold text-xl">
                          Call For Order : 09613-800800
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <Tabs DetailsShoes={DetailsShoes} />
                </div>
              </div>
              <div className="w-1/4">
                <DeliveryOption />
              </div>
            </div>
            {/* Details and review */}
          </div>
        </section>
      </Content>
    </div>
  );
};

export default SingleShoes;