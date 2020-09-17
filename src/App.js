import React, { Component } from 'react';
import CardList from './CardList'
import { characters } from './anime';
import SearchBox from './SearchBox';
import './App.css'



//everytime the input changes in the search box there is an event.


class App extends Component {
    constructor() {
        super()
        this.state = { //desribes the App. 
            characters: characters,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredCharacters = this.state.characters.filter(characters => {
            return characters.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredCharacters);

        return (
            <div className="tc">
                <h1 className="f1">Anime Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList characters={filteredCharacters} />
            </div>

        );
    }
}

export default App