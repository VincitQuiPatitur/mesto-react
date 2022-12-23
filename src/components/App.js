import React from 'react';
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    //const [isDeleteImagePopupOpen, setDeleteImagePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setImagePopupOpen] =  React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    /*function handleDeleteImageClick() {
        setDeleteImagePopupOpen(true);
    }*/

    function handleCardClick(card) {
        setSelectedCard(card);
        setImagePopupOpen(true);
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        //setDeleteImagePopupOpen(false);
        setImagePopupOpen(false);
        setSelectedCard({});
    }

    return (
        <div className="page">
            <div className="page__content">
                <Header/>
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer/>

                <PopupWithForm
                    name={'edit-profile'}
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    form={'profile-redaction'}
                    formName={'redaction'}
                    title={'Редактировать профиль'}
                    saveButton={'save-profile-info'}
                    buttonText={'Сохранить'}
                >
                    <>
                        <label className="popup__label">
                            <input type="text" placeholder="Имя пользователя" required id="userName" name="name"
                                   className="popup__input popup__input_type_user-name" minLength="2"
                                   maxLength="40"/>
                            <span className="popup__input-error userName-error"> </span>
                        </label>
                        <label className="popup__label">
                            <input type="text" placeholder="Краткое описание" required id="description"
                                   minLength="2"
                                   name="about"
                                   maxLength="200"
                                   className="popup__input popup__input_type_description"/>
                            <span className="popup__input-error description-error"> </span>
                        </label>
                    </>
                </PopupWithForm>

                <PopupWithForm
                    name={'add-photo'}
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    form={'post-creating'}
                    formName={'creating'}
                    title={'Новое место'}
                    saveButton={'create-new-post'}
                    buttonText={'Создать'}
                >
                    <>
                        <label className="popup__label">
                            <input type="text" placeholder="Название" required id="postName" name="name"
                                   className="popup__input popup__input_type_post-name" minLength="2"
                                   maxLength="30"/>
                            <span className="popup__input-error postName-error"> </span>
                        </label>
                        <label className="popup__label">
                            <input type="url" placeholder="Ссылка на картинку" required id="imageLink"
                                   name="link"
                                   className="popup__input popup__input_type_link"/>
                            <span className="popup__input-error imageLink-error"> </span>
                        </label>
                    </>
                </PopupWithForm>

                <PopupWithForm
                    name={'deletion'}
                    //isOpen={isDeleteImagePopupOpen}
                    onClose={closeAllPopups}
                    container={'popup__small-container'}
                    classTitle={'popup__confirmation-title'}
                    title={'Вы уверены?'}
                    saveButton={'confirmation-button'}
                    buttonText={'Да'}
                >
                </PopupWithForm>

                <PopupWithForm
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    name={'avatar'}
                    container={'popup__avatar-container'}
                    form={'avatar-redaction'}
                    formName={'avatar'}
                    title={'Обновить аватар'}
                    saveButton={'update-avatar'}
                    buttonText={'Сохранить'}
                >
                    <label className="popup__label">
                        <input type="url" placeholder="Ссылка на аватар" required id="avatarLink"
                               name="link"
                               className="popup__input popup__input_type_avatar-link"/>
                        <span className="popup__input-error avatarLink-error"> </span>
                    </label>
                </PopupWithForm>

                <ImagePopup
                    card={selectedCard}
                    isOpen={isImagePopupOpen}
                    onClose={closeAllPopups}
                />
            </div>
        </div>
    );
}

export default App;
