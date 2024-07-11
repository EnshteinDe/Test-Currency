// w

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { updateUSD, updateEUR } from './redux/converterSlice';
import {
  ConverterContainer,
  Field,
  Label,
  Input,
} from './CurrencyConverter.styles';

const CurrencyConverter: React.FC = () => {
  const dispatch = useDispatch();
  const { usd, eur } = useSelector((state: RootState) => state.converter);

  const handleUSDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      dispatch(updateUSD(value));
      dispatch(updateEUR(value * 1.07)); // Курс обмена EUR/USD 1.07
    }
  };

  const handleEURChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      dispatch(updateEUR(value));
      dispatch(updateUSD(value / 1.07)); // Курс обмена EUR/USD 1.07
    }
  };

  return (
    <ConverterContainer>
      <Field>
        <Label htmlFor="usd-input">USD</Label>
        <Input
          id="usd-input"
          type="number"
          value={usd}
          onChange={handleUSDChange}
          step="0.01"
        />
      </Field>
      <Field>
        <Label htmlFor="eur-input">EUR</Label>
        <Input
          id="eur-input"
          type="number"
          value={eur}
          onChange={handleEURChange}
          step="0.01"
        />
      </Field>
    </ConverterContainer>
  );
};

export default CurrencyConverter;
