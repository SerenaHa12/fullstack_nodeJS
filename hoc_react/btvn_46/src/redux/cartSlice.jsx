import { createSlice } from "@reduxjs/toolkit";

const storedCartProducts = () => {
  const value = JSON.parse(localStorage.getItem("cartProducts"));
  return value;
};

const cartSlide = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const updatedProducts = [...state.cart];
      const actionProduct = action.payload;
      const existProduct = updatedProducts.find(
        (p) => p._id === actionProduct._id
      );

      if (!existProduct) {
        actionProduct.amount = 1;
        updatedProducts.push(actionProduct);
      } else {
        existProduct.amount++;
      }

      console.log("====================================");
      console.log("updatedProducts", updatedProducts);
      console.log("state", state);
      console.log("====================================");

      state.cart = updatedProducts;
      // localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    },

    restoreCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export default cartSlide.reducer;
export const { addtoCart, restoreCart } = cartSlide.actions;
