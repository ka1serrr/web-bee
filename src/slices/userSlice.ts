import { InitialState } from '@/slices/userSliceTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  img: 'img/profile/avatar.jpg',
  job: 'UX/UI designer',
  name: 'Hanna Dorman',
  socialNets: [
    {
      img: 'img/profile/tg.svg',
      link: 'tg',
    },
    {
      img: 'img/profile/hh.svg',
      link: 'hh',
    },
    {
      img: 'img/profile/tw.svg',
      link: 'tw',
    },
  ],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<InitialState>) => {
      state = action.payload;
    },
  },
});
