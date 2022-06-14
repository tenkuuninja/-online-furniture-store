import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    nextId: 1,
  },
  reducers: {
    createUser: (state, action) => {
      let newUser = action.payload;
      newUser.id = state.nextId++;
      state.data.push(newUser);
    },
    updateUser: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload?.id) {
          item = action.payload;
        }
        return item;
      });
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { createUser, updateUser, deleteUser } =
  productSlice.actions;

export default productSlice.reducer;
