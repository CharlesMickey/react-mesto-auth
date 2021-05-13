import React from "react";

function InfoTooltip({ isOpen, onClose, title, img }) {
  return (
    <div className={`popup  ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container`}>
        <button
          onClick={onClose}
          className={`popup__button-close-tooltip`}
          type="button"
        ></button>
        <img className={`popup__img-tooltip`} src={img} />
        <h2 className={`popup__title-tooltip`}>{title}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
