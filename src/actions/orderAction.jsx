import { createAction } from "@reduxjs/toolkit";
import * as Actions from './types';

export const setOrderData = createAction(Actions.SET_ORDER_DATA)
export const updateStatus = createAction(Actions.UPDATE_STATUS)
export const deleteOrderData = createAction(Actions.DELETE_ORDER_DATA)