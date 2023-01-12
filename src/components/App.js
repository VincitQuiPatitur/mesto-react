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
import AddPlacePopup from "./AddPlacePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    //const [isDeleteImagePopupOpen, setDeleteImagePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        api.getUserInfo()
            .then(result => setCurrentUser(result))
            .catch(error => console.log(error));
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
            .then(cards => setCards([...cards]))
            .catch(error => console.log(error));
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
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
            .catch(error => console.log(error));
    }

    function handleUpdateUser(userInfo) {
        setIsLoaded(true);
        api.setUserInfo(userInfo)
            .then((result) => {
                setCurrentUser(result);
                closeAllPopups();
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoaded(false));
    }

    function handleUpdateAvatar(userInfo) {
        setIsLoaded(true);
        api.setUserAvatar(userInfo.avatar)
            .then((result) => {
                setCurrentUser(result);
                closeAllPopups();
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoaded(false));
    }

    function handleAddPlaceSubmit(card) {
        setIsLoaded(true);
        api.addNewCard(card)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoaded(false));
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
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                        isLoaded={isLoaded}
                    />
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddNewCard={handleAddPlaceSubmit}
                        isLoaded={isLoaded}
                    />
                    <PopupWithForm
                        popupName={'deletion'}
                        //isOpen={isDeleteImagePopupOpen}
                        onClose={closeAllPopups}
                        container={'popup__small-container'}
                        classTitle={'popup__confirmation-title'}
                        title={'Вы уверены?'}
                        saveButton={'confirmation-button'}
                        buttonText={'Да'}
                    />
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                        isLoaded={isLoaded}
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
