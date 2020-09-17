import React from 'react';

import "./Card.css"

const Card = (props) => {
    const { name, image, anime, voiceactress } = props;
    return (
        <div id='card' className=' dib br3 pa3 ma2 grow b2 shadow-5'>
            <img alt="Chibi" className="mikasa" src={require(`${image}`)} />
            <div>
                <h2>{name}</h2>
                <h3>Anime: {anime}</h3>
                <p>Voice actor/actress: {voiceactress}</p>
            </div>
        </div>
    )
}

export default Card; 