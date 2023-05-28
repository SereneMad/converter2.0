import React from 'react';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP', ' '];

const Switcher = ({ selectedCurrency, onChange }) => {
  return (
    <div className="switcher">
      <ul>
        {defaultCurrencies.map((currency) => (
          <li
            className={`switcher__item ${
              selectedCurrency === currency && 'switcher__item--selected'
            }`}
            key={currency}
            onClick={() => onChange(currency)}>
            {currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Switcher;
