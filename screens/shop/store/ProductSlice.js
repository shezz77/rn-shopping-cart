import { createSlice } from "@reduxjs/toolkit";
import Product from "../../../models/product";
import _ from 'lodash';

export const productSlice = createSlice({
  name: "products",
  initialState: {
    availableProducts: [],
    userProducts: [],
  },
  reducers: {
    setAvailableProducts: (state, action) => {
      state.availableProducts = action.payload;
    },
    setUserProducts: (state, action) => {
      state.userProducts = action.payload;
    },
    deleteProduct: (state, action) => {
      state.userProducts = state.userProducts.filter(
        (p) => p.id !== action.payload
      );
      state.availableProducts = state.availableProducts.filter(
        (p) => p.id !== action.payload
      );
    },
    createProduct: (state, action) => {
      const product = new Product(
        new Date().toTimeString(),
        "u1",
        action.payload.title,
        action.payload.imageUrl,
        action.payload.description,
        action.payload.price
      );

      state.availableProducts = [...state.availableProducts, product];
      state.userProducts = [...state.userProducts, product];
    },
    updateProduct: (state, action) => {
      const pIndexAP = state.availableProducts.findIndex(
        (ap) => ap.id === action.payload.pid
      );
      const pIndexUP = state.userProducts.findIndex(
        (ap) => ap.id === action.payload.pid
      );

      const updatedProduct = new Product(
        action.payload.pid,
        state.availableProducts[pIndexAP].ownerId,
        action.payload.title,
        action.payload.imageUrl,
        action.payload.description,
        state.availableProducts[pIndexAP].price
      );

      let updatedAvailableProducts = _.cloneDeep(state.availableProducts);
      updatedAvailableProducts[pIndexAP] = updatedProduct;

      const updatedUProduct = new Product(
        action.payload.pid,
        state.userProducts[pIndexUP].ownerId,
        action.payload.title,
        action.payload.imageUrl,
        action.payload.description,
        state.userProducts[pIndexUP].price
      );

      let updatedUserProducts = _.cloneDeep(state.userProducts);
      updatedUserProducts[pIndexUP] = updatedUProduct;

      state.availableProducts = updatedAvailableProducts;
      state.userProducts = updatedUserProducts;
    },
  },
});

export const {
  setAvailableProducts,
  setUserProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} = productSlice.actions;

export default productSlice.reducer;
