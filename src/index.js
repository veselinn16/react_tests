import { debounce } from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

import YTSearch from 'youtube-api-search';

export const apiKey = 'AIzaSyB0WZbsy37TjcUDNYSq2eMyFgLMfjy-oL0';



// Create component, producing HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVid: null
        };

        this.videoSearch('Liverpool FC');
    }

    videoSearch(term) {
        YTSearch({key: apiKey, term}, videos => {
            this.setState({ 
                videos,
                selectedVid: videos[0]
            });
        });
    }

    render () {
        // Debounced version of function to call when user types in input
        const videoSearch = debounce(term => { this.videoSearch(term) }, 300);

        return (
            <div>
              <SearchBar onSearchTermChange={videoSearch} />
              <VideoDetail video={this.state.selectedVid} />
              <VideoList 
                onVideoSelect={selectedVid => this.setState({selectedVid})}
                videos={this.state.videos} />
            </div>
        );
    }
}


// Put component in the DOM
ReactDOM.render(<App />, document.getElementById('root'));