// import React, { useState } from 'react';
import React, { Component } from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';
// import pokedex from '../data/pokedex.json';

class PokeList extends Component {
	render() {
		const pokemons = this.props.pokedex.map((pokemon) => (
			<li className="pokeItem" key={pokemon.id}>
				<Pokemon pokemon={pokemon} />
			</li>
		));

		return (
			<>
				<ul className="pokeList">{pokemons}</ul>
			</>
		);
	}
}

export default PokeList;
