import React, { useState } from 'react';

const OutputBox = ({ convertedValue }) => {
  // const convertedValue = (value / exchangeRate).toFixed(2);

  return (
    <div className="input_box">
      {/* <input className="input_box__input" type="number" value={convertedValue} readOnly />
      <div className="input_box__rate">
        1 {selectedCurrency} = {exchangeRate.toFixed(5)} {selectedCurrency}
      </div> */}
      <input
        className="input_box__input"
        type="number"
        value={convertedValue}
        onChange={() => {}}
      />
    </div>
  );
};

export default OutputBox;
