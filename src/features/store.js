import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./Menu/MenuSlice";
import CartReducer from "./Cart/CartSlice"

const store = configureStore({
    reducer : {
        menu : MenuReducer,
        cart : CartReducer,
    },
});

export default store;