import React from 'react';
import CardList from './CardList'
import { characters } from './anime';
import SearchBox from './SearchBox';

const App = () => {
    return (
        <div className="tc">
            <h1>Anime Friends</h1>
            <SearchBox />
            <CardList characters={characters} />
        </div>

    );
}

export default App