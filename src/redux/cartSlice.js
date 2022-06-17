import { createSlice } from "@reduxjs/toolkit";

const calculateTotal = (data) => {
  return Object.values(data).reduce(
    (acc, cur) => acc + cur?.quantity * cur?.product?.price,
    0
  );
};

const calculateLength = (data) => {
  return Object.values(data).reduce((acc, cur) => acc + cur?.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total: 0,
    length: 0,
    data: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      if (!state.data.hasOwnProperty(product.id)) {
        state.data[product.id] = {
          quantity: +quantity || 1,
          price: product.price,
          product: product,
        };
      } else {
        state.data[product.id].quantity += +quantity || 1;
      }
      state.total = calculateTotal(state.data);
      state.length = calculateLength(state.data);
    },
    incrementQuantityByProductId: (state, action) => {
      const productId = action.payload;
      if (state.data.hasOwnProperty(productId)) {
        state.data[productId].quantity += 1;
        state.total = calculateTotal(state.data);
        state.length = calculateLength(state.data);
      }
    },
    decrementQuantityByProductId: (state, action) => {
      const productId = action.payload;
      if (state.data.hasOwnProperty(productId)) {
        let newQuantity = Math.max(state.data[productId].quantity - 1, 0);
        state.data[productId].quantity = newQuantity;
        state.total = calculateTotal(state.data);
        state.length = calculateLength(state.data);
      }
    },
    setQuantityByProductId: (state, action) => {
      const { productId, quantity = 1 } = action.payload;
      if (state.data.hasOwnProperty(productId) && !isNaN(+quantity)) {
        let newQuantity = Math.max(quantity || 0, 0);
        state.data[productId].quantity = newQuantity;
        state.total = calculateTotal(state.data);
        state.length = calculateLength(state.data);
      }
    },
    removeFromCartByProductId: (state, action) => {
      if (state.data.hasOwnProperty(action.payload)) {
        delete state.data[action.payload];
        state.total = calculateTotal(state.data);
        state.length = calculateLength(state.data);
      }
    },
    clearCart: (state, action) => {
      state.total = 0;
      state.length = 0;
      state.data = {};
    },
  },
});

export const {
  addToCart,
  incrementQuantityByProductId,
  decrementQuantityByProductId,
  setQuantityByProductId,
  removeFromCartByProductId,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
