import React, { Component } from 'react';
// import React, { useState } from 'react';
import '../stylesheets/App.scss';
import pokedex from '../data/pokedex.json';
import PokeList from './PokeList';

class App extends Component {
	render() {
		return (
			<div className="app">
				<img className="logo" src="../images/logo-pokemon.png" />
				<PokeList pokedex={pokedex} />
			</div>
		);
	}
}

export default App;
