import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/types"

const initialState = [];

const cartDataReducer = createReducer(initialState, (builder) => {
    builder.addCase(Actions.ADD_CART_DATA, (state, action) => {
        return [...state, action.payload]
    }).addCase(Actions.REMOVE_CART_DATA, (state, action) => {
        const temp = state.filter((item) => item.id !== action.payload.id);
        return temp
    })
});

const cartReducer = combineReducers({
    cartData: cartDataReducer,
});

export default cartReducer
