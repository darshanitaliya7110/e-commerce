import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/types"

const initialState = {};

const userDataReducer = createReducer(initialState, (builder) => {
    builder.addCase(Actions.SET_USER, (state, action) => {
        Object.assign(state, action.payload)
        return state
    }).addCase(Actions.CLEAR_USER, (state) => {
        Object.assign(state, {})
        return state
    })
});

const userReducer = combineReducers({
    userData: userDataReducer,
});

export default userReducer
