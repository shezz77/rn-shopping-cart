import { createSlice } from '@reduxjs/toolkit';
import CartItem from '../../../models/cart-item';
import _ from 'lodash';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        totalAmount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const {id, title, price} = action.payload;
            let item = null;
            if (id in state.items) {
                item = new CartItem(state.items[id].quantity+1, price, title, state.items[id].sum + price);
            } else {
                item = new CartItem(1, price, title, price);
            }
            state.items = {...state.items, [id]: item};
            state.totalAmount += price;
        },
        deleteItemFromCart: (state, action) => {
            let updatedItems = _.cloneDeep(state.items);
            let selectedItem = state.items[action.payload.itemId];

            if (state.items[action.payload.itemId].quantity > 1) {
                updatedItems[action.payload.itemId].quantity = selectedItem.quantity - 1;
                updatedItems[action.payload.itemId].sum = selectedItem.sum - selectedItem.productPrice;
            }
            else {
                delete updatedItems[action.payload.itemId] 
            }
            state.items = updatedItems;
            state.totalAmount = state.totalAmount - selectedItem.productPrice;
        },
        resetCart: state => {
            state.items = {};
            state.totalAmount = 0;
        }
    }
})

export const {addToCart, deleteItemFromCart, resetCart} = cartSlice.actions;

export default cartSlice.reducer;