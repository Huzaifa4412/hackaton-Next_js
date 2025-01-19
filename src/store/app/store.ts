import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    timeout: 10000,
    serialize: false,
}

const rootReducer = combineReducers({
    cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const makeStore = () => configureStore({
    reducer: persistedReducer
});

export const store = makeStore()
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;