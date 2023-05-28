import React from 'react';

const InputBox = ({ exchangeRate, value, handleInputChange }) => {
  return (
    <div className="input_box">
      <input
        className="input_box__input"
        type="number"
        value={value}
        onChange={handleInputChange}
      />

      {/* Current Rate */}
      <div className="input_box__rate">1 RUR = {exchangeRate} USD</div>
    </div>
  );
};

export default InputBox;
