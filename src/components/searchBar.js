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
                <div className="title">
                    <h1 className="logo">VidSearch</h1>
                </div>
                <div className="search__container">
                    <input 
                    className="search"
                    value={this.state.query}
                    onChange={e => this.onInputChange(e.target.value)} 
                    placeholder="Search Videos" />
                    <svg className="search__icon">
                        <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
                    </svg>
                </div>
            </div>
        );
    } 
}

export default SearchBar;