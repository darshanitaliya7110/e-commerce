import { createAction } from "@reduxjs/toolkit";
import * as Actions from './types';

export const addCart = createAction(Actions.ADD_CART_DATA)
export const removeFromCart = createAction(Actions.REMOVE_CART_DATA)
export const clearCart = createAction(Actions.CLEAR_CART_DATA)