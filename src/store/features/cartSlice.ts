import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '../../../Typing';


interface CartState {
    cart: Cart[];
}
const initialState: CartState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload)
            const idx = state.cart.findIndex(c => c.id === action.payload.id);
            if (idx >= 0) {
                state.cart[idx].qty += 1
            }
            else {
                state.cart.push({ ...action.payload, qty: 1 });
            }
        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer