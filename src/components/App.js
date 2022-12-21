import React from 'react';
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
    return (
        <div className="page">
            <div className="page__content">
                <Header/>
                <Main/>
                <Footer/>
                <div className="popup popup_type_edit-profile">
                    <div className="popup__container">
                        <button className="popup__close-button popup__close-button_type_profile" type="button"
                                aria-label="Кнопка закрытия окна"></button>
                        <form className="popup__form popup__form_type_profile-redaction" name="redaction">
                            <h3 className="popup__title">Редактировать профиль</h3>
                            <fieldset className="popup__fieldset">
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
                                <button className="popup__save-button popup__save-button_type_save-profile-info"
                                        type="submit">Сохранить
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className="popup popup_type_add-photo">
                    <div className="popup__container">
                        <button className="popup__close-button popup__close-button_type_post" type="button"
                                aria-label="Кнопка закрытия окна"></button>
                        <form className="popup__form popup__form_type_post-creating" name="creating">
                            <h3 className="popup__title">Новое место</h3>
                            <fieldset className="popup__fieldset">
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
                                <button className="popup__save-button popup__save-button_type_create-new-post"
                                        type="submit">Создать
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
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
                <div className="popup popup_type_deletion">
                    <div className="popup__container popup__small-container">
                        <button className="popup__close-button popup__close-button_type_deletion" type="button"
                                aria-label="Кнопка закрытия окна"></button>
                        <h3 className="popup__title popup__confirmation-title">Вы уверены?</h3>
                        <button className="popup__save-button popup__confirmation-button" type="submit">Да</button>
                    </div>
                </div>
                <div className="popup popup_type_avatar">
                    <div className="popup__container popup__avatar-container">
                        <button className="popup__close-button popup__close-button_type_deletion" type="button"
                                aria-label="Кнопка закрытия окна"></button>
                        <form className="popup__form popup__form_type_avatar-redaction" name="avatar">
                            <h3 className="popup__title">Обновить аватар</h3>
                            <fieldset className="popup__fieldset">
                                <label className="popup__label">
                                    <input type="url" placeholder="Ссылка на аватар" required id="avatarLink"
                                           name="link"
                                           className="popup__input popup__input_type_avatar-link"/>
                                    <span className="popup__input-error avatarLink-error"> </span>
                                </label>
                                <button className="popup__save-button popup__save-button_type_update-avatar"
                                        type="submit">Сохранить
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <template className="post__template">
                    <li className="post">
                        <button className="post__delete" type="button" aria-label="Удаление"></button>
                        <img src="src/components/App#" alt="#" className="post__image"/>
                        <div className="post__description">
                            <h2 className="post__subscription"></h2>
                            <div className="post__like-container">
                                <button className="post__like" type="button" aria-label="Лайк"></button>
                                <p className="post__like-count" name="likeCount"></p>
                            </div>
                        </div>
                    </li>
                </template>
            </div>
        </div>
    );
}

export default App;