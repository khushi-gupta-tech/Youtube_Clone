import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    filtered:[],
    history:[]
  },
  reducers: {
    videoCarts: (state, action) => {
      state.cart.push(...action.payload);
    },
    setFilteredVideos: (state, action) => {
      state.filtered = action.payload;
    },
    historyCarts:(state,action) =>{
      state.history.unshift(action.payload);
    }
  },
});
export const { videoCarts ,setFilteredVideos,historyCarts} = cartSlice.actions;
export default cartSlice.reducer;
