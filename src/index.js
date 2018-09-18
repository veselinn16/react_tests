import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';

export const apiKey = 'AIzaSyB0WZbsy37TjcUDNYSq2eMyFgLMfjy-oL0';



// Create component, producing HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({key: apiKey, term: 'surfing'}, videos => {
            this.setState({ videos });
        })    
    }

    render () {
        return (
            <div>
              <SearchBar/>
            </div>
        );
    }
}


// Put component in the DOM
ReactDOM.render(<App />, document.getElementById('root'));