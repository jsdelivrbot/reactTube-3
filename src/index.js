import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoPlayer from './components/videoPlayer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videoList: [],
			currentVideo: null
		}
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList />
				<VideoPlayer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));