import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

export const apiKey = 'AIzaSyB0WZbsy37TjcUDNYSq2eMyFgLMfjy-oL0';

// Create component, producing HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}


// Put component in the DOM
ReactDOM.render(<App />, document.getElementById('root'));