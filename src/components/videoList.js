import React from 'react';

import VideoListItem from './videoListItem';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} 
                updateVideos={props.updateVideos}
            />
        )
    });
    return (
        <ul className="col-xs-4">
            {videoItems}
        </ul>
    );
}

export default VideoList;