import React from 'react';
import VideoListItem from './videoListItem';

const videoList = props => {
    const videoItems = props.videos.map( video => {
        return (
            <VideoListItem
                className="" 
                key={video.etag} 
                video={video}
                onVideoSelect={props.onVideoSelect}
            />
        )
    })
    return (
        <div className="sidebar">
            <ul className="videos__list">
                {videoItems}
            </ul>
            <footer className="footer">
                Copyright &copy; 2018 <span id="developer">Veselin Tonev</span>. <br/>
                All rights reserved.
            </footer>
        </div>
        
    )
}

export default videoList;