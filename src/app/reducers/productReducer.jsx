import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/types"

const initialState = [];

const productDataReducer = createReducer(initialState, (builder) => {
    builder.addCase(Actions.SET_PRODUCT_DATA, (state, action) => {
        Object.assign(state, action.payload)
        return state
    }).addCase(Actions.ADD_PRODUCT_DATA, (state, action) => {
        state.products.push(action.payload)
        return state
    }).addCase(Actions.DELETE_PRODUCT, (state, action) => {
        const temp = state.filter((item) => item.id !== action.payload.id);
        return temp
    })

});

const productReducer = combineReducers({
    productData: productDataReducer,
});

export default productReducer
