import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createContact, deleteContact, changeFilter } from './actions';

const itemsReducer = createReducer([], {
  [createContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [
    state.filter(contact => contact.id !== payload),
  ],
});

const filterReducer = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
