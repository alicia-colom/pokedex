import { useState } from 'react';
import '../stylesheets/App.scss';
import pokedex from '../data/pokedex.json';
import logo from '../images/logo-pokemon.png';
import PokeList from './PokeList';

const App = () => {
	const [data, setData] = useState(pokedex);

	return (
		<div className="app">
			<img className="logo" src={logo} alt="Logo Pokemon" />
			<PokeList list={data} />
			<small className="small">Made with React by Alicia Colom</small>
		</div>
	);
};



export default App;
