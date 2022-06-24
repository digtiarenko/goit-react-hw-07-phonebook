import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice.js';

export const changeFilter = createAction('contact/changeFilter');

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
