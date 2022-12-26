import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart-slice";
import categoriesReducer from "./feature/categories-slice";
import productsReducer from "./feature/products-slice"

export  const store = configureStore({
    reducer: {
        cart: cartReducer,
        products:productsReducer,
        categories:categoriesReducer,
    }
})