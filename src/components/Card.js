import React from "react";

function Card({card, myKey, onCardClick}) {
    function handleClick() {
        /*console.log(card.link);
        console.log(card);*/
        onCardClick(card);
    }

    return (
        <li className="post" key={myKey}>
            <button className="post__delete"  type="button" aria-label="Удаление"></button>
            <img src={card.link} alt={card.name} className="post__image" onClick = {handleClick}/>
            <div className="post__description">
                <h2 className="post__subscription">{card.name}</h2>
                <div className="post__like-container">
                    <button className="post__like" type="button" aria-label="Лайк"></button>
                    <p className="post__like-count" name="likeCount">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;