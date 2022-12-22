import React from "react";
import profileAvatar from "../images/avatar.jpg";

function Main() {

    function handleEditAvatarClick() {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add-photo').classList.add('popup_opened');
    }
    /*document.querySelector('.profile__avatar').addEventListener('click', handleEditAvatarClick);
    document.querySelector('.profile__edit-button').addEventListener('click', handleEditProfileClick);
    document.querySelector('.profile__add-button').addEventListener('click', handleAddPlaceClick);
*/

    return (
        <main className="main">
        <section className="profile">
            <div className="profile__avatar"
            onClick={handleEditAvatarClick}>
                <img src={profileAvatar} alt="Фото пользователя"
                     className="profile__avatar-image"/>
            </div>
            <div className="profile__info">
                <h1 className="profile__user-name">Кострова Арина</h1>
                <button className="profile__edit-button" id='profileEditBtn' type="button"
                        aria-label="Кнопка редактирования профиля"
                onClick={handleEditProfileClick}></button>
                <p className="profile__description">Программирую и путешествую</p>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить пост"
                    onClick={handleAddPlaceClick}></button>
        </section>
        <section className="posts">
            <ul className="posts__container">
            </ul>
        </section>
    </main>
    )
}

export default Main;