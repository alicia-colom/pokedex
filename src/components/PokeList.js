import React, { Component } from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

class PokeList extends Component {
	render() {
		console.log(this.props.list);
		const pokemons = this.props.list.map((eachItem) => (
			<li className="pokeItem" key={eachItem.id}>
				<Pokemon pokemon={eachItem} />
			</li>
		));

		return <ul className="pokeList">{pokemons}</ul>;
	}
}

export default PokeList;
