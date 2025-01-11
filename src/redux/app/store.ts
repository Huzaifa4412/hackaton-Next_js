import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cartSlice"

export const makeStore = () => configureStore({
    reducer: {
        cartReducer
    }
})
export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore['dispatch']