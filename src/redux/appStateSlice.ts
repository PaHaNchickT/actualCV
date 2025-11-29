import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { selectedPage: '' },
  reducers: {
    swapPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  },
});

export const { swapPage } = appStateSlice.actions;

export default appStateSlice.reducer;
