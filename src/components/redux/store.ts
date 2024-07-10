import { configureStore } from '@reduxjs/toolkit';
import converterReducer from './converterSlice';

const store = configureStore({
  reducer: {
    converter: converterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
