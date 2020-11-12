import React, { Component } from 'react';
import '../stylesheets/Pokemon.scss';

const Pokemon = (props) => {

	return (
		<>
			<div className="pokemon">
				<h2>{props.pokemon.name}</h2>
				<img 
				src={props.pokemon.url}
				/>
				<p>{props.pokemon.types}</p>
				<p>{props.pokemon.evolution}</p>
				</div>
		</>
	);
};

export default Pokemon;

// type={pokemon.types} evolution={pokemon.evolution}
