import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = term => {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="header">
                <input 
                className="search"
                value={this.state.query}
                onChange={e => this.onInputChange(e.target.value)} />
            </div>
        );
    } 
}

export default SearchBar;