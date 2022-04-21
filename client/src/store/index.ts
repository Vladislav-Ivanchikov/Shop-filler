import {configureStore} from '@reduxjs/toolkit'
import {switchSlice} from "./reduser/switchSlicer";


const store = configureStore({
    reducer: {
        category: switchSlice.reducer
    }
})

export const {switchCategory, switchCurrency} = switchSlice.actions
export default store