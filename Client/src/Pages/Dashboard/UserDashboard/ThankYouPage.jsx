import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoes } from "../../Redux/Shoes/shoesSlice";
const ThankYouPage = () => {
  const { isLoading, shoes, review } = useSelector((state) => state.shoes);
  const [matchedShoes, setMatchedShoes] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoes());
  }, []);
  console.log(shoes);
  const location = useLocation();

  const bookedData = location.state && location.state.bookedData;

  useEffect(() => {
    if (bookedData && shoes.length > 0) {
      const matched = bookedData.map((targetProduct) => {
        const { productId } = targetProduct;
        return shoes.find((shoe) => shoe._id === productId);
      });
      setMatchedShoes(matched.filter(Boolean)); // Filter out undefined values
    }
  }, [bookedData, shoes]);

  return (
    // <div>
    //   <div class="content">
    //     <div class="wrapper-1">
    //       <div class="wrapper-2">
    //         <h1>Thank you !</h1>
    //         <p>Thanks for subscribing to our news letter. </p>
    //         <p>you should receive a confirmation email soon </p>
    //         {/* {bookedData && (
    //           <div>
    //             <h2>Booked Data:</h2>
    //             <ul>
    //               {bookedData.map((item) => (
    //                 <li key={item._id}>
    //                   Product ID: {item.productId}, Booked ID: {item._id}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         )} */}
    //          {matchedShoe && (
    //           <div>

    //             <ul>
    //               {matchedShoe.map((item) => (
    //                 <li key={item._id}>
    //                   Product ID: {item.name}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         )}
    //         <button class="go-home">go home</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      {matchedShoes.length > 0 ? (
        <div>
          <h2>Matched Shoes:</h2>
          <ul>
            {matchedShoes.map((shoe) => (
              <li key={shoe._id}>Name: {shoe.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No matched shoes found.</p>
      )}
    </div>
  );
};

export default ThankYouPage;
