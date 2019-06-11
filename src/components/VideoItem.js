import React from 'react';

export default function VideoItem({ video, handleVideoSlelect }) {
	return (
		<div onClick={() => handleVideoSlelect(video)} className='item video-item'>
			<img
				className='ui image'
				src={video.snippet.thumbnails.medium.url}
				alt='video thumbnail'
			/>
			<div className='content'>
				<div className='header'>{video.snippet.title}</div>
			</div>
		</div>
	);
}
