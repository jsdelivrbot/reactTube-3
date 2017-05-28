import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import Menu from './components/menu';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoPlayer from './components/videoPlayer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
			playerSize: 'small'
		}

		this.videoSearch();
	}

	changeVideoPlayerSize() {
		const playerSize = this.state.playerSize === 'small' ? 'large' : 'small';
		console.log(this.state)
		this.setState({ 
			playerSize: playerSize
		});
	}

	videoSearch(term) {
		YTSearch({key: config.API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term)=> { this.videoSearch(term)}, 500);

		return (
			<div>
				<Menu onButtonClick={this.changeVideoPlayerSize.bind(this)} />
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoPlayer video={this.state.selectedVideo} playerSize={this.state.playerSize} />
				{this.state.videoList ? (
					<div className="col-xs-4">Loading...</div>
				 ) :  (
					<VideoList 
						onVideoSelect={selectedVideo => this.setState({selectedVideo})}
						videos={this.state.videos} 
					/>
				 )}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));