import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/types"

const initialState = []

const orderDataReducer = createReducer(initialState, (builder) => {
    builder.addCase(Actions.SET_ORDER_DATA, (state, action) => {
        Object.assign(state, action.payload)
        return state
    })
})

const orderReducer = combineReducers({
    orderData: orderDataReducer
})

export default orderReducer