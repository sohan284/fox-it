import { combineReducers } from "@reduxjs/toolkit";
import form from "./features/formSlice";

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    form,
  });

  return combinedReducer(state, action);
};

export default createReducer;
