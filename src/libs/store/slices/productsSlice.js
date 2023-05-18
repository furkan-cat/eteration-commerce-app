import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async (args, { getState }) => {
    const { products } = getState();

    const options = {
      limit: 12,
      skip: products.meta.page,
      ...args,
    };
  
    try {
      const originalData = await fetch(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      ).then((res) => res.json());

      let data = structuredClone(originalData);

      if (options.text) {
        data = data.filter((product) =>
          product.name.toLowerCase().includes(options.text.toLowerCase())
        );
      }

      if (options.sort_by) {
        switch (args.sort_by) {
          case "old-to-new":
            data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            break;
          case "new-to-old":
            data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
          case "price-high-to-low":
            data.sort((a, b) => Number(b.price) - Number(a.price));
            break;
          case "price-low-to-high":
            data.sort((a, b) => Number(a.price) - Number(b.price));
            break;
        }
      }

      if (options.model?.length) {
        data = data.filter((product) => args.model.includes(product.model));
      }

      if (options.brand?.length) {
        data = data.filter((product) => args.brand.includes(product.brand));
      }

      data = data.slice(
        options.skip * options.limit,
        options.skip * options.limit + options.limit
      );

      return { originalData, data };
    } catch (error) {
      throw error;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    originalData: [],
    loading: false,
    error: null,
    meta: { page: 0 },
  },
  reducers: {
    increasePage: (state) => {
      state.meta.page++;
    },
    decreasePage: (state) => {
      state.meta.page--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      state.data = action.payload.data;
      if (!state.originalData.length)
        state.originalData = action.payload.originalData;
      state.loading = false;
    });
    builder.addCase(fetchProductsAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { decreasePage, increasePage } = productsSlice.actions;
export default productsSlice.reducer;
