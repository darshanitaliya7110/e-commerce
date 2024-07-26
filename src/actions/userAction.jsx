import { createAction } from "@reduxjs/toolkit";
import * as Actions from './types';

export const setUser = createAction(Actions.SET_USER)
export const clearUser = createAction(Actions.CLEAR_USER)