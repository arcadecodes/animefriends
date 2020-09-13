import React from 'react';
import Card from './Card';


const CardList = ({ characters }) => {
    const CardComponent = characters.map((name, i) => {
        return (<Card
            key={i}
            id={characters[i].id}
            name={characters[i].name}
            anime={characters[i].anime}
            voiceactress={characters[i].voiceactress}
            image={characters[i].image} />)
    })
    return (
        <div>
            {CardComponent}
        </div>
    );
}

export default CardList;