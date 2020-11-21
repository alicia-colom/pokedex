import '../stylesheets/PokeList.scss';
import Pokemon from './Pokemon';

const PokeList = (props) => {
	const pokemons = props.list.map((eachItem) => {
		const evolutedOf = props.list.find(
			(each) => eachItem.evolution === each.name
		);

		return (
			<li className="pokeItem" key={eachItem.id}>
				<Pokemon pokemon={eachItem} mother={evolutedOf} />
			</li>
		);
	});

	return <ul className="pokeList">{pokemons}</ul>;
};

export default PokeList;
