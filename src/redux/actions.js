import { createAction } from '@reduxjs/toolkit';

export const createContact = createAction('contact/create');

export const deleteContact = createAction('contact/delete');

export const changeFilter = createAction('contact/changeFilter');
