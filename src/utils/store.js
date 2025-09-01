import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import cartSlice from "./cartSlice";
import darkSlice from "./darkSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    cart: cartSlice,
    dark: darkSlice,
  },
});

export default store;
