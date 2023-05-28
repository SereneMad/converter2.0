import React, { useState, useEffect } from 'react';

const InputBox = () => {
  const [value, setValue] = useState(5000);
  const [exchangeRate, setExchangeRate] = useState(0.013);
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const data = await response.json();
        setExchangeRate((1 / data.Valute.USD.Value).toFixed(8));
        console.log('Курс синхронизирован');
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, []);

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    setConvertedValue(newValue * exchangeRate);
  };

  return (
    <div className="input_box">
      <input
        className="input_box__input"
        type="number"
        value={value}
        onChange={handleInputChange}
      />
      <div className="input_box__rate">1 RUR = {exchangeRate} USD</div>
      <input
        className="input_box__input"
        type="number"
        value={convertedValue}
        onChange={() => {}}
      />
    </div>
  );
};

export default InputBox;
