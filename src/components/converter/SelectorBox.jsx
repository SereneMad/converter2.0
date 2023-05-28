import React from 'react';

const SelectorBox = () => {
  return (
    <div className="calc__select">
      {/* Встроенный селектор */}
      <select>
        <option value="cbrf">ЦБ РФ</option>
        <option value="forex">Forex</option>
        <option value="cash">Пункты обмена</option>
      </select>
      {/* Кастомный селектор */}
      {/* <div className="custom_select">
        <span className="custom_select__text">ЦБ РФ</span>
        <span className="custom_select__arrow"></span>
      </div>
      <div className="custom_select__options">
        <div className="js-scrollable">
          <div className="js-scrollable-content">
            <div className="custom_select__option" selected="selected">
              ЦБ РФ
            </div>
            <div className="custom_select__option">Forex</div>
            <div className="custom_select__option">Пункты обмена</div>
          </div>
        </div>
        <span className="custom-scroll">
          <span className="custom-scroll__trackbar"></span>
        </span>
      </div> */}
    </div>
  );
};

export default SelectorBox;
