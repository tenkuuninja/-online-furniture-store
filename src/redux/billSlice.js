import { createSlice } from "@reduxjs/toolkit";
// import defaultData from "data/categories.json";

const billSlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    nextId: 1,
  },
  reducers: {
    createBill: (state, action) => {
      let newBill = action.payload;
      newBill.id = state.nextId++;
      state.data.push(newBill);
    },
    updateBill: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload?.id) {
          item = action.payload;
        }
        return item;
      });
    },
    deleteBill: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { createBill, updateBill, deleteBill } = billSlice.actions;

export default billSlice.reducer;