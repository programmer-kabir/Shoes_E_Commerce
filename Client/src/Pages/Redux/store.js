import { configureStore } from "@reduxjs/toolkit";
import shoesSlice from "./Shoes/shoesSlice";
import userSlice from "./User/userSlice";

const store = configureStore({
  reducer: {
    shoes: shoesSlice,
    users: userSlice,
  },
});
export default store;
