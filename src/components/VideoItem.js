import React from 'react';

const VideoItem = (props) => {
    return (
        <div>
            <img alt="thumbnail" src={props.video.snippet.thumbnails.medium.url} />
            {props.video.snippet.title}
        </div>
    );
}

export default VideoItem;