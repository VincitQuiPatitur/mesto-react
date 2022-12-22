import React from "react";
import {api} from "../utils/api.js";
import avatar from "../images/avatar.jpg"

function Main(props) {
    const [userName, setUserName] = React.useState('Арина Кострова');
    const [userDescription, setUserDescription] = React.useState('Программирую и путешествую');
    const [userAvatar, setUserAvatar] = React.useState(`${avatar}`);

    React.useEffect(() =>{
        api.getUserInfo()
            .then((result) => {
                setUserName(result.name);
                setUserDescription(result.about);
                setUserAvatar(result.avatar)
            })
            .catch(error => {
                console.log(error);
            });
    });


    return (
        <main className="main">
        <section className="profile">
            <div className="profile__avatar"
            onClick={props.onEditAvatar}>
                <img src={userAvatar} alt="Фото пользователя"
                     className="profile__avatar-image"/>
            </div>
            <div className="profile__info">
                <h1 className="profile__user-name">{userName}</h1>
                <button className="profile__edit-button" id='profileEditBtn' type="button"
                        aria-label="Кнопка редактирования профиля"
                onClick={props.onEditProfile}></button>
                <p className="profile__description">{userDescription}</p>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить пост"
                    onClick={props.onAddPlace}></button>
        </section>
        <section className="posts">
            <ul className="posts__container">
            </ul>
        </section>
    </main>
    )
}

export default Main;