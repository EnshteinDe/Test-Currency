import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConverterState {
  usd: number;
  eur: number;
}

const initialState: ConverterState = {
  usd: 0,
  eur: 0,
};

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    updateUSD: (state, action: PayloadAction<number>) => {
      state.usd = action.payload;
    },
    updateEUR: (state, action: PayloadAction<number>) => {
      state.eur = action.payload;
    },
  },
});

export const { updateUSD, updateEUR } = converterSlice.actions;

export default converterSlice.reducer;
