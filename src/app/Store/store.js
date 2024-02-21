import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import form from "./features/formSlice";

const store = configureStore({
  reducer: {
    form: form,
  },
});
export default store;
