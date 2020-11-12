import React, { Component } from 'react';
import '../stylesheets/App.scss';
import pokedex from '../data/pokedex.json';
import PokeList from './PokeList';
import logo from '../images/logo-pokemon.png';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: pokedex,
		};
	}
	render() {
		return (
			<div className="app">
				<img className="logo" src={logo} alt="Logo Pokemon" />
				<PokeList list={this.state.data} />
				<small className="small">Made with React by Alicia Colom</small>
			</div>
		);
	}
}

export default App;
