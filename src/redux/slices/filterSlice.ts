import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FilterSliceState {
  category: number;
  sortBy: "popular" | "price" | "title";
  searchBy: string;
}

const initialState: FilterSliceState = {
  category: 0,
  sortBy: "popular",
  searchBy: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSearchBy: (state, action) => {
      console.log("setSearchBy", action.payload);
      state.searchBy = action.payload;
    },
    setFilters: (state, action) => {
      state.category = Number(action.payload.category);
      state.sortBy = action.payload.sortBy;
    },
  },
});

export const selectCategory = (state: RootState) => state.filterSlice.category;
export const selectSortBy = (state: RootState) => state.filterSlice.sortBy;
export const selectSearchBy = (state: RootState) => state.filterSlice.searchBy;

export const { setCategory, setSortBy, setSearchBy, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
