import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function AddPlacePopup(props) {
   /* const currenUser = React.useContext(CurrentUserContext);
    console.log(currenUser);*/
    const [postName, setPostName] = React.useState('');
    const [imageLink, setImageLink] = React.useState('');

    /*React.useEffect(() => {
        setPostName(currenUser.name);
        setImageLink(currenUser.link);
    }, [currenUser, props.isOpen]);*/

    function handleAddName(e) {
        setPostName(e.target.value);
    }

    function handleAddLink(e) {
        setImageLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddNewCard({
            name: postName,
            link: imageLink});
    }

    return (
        <PopupWithForm
            popupName={'add-photo'}
            isOpen={props.isOpen}
            onClose={props.onClose}
            form={'post-creating'}
            formName={'creating'}
            title={'Новое место'}
            saveButton={'create-new-post'}
            buttonText={!props.isLoaded ? 'Создать' : 'Создание...'}
            onSubmit={handleSubmit}
        >
            <>
                <label className="popup__label">
                    <input
                        type="text"
                        value={postName || ''}
                        onChange={handleAddName}
                        placeholder="Название"
                        required id="postName"
                        name="name"
                        className="popup__input popup__input_type_post-name"
                        minLength="2"
                        maxLength="30"
                    />
                    <span className="popup__input-error postName-error"> </span>
                </label>
                <label className="popup__label">
                    <input
                        type="url"
                        value={imageLink || ''}
                        onChange={handleAddLink}
                        placeholder="Ссылка на картинку"
                        required
                        id="imageLink"
                        name="link"
                        className="popup__input popup__input_type_link"
                    />
                    <span className="popup__input-error imageLink-error"> </span>
                </label>
            </>
        </PopupWithForm>
    );
}

export default AddPlacePopup;