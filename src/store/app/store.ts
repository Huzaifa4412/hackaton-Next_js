import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice"

const makeStore = () => configureStore({
    reducer: {
        cartReducer
    }
});

export const store = makeStore()
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;