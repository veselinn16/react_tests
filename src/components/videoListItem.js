import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="video__list-item" onClick={() => onVideoSelect(video)}>
            <div className="video__list-container">
                <img className="video__list-item--thumb" src={imgUrl}/>
                <div className="video__list-item--title">{video.snippet.title}</div>
            </div>            
        </li>
    )
};

export default VideoListItem;