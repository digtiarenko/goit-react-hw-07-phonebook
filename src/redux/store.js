import { configureStore } from '@reduxjs/toolkit';
// import { createContact, deleteContact, changeFilter } from './actions';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

// Чи можна підключити композицію редюсерів

// const store = configureStore({
//   reducer: { contacts: { items: itemsReducer }, filter: filterReducer },
//   devTools: process.env.NODE_ENV === 'development',
// });

//Що робити з дефолтними значеннями та із пушем у LocalStorage,
