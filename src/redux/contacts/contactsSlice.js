// src/redux/contacts/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.loading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.loading = true;
    },
    [addContact.fulfilled](state, action) {
      state.loading = false;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.loading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.loading = false;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [deleteContact.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
