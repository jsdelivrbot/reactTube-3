import React from 'react';

import { getRelatedVideos } from './YTapi';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    function handleClick() {
        onVideoSelect(video);
        getRelatedVideos(video.id.videoId);
    }

    return (
        <li onClick={handleClick} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;