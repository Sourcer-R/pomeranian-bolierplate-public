import { createSlice } from '@reduxjs/toolkit';
const initialValue = 0;
const saveToLocalStorage = (value) => {
  localStorage.setItem('storedValue', JSON.stringify(value));
};

const getFromLocalStorage = () => {
  const storedValue = localStorage.getItem('storedValue');
  return !storedValue ? initialValue : JSON.parse(storedValue);
};

export const counterSlice = createSlice({
  name: 'store-counter',
  initialState: {
    value: getFromLocalStorage(),
    errorMessage: '',
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
      // state.value += 1;
      saveToLocalStorage(state.value);
    },
    incrementBy: (state, action) => {
      state.value = state.value + action.payload;
      // state.value += 1;
      saveToLocalStorage(state.value);
    },
    decrementBy: (state, action) => {
      // state.value = state.value - action.payload;
      // state.value += 1;
      if (state.value - action.payload < 0) {
        state.errorMessage = 'error < 0';
      } else {
        state.value -= action.payload;
      }
      saveToLocalStorage(state.value);
    },
    resetErrorMessage: (state) => {
      state.errorMessage = '';
    },
  },
});

export const { increment, incrementBy, decrementBy, resetErrorMessage } =
  counterSlice.actions;

export const selectProfile = (state) => {
  return state.testSlice.profile || 'default';
};
