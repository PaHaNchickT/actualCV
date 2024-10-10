import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { isLoading: false, selectedPage: '' },
  reducers: {
    toggleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    swapPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  },
});

export const { toggleLoading, swapPage } = appStateSlice.actions;

export default appStateSlice.reducer;
