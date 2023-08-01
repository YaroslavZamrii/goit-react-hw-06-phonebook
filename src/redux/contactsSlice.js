import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = {
  item: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
   reducers: {
    deleteContact: (state, action) => {
      state.item = state.item.filter(
        contact => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.item = [action.payload, ...state.item];
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;