import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDLca_J532WKNPI04YMqyVSBKWgBAviO_M';

class App extends Component {
	render() {
		return (
			<div>
				Hello world!
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));