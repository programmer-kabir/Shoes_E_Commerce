import { configureStore } from "@reduxjs/toolkit";
import shoesSlice from "./Shoes/shoesSlice";
import userSlice from "./User/userSlice";
import BookedSlice from "./Booked/BookedSlice";

const store = configureStore({
  reducer: {
    shoes: shoesSlice,
    users: userSlice,
    booked:BookedSlice,
  },
});
export default store;
