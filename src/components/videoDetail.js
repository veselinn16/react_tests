import React from 'react';
import videoList from './videoList';

const VideoDetail = ({ video }) => {
    if(!video) return <div>Loading...</div>;
    const videoId = video.id.videoId;
    
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video__container">
            <div className="video__frame">
                <iframe className="video" src={url}></iframe>
            </div>
            <div className="video__details">
                <div className="video__title">{video.snippet.title}</div>
                <div className="video__description">
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;