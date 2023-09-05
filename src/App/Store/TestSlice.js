import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'store-test',
  initialState: {
    profile: 'business',
  },
  reducers: {
    toggleProfile: (sliceState) => {
      if (sliceState.userProfile === 'retail') {
        sliceState.userProfile = 'business';
      } else {
        sliceState.userProfile = 'retail';
      }
    },
  },
});

export const { toggleProfile } = testSlice.actions;

export const selectProfile = (state) => {
  return state.testSlice.profile || 'default';
};
