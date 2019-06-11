import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({ videos, handleVideoSlelect }) {
	return (
		<div className='ui relaxed devided list'>
			{videos.map(video => {
				return (
					<VideoItem
						key={video.etag}
						video={video}
						handleVideoSlelect={handleVideoSlelect}
					/>
				);
			})}
		</div>
	);
}
