import { configureStore } from "@reduxjs/toolkit";
import shoesSlice from "./Shoes/shoesSlice";

const store = configureStore({
    reducer: {
        shoes:shoesSlice,
        
    }
 })
export default store; 