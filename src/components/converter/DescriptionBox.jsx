import React from 'react';

const DescriptionBox = () => {
  return (
    <div className="calc__page_desc showmore js-show-more">
      <p className="calc__page_desc__p">
        Конвертер валют онлайн — инструмент, который позволит вам рассчитать соотношения актуальных
        курсов денежных средств всего мира на сегодня.
      </p>
      <span className="showmore__btn js-show-more-btn_show">Развернуть</span>
    </div>
  );
};

export default DescriptionBox;
