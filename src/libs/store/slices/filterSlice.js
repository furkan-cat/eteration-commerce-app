import { createSelector } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { updateUrlParams } from "../../utils";

export const filterSlice = createSlice({
  name: "filters",
  initialState: { selectedFilters: {}, searchValue: "" },
  reducers: {
    addFilter: (state, action) => {
      const { key, value, type } = action.payload;
      if (type === "radio") {
        state.selectedFilters[key] = value;
      } else {
        if (!state.selectedFilters[key]) {
          state.selectedFilters[key] = [];
        }
        if (state.selectedFilters[key].indexOf(value) !== -1) {
          state.selectedFilters[key] = state.selectedFilters[key].filter(
            (filterValue) => filterValue !== value
          );
        } else {
          state.selectedFilters[key].push(value);
        }
      }

      updateUrlParams(state.selectedFilters);
    },
    updateSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    resetFilter: (state) => {
      state.selectedFilters = {};
    },
  },
});

export const filtersSelector = createSelector(
  (state) => state.products,
  (state) => {
    const filterKeys = [
      { title: "Model", key: "model", type: "checkbox" },
      { title: "Brand", key: "brand", type: "checkbox" },
    ];

    if (!state.originalData) return [];
    const filters = state.originalData.reduce((acc, product) => {
      filterKeys.forEach(({ key, type, title }) => {
        if (!acc[key]) {
          acc[key] = {
            title,
            type,
            key,
            data: [],
          };
        }
        if (acc[key].data.indexOf(product[key]) === -1) {
          acc[key].data.push(product[key]);
        }
      });
      return acc;
    }, {});

    return Object.values(filters);
  }
);

export const { addFilter, updateSearch, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
