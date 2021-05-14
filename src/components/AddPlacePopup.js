import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ onClose, isOpen, onAddPlaceSubmit, isLoading }) {
  const [stateInput, setStateInput] = React.useState({});

  React.useEffect(() => {
    setStateInput({});
  }, [isOpen]);

  function handleChangeInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setStateInput({...stateInput, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlaceSubmit({
      name: stateInput.name,
      link: stateInput.link,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonSubmitName="Создать"
      onClose={onClose}
      isOpen={isOpen}
      name="image-form"
      title="Новое место"
    >
        <label className="popup__field">
          <input
            type="text"
            placeholder="Новое место"
            name="name"
            id="name"
            className="popup__input popup__place"
            minLength="2"
            maxLength="30"
            value={stateInput.name || ''}
            onChange={handleChangeInput}
            required
          />
          <span className="popup__input-error" id="name-error"></span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            placeholder="Ссылка на картинку"
            name="link"
            id="link"
            className="popup__input"
            value={stateInput.link || ''}
            onChange={handleChangeInput}
            required
          />
          <span className="popup__input-error" id="link-error"></span>
        </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
