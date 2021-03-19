import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
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
        }
    }
})

export const {setAvailableProducts, setUserProducts} = productSlice.actions;

export default productSlice.reducer;