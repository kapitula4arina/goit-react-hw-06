import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateContact: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContact, deleteContact, updateContact } = slice.actions;
