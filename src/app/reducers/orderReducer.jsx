import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/types"

const initialState = []

const orderDataReducer = createReducer(initialState, (builder) => {
    builder.addCase(Actions.SET_ORDER_DATA, (state, action) => {
        Object.assign(state, action.payload)
        return state
    }).addCase(Actions.UPDATE_STATUS, (state, action) => {
        const { id, status } = action.payload;
        const index = state.findIndex(item => item.id === id);
        if (index !== -1) {
            state[index].orderStatus = status;
        }
    }).addCase(Actions.DELETE_ORDER_DATA, (state, action) => {
        const temp = state.filter((item) => item.id !== action.payload.id);
        return temp
    })
})

const orderReducer = combineReducers({
    orderData: orderDataReducer
})

export default orderReducer