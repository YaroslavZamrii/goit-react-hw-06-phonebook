import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts = [action.payload, ...state.contacts];
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { deleteContact, addContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
