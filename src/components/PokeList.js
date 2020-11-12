import React, { useState } from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

const PokeList = () => {
	const [age, setOlder] = useState(20);
	function getOlder() {
		setOlder(age + 1);
	}
	return (
		<>
			<div className="pokeList"></div>

			<Pokemon />
			<Pokemon />
		</>
	);
};

export default PokeList;
