import React from 'react';

const handleFocus = () => {
  console.log('Input focused');
  // Perform any other actions you want when the input is focused
};

const DateBox = () => {
  return (
    <div className="date">
      <input
        className="date__input"
        placeholder="Дата"
        readOnly="readOnly"
        onFocus={handleFocus}></input>
    </div>
  );
};

export default DateBox;
