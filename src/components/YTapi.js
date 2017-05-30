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