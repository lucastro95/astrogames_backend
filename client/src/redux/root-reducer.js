import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoriesReducer from "./categories/categories-reducer";
import productsReducer from "./products/products-reducer";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import ordersReducer from "./orders/orders-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  user: userReducer,
  cart: cartReducer,
  orders: ordersReducer
});

export default persistReducer(persistConfig, rootReducer);
