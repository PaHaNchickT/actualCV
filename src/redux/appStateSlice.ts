import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { isLoading: false },
  reducers: {
    toggleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleLoading } = appStateSlice.actions;

export default appStateSlice.reducer;
