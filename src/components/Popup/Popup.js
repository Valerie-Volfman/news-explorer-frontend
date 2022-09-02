import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ isOpen, name, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup__is-opened" : ""} popup_type_${name}`}
      onClick={handleOverlay}
    >
      <div className="popup__content">
        <button
          aria-label="close"
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
