import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const switchSlice = createSlice({
    name: 'category',
    initialState: {
        category: "all",
        currency: "$"
    },
    reducers: {
        switchCategory: (state, {payload}: PayloadAction<string>) => {state.category = payload},
        switchCurrency: (state, {payload}: PayloadAction<string>) => {state.currency = payload}
    }
})