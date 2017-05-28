import React from 'react';

const VideoPlayer = ({video, playerSize}) => {
    if(!video) {
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const playerSizeClass = playerSize === 'small' ? 'col-xs-8' : 'col-xs-12';

    return (
        <div className={playerSizeClass}>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe  src={url} />
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoPlayer;