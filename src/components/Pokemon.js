import propTypes from 'prop-types';
import '../stylesheets/Pokemon.scss';

const Pokemon = (props) => {
	const typeList = props.pokemon.types.map((eachType) => {
		return (
			<li
				key={props.pokemon.id + eachType}
				id={props.pokemon.id + eachType}
				className="description__type--item"
			>
				{eachType}
			</li>
		);
	});

	console.log(props.mother);

	return (
		<>
			<h2 className="name">{props.pokemon.name}</h2>
			<img
				className="image"
				src={props.pokemon.url}
				alt={'Imagen de ' + props.pokemon.name}
				title={'Imagen de ' + props.pokemon.name}
			/>
			<div className="description">
				<ul className="description__type">{typeList}</ul>
				{props.pokemon.evolution ? (
					<div>
						<small>Evolution: </small>
						<span className="description__evolution">
							{props.pokemon.evolution}
						</span>
						<img
							src={props.mother.url}
							alt={
								props.pokemon.evolution
									? 'Evolution of ' + props.pokemon.evolution
									: 'none'
							}
							title={
								props.pokemon.evolution
									? 'Evolution of ' + props.pokemon.evolution
									: 'none'
							}
							className="description__evolution--img"
						/>
					</div>
				) : (
					''
				)}
			</div>
		</>
	);
};

Pokemon.propTypes = {
	id: propTypes.number,
	name: propTypes.string,
	types: propTypes.string,
	evolution: propTypes.string,
};

export default Pokemon;
