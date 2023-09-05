import { configureStore } from '@reduxjs/toolkit';
import { testSlice } from './TestSlice';
import { counterSlice } from './CounterSlice';

export const { toggleProfile } = testSlice.actions;

export const store = configureStore({
  reducer: {
    testSlice: testSlice.reducer,
    counterSlice: counterSlice.reducer,
  },
});
