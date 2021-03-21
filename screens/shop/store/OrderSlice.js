import { createSlice } from "@reduxjs/toolkit";
import Order from "../../../models/order";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    addOrder: (state, action) => {
      let order = new Order(
        new Date().toString(),
        action.payload.items,
        action.payload.totalAmount,
        new Date()
      );

      state.orders = [...state.orders, order];
    },
  },
});

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;
