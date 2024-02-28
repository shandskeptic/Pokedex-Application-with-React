import PropTypes from 'prop-types';
import { Loading } from './Loading';

export const Card = ({ api, isLoading }) => {
	if (isLoading) {
		return <Loading />;
	}
	return (
		<div className="flex justify-center items-center w-full">
			<div className="md:place-items-center gap-4 grid grid-cols-3 md:grid-cols-5 mx-6 mb-[30vw] md:mb-0 md:w-[62vw] text-sm md:text-base">
				{api.map((pokemon) => {
					return (
						<div className="bg-slate-100 rounded-md w-[28vw] md:w-[11vw] " key={pokemon.id}>
							<a href={pokemon.name} className="flex justify-center bg-primary-400 hover:bg-secondary-400 p-2 rounded-t-md font-bold text-white hover:text-primary-600 capitalize">
								{pokemon.name}
							</a>
							<div className="flex justify-center items-center bg-grey-200 ">
								<img className="m-2 h-[24vw] md:h-[8vw]" src={pokemon.sprites.other.home.front_default} alt="Poketest" />
							</div>
							<div className="flex justify-between bg-primary-600 rounded-b-md text-white overflow-hidden ">
								<p className="bg-secondary-400 p-1 font-bold text-primary-600 ">#{pokemon.id}</p>
								<p className="p-1 ">{pokemon.weight} kg</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

Card.propTypes = {
	api: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			sprites: PropTypes.shape({
				other: PropTypes.shape({
					home: PropTypes.shape({
						front_default: PropTypes.string.isRequired,
					}).isRequired,
				}).isRequired,
			}).isRequired,
			weight: PropTypes.number.isRequired,
		})
	).isRequired,
	isLoading: PropTypes.bool.is,
};
