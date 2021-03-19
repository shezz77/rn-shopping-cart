import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import productReducer from '../screens/shop/store/ProductSlice'

export default configureStore({
    reducer: {
        products: productReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
      })
})