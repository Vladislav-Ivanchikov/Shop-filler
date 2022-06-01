import {configureStore} from '@reduxjs/toolkit'
import {switchSlice} from "./reduser/switchSlicer";


const store = configureStore({
    reducer: {
        category: switchSlice.reducer
    }
})

export const mapStateToProps = (state: any) => ({
    categoryState: state.category
})

export const {switchCategory, switchCurrency} = switchSlice.actions
export default store