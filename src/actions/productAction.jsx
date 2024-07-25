import { createAction } from "@reduxjs/toolkit";
import * as Actions from './types';

export const setProductData = createAction(Actions.SET_PRODUCT_DATA)
export const addProductData = createAction(Actions.ADD_CART_DATA)