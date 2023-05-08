import { InitialState } from '@/slices/timerSliceTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  currentTime: sessionStorage.getItem('startTime') | null,
  startTime: null,
};

export const timeSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setCurrentTime: (state, action: PayloadAction<number>) => {},
  },
});
