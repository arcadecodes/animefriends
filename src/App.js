import React, { Component } from 'react';
import CardList from './CardList'
import { characters } from './anime';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css'



//everytime the input changes in the search box there is an event.


class App extends Component {
    constructor() {
        super()
        this.state = { //desribes the App. 
            characters: [],
            searchfield: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        this.setState({ characters: characters })
        console.log('componentDidMount');
    }



    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { characters, searchfield } = this.state
        const filteredCharacters = characters.filter(character => {
            return character.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        console.log(filteredCharacters);
        console.log('render');
        if (!characters.length) {
            return <h1>Loading..</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1">Anime Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList characters={filteredCharacters} />
                    </Scroll>
                </div>

            );
        }
    }
}

export default App