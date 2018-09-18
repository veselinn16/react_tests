import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        query: ''
    }

    onInputChange = e => { 
        this.setState({query: e.target.value});
        console.log(this.state.query)
    }
    
    render() {
        return <input onChange={this.onInputChange} />;
    } 
}

export default SearchBar;