import { createSelector } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: { selectedFilters: {} },
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
    },
  },
});

export const filtersSelector = createSelector(
  (state) => state.products,
  (state) => {
    const filterKeys = [
      { key: "model", type: "checkbox" },
      { key: "brand", type: "checkbox" },
    ];

    if (!state.originalData) return [];
    const filters = state.originalData.reduce((acc, product) => {
      filterKeys.forEach(({ key, type }) => {
        if (!acc[key]) {
          acc[key] = {
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

export const { addFilter } = filterSlice.actions;
export default filterSlice.reducer;
