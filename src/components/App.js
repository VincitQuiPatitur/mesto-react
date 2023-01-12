import React from 'react';
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import {api} from '../utils/api';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    //const [isDeleteImagePopupOpen, setDeleteImagePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        api.getUserInfo()
            .then(result => setCurrentUser(result))
            .catch(error => console.log(error))
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
            /*.then((result) => {
                setCards(
                    result.map((card) => {
                        return {
                            _id: card._id,
                            likes: card.likes,
                            link: card.link,
                            name: card.name
                        }
                    })
                );
            })*/
            .then(cards => setCards([...cards]))
            .catch(error => console.log(error))
    }, []);

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
        setImagePopupOpen(true);
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch(error => console.log(error))
    }

    function handleCardDelete(card) {
        api.deleteCard(card)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id))
            })
            .catch(error => console.log(error));
    }

    function handleUpdateUser(userInfo) {
        api.setUserInfo(userInfo)
            .then(result => setCurrentUser(result))
            .catch(error => console.log(error))
            .finally(() => closeAllPopups());
    }

    function handleUpdateAvatar(userInfo) {
        api.setUserAvatar(userInfo.avatar)
            .then(result => setCurrentUser(result))
            .catch(error => console.log(error))
            .finally(() => closeAllPopups());
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
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__content">
                    <Header/>
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        cards={cards}
                    />
                    <Footer/>

                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

                    <PopupWithForm
                        popupName={'add-photo'}
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
                        popupName={'deletion'}
                        //isOpen={isDeleteImagePopupOpen}
                        onClose={closeAllPopups}
                        container={'popup__small-container'}
                        classTitle={'popup__confirmation-title'}
                        title={'Вы уверены?'}
                        saveButton={'confirmation-button'}
                        buttonText={'Да'}
                    >
                    </PopupWithForm>

                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                    />

                    <ImagePopup
                        card={selectedCard}
                        isOpen={isImagePopupOpen}
                        onClose={closeAllPopups}
                    />
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
