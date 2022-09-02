import React from "react";
import Popup from "../Popup/Popup";
import "./PopupWithForm.css";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function PopupWithForm({
  isOpen,
  onClose,
  onOpen,
  name,
  title,
  children,
  buttonText,
  linkText,
  submitHandler,
  signError,
}) {
  const useForm = useFormAndValidation();
  const { values, isValid, resetForm, handleChange, errors } = useForm;
  React.useEffect(() => {
    isOpen && resetForm();
  }, [isOpen, resetForm]);
  function handleSubmit(e) {
    e.preventDefault();
    submitHandler(values);
  }
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className="popup__title">{title}</h2>
      <form
        onSubmit={(evt) => handleSubmit(evt)}
        name={name}
        className="popup__form"
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            values,
            handleChange,
            errors,
          })
        )}
        <span className="popup__input-error popup__form-error">
          {signError}
        </span>
        <button
          aria-label="save"
          type="submit"
          name="popupSaveButton"
          className={`popup__save-button ${
            !isValid && "popup__save-button_disabled"
          }`}
        >
          {buttonText}
        </button>
        <p className="popup__link">
          or
          <button type="button" onClick={onOpen} className="popup__link-words">
            {linkText}
          </button>
        </p>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
