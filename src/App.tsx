import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import CurrencyConverter from './components/CurrencyConverter';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Currency Converter</h1>
        <CurrencyConverter />
      </div>
    </Provider>
  );
};

export default App;
