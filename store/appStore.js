import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import CartReducer from '../screens/shop/store/CartSlice'
import OrderSlice from '../screens/shop/store/OrderSlice'
import productReducer from '../screens/shop/store/ProductSlice'

export default configureStore({
    reducer: {
        products: productReducer,
        cart: CartReducer,
        order: OrderSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
      })
})