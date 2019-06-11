import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

import youtube from '../apis/youtube';

export default function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [error, setError] = useState('');

	const handleSearch = async term => {
		try {
			const response = await youtube.get('/search', { params: { q: term } });
			setVideos(response.data.items);
			setSelectedVideo(response.data.items[0]);
		} catch (error) {
			setError('We are sorry! Something went wrong!');
		}
	};

	const handleVideoSlelect = video => {
		setSelectedVideo(video);
	};

	useEffect(() => {
		handleSearch('surfing');
	}, []);

	const renderMain = () => {
		if (error) return <div className='error'>{error}</div>;

		return (
			<div className='ui container'>
				<SearchBar handleSearch={handleSearch} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList videos={videos} handleVideoSlelect={handleVideoSlelect} />
						</div>
					</div>
				</div>
			</div>
		);
	};

	return <>{renderMain()}</>;
}
