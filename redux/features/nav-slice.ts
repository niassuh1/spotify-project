import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface NavState {
  isOpen: boolean;
}

const initialState: NavState = {
  isOpen: false,
};

export const navSlice = createSlice({
  initialState,
  name: "nav-slice",
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeNav: (state) => {
      state.isOpen = false;
    },
    openNav: (state) => {
      state.isOpen = true;
    },
  },
});

export const { closeNav, openNav, toggleNav } = navSlice.actions;

export const selectNav = (state: RootState) => state.nav.isOpen;

export default navSlice.reducer;
