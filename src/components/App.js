import React, { Component } from 'react';
import '../stylesheets/App.scss';
import PokeList from './PokeList';

class App extends Component {
	render() {
		return (
			<div className="app">
				<PokeList />
			</div>
		);
	}
}

export default App;
