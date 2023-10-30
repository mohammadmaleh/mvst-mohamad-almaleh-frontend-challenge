import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { repositoriesSlice } from '../features/repositories/repositoriesSlice';

export const store = configureStore({
  reducer: {
    [repositoriesSlice.reducerPath]: repositoriesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(repositoriesSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
