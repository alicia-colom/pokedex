import React from 'react';
import '../stylesheets/Pokemon.scss';

const Pokemon = (props) => {
	return (
		<div className="pokemon">
			<h2 className="name">{props.pokemon.name}</h2>
			<img
				className="image"
				src={props.pokemon.url}
				alt={'Imagen de ' + props.pokemon.name}
			/>
			<p className="text">
				<span className="text__type">{props.pokemon.types} </span>
				<span className="text__evolution">{props.pokemon.evolution}</span>
			</p>
		</div>
	);
};

export default Pokemon;
