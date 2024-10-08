import { configureStore } from '@reduxjs/toolkit';

import appStateReducer from './appStateSlice';

export const store = configureStore({
  reducer: {
    appState: appStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
