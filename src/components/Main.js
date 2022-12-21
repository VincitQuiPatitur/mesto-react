import React from "react";
import profileAvatar from "../images/avatar.jpg";

function Main() {
    return (
        <main className="main">
        <section className="profile">
            <div className="profile__avatar">
                <img src={profileAvatar} alt="Фото пользователя"
                     className="profile__avatar-image"/>
            </div>
            <div className="profile__info">
                <h1 className="profile__user-name">Кострова Арина</h1>
                <button className="profile__edit-button" id='profileEditBtn' type="button"
                        aria-label="Кнопка редактирования профиля"></button>
                <p className="profile__description">Программирую и путешествую</p>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить пост"></button>
        </section>
        <section className="posts">
            <ul className="posts__container">
            </ul>
        </section>
    </main>
    )
}

export default Main;