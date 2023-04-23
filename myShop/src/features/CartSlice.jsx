import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIcon: false,
  menuIcon: false,
  searchIcon: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartIcon: (state) => {
      state.cartIcon = !state.cartIcon;
      state.menuIcon = state.menuIcon ? false : "";
      state.searchIcon = state.searchIcon ? false : "";
    },
    setMenuIcon: (state) => {
      state.menuIcon = !state.menuIcon;
      state.searchIcon = state.searchIcon ? false : "";
      state.cartIcon = state.cartIcon ? false : "";
    },
    setSearch: (state) => {
      state.searchIcon = !state.searchIcon;
      state.menuIcon = state.menuIcon ? false : "";
      state.cartIcon = state.cartIcon ? false : "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCartIcon, setMenuIcon, setSearch } = cartSlice.actions;

export default cartSlice.reducer;
