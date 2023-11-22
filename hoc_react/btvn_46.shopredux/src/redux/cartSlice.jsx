import { createSlice } from "@reduxjs/toolkit";

const storedCartProducts = () => {
  const value = JSON.parse(localStorage.getItem("cartProducts"));
  return value;
};

const cartSlide = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cartProducts") || "[]") || [],
  },
  reducers: {
    addtoCart: (state, action) => {
      console.log(state.cart);
      const updatedProducts = [...state.cart];
      const actionProduct = action.payload;
      const existProductIndex = updatedProducts.findIndex(
        (p) => p._id === actionProduct._id
      );

      if (existProductIndex === -1) {
        actionProduct.amount = 1;
        updatedProducts.push(actionProduct);
      } else {
        // Sử dụng Immer để thay đổ+i trạng thái mà không cần gán trực tiếp
        updatedProducts[existProductIndex] = {
          ...updatedProducts[existProductIndex],
          amount: updatedProducts[existProductIndex].amount + 1,
        };
      }

      // Gán trạng thái mới cho state
      state.cart = updatedProducts;
      localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    },
  },
});

export default cartSlide.reducer;
export const { addtoCart } = cartSlide.actions;
