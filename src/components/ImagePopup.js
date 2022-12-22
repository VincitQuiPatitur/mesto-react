import React from "react";

function ImagePopup() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__image-container">
                <button className="popup__close-button popup__close-button_type_image" type="button"
                        aria-label="Кнопка закрытия окна"></button>
                <figure className="popup__figure-block">
                    <img src="src/components/App#" alt="#"
                         className="popup__image"/>
                    <figcaption className="popup__caption"></figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ImagePopup;