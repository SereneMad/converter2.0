import React, { useState, useEffect } from 'react';
import Title from './components/converter/Title';
import Switcher from './components/converter/Switcher';
import InputBox from './components/converter/InputBox';
import OutputBox from './components/converter/OutputBox';
import DateBox from './components/converter/DateBox';
import SelectorBox from './components/converter/SelectorBox';
import DescriptionBox from './components/converter/DescriptionBox';
import './App.css';

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [value, setValue] = useState(5000);
  const [exchangeRate, setExchangeRate] = useState(0.013);
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const data = await response.json();
        setExchangeRate(1 / data.Valute.USD.Value);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, []);

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    const converted = value * exchangeRate;
    setConvertedValue(converted);
  };

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
  };

  return (
    <div className="app">
      {/* Левый блок */}
      <div className="converter left">
        <Title title="У меня есть" />
        <Switcher selectedCurrency="RUB" />
        <InputBox
          value={value}
          handleInputChange={handleInputChange}
          selectedCurrency={selectedCurrency}
          exchangeRate={exchangeRate}
        />
        <DateBox />
        <SelectorBox onChange={handleCurrencyChange} />
        <DescriptionBox />
      </div>
      {/* Центральный блок */}
      <div className="mid">
        <div className="calc__reverse"></div>
      </div>
      {/* Правый блок */}
      <div className="converter right">
        <Title title="Хочу приобрести" />
        <Switcher selectedCurrency="USD" />
        <OutputBox
          // exchangeRate={exchangeRate}
          // selectedCurrency={selectedCurrency}
          // className="input_box__input"
          // type="number"
          convertedValue={convertedValue}
          // onChange={() => {}}
        />
      </div>
    </div>
  );
}
export default App;
