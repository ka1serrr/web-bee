import { InitialState } from '@/slices/messageSliceTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  message: '',
  isEditing: true,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    changeMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    toggleIsEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
  },
});

export const { changeMessage, setIsEditing } = messageSlice.actions;
