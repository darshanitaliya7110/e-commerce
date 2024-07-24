import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/types"

const initialState = {};

const productDataReducer = createReducer(initialState, (builder) => {
    builder.addCase(Actions.SET_PRODUCT_DATA, (state, action) => {
        Object.assign(state, action.payload)
        return state
    })

});

const productReducer = combineReducers({
    productData: productDataReducer,
});

export default productReducer
