import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, action) => {
            state.cart.push(action.payload)
            return state
        }
    }
})

export default cartSlide.reducer
export const {addtoCart} = cartSlide.actions