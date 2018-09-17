import React from 'react';
import ReactDOM from 'react-dom';

// Create component, producing HTML
const App = () => {
    return <div>Yo!</div>;
}


// Put component in the DOM
ReactDOM.render(<App />, document.getElementById('root'));