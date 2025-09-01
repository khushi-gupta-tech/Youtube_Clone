import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "darkMode",
  initialState: {
    dark: false,
  },
  reducers: {
    isDark: (state, action) => {
      state.dark = !state.dark;
    },
  },
});
export const { isDark } = darkSlice.actions;
export default darkSlice.reducer;
