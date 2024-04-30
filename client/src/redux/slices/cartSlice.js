import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.attributes;
      const currItem = product ? {
        title: product.title,
        key: product.key,
        price: product.price,
        image: product.image.data.attributes.url,
      } : action.payload;
      const index = state.cart.findIndex((item) => item.key === currItem.key);
      if (index === -1) {
        state.cart.push({ ...currItem, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload.attributes;
      const currItem = product ? {
        title: product.title,
        key: product.key,
        price: product.price,
        image: product.image.data.attributes.url,
      } : action.payload;
      const index = state.cart.findIndex((item) => item.key === currItem.key);
      if(index === -1) return;
      // Checking if there is single quantity then remove whole item from the cart
      if (state.cart[index].quantity === 1) {
        state.cart.splice(index, 1);
        // state.cart = state.cart.filter((item)=> item.key !== currItem.key)
      } else {
        state.cart[index].quantity -= 1;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;
