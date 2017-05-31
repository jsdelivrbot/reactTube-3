import axios from 'axios';

export function getRelatedVideos(videoId, callback) {

	var url = 'https://www.googleapis.com/youtube/v3/search';
	var params = {
		key: config.API_KEY,
		part: 'snippet',
		type: 'video',
		relatedToVideoId: videoId
	};

	axios.get(url, { params }).then(function (response) {
		callback(response.data.items);
	});
}

export function getVideoDetails(videoId) {
	var url = 'https://www.googleapis.com/youtube/v3/videos';
	var params = {
		key: config.API_KEY,
		type: 'video',
		part: 'statistics',
		id: videoId
	};

	axios.get(url, { params }).then(function (response) {
		console.log(response)
	});
}