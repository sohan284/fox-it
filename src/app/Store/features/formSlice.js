import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});
export const { setOpen } = formSlice.actions;
export default formSlice.reducer;
