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
        <ul className="videos__list">
            {videoItems}
        </ul>
    )
}

export default videoList;