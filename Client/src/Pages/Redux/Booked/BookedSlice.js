import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooked = createAsyncThunk("class/fetchBooked", async () => {
  const res = await axios.get("http://localhost:5000/booked");
  return res.data;
});
const BookedSlice = createSlice({
  name: "booked",
  initialState: {
    isLoading: false,
    booked: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooked.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooked.fulfilled, (state, action) => {
      state.isLoading = false;
      state.booked = action.payload;
      state.error = null;
    });
    builder.addCase(fetchBooked.rejected, (state, action) => {
      state.isLoading = false;
      state.booked = [];
      state.error = action.error.message;
    });
  },
});
export const { productAddedToCart } = BookedSlice.actions;

export default BookedSlice.reducer;