import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: 0,
    token: 0,
    user: {},
  },
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
