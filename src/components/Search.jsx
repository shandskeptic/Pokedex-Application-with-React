import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Card } from './Card';

export const Search = () => {
	const pokeBaseUrl = `${import.meta.env.VITE_API_BASE_URL}`;
	const [loadAllPoke, setLoadAllPoke] = useState(`${pokeBaseUrl}?limit=999`);
	const [allPokemon, setAllPokemon] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const pokeFetch = async () => {
		const data = await fetch(loadAllPoke).then((res) => res.json());

		const getAllPokemon = await Promise.all(
			data.results.map(async (pokemon) => {
				const data = await fetch(`${pokeBaseUrl}/${pokemon.name}`).then((res) => res.json());
				return data;
			})
		);
		setAllPokemon((currentList) => [...currentList, ...getAllPokemon]);
	};

	useEffect(() => {
		pokeFetch();
	}, [loadAllPoke]);

	const handleSearch = () => {
		if (searchTerm.length > 1) {
			const filteredResults = allPokemon.filter((pokemon) => {
				return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || pokemon.id.toString().includes(searchTerm.toLowerCase());
			});
			setSearchResults(filteredResults);
		} else {
			setSearchResults([]);
		}
	};

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
		handleSearch();
	};

	return (
		<>
			<div className="flex justify-center m-6 text-white">
				<input
					value={searchTerm}
					onChange={handleChange}
					className="border-2 focus:border-secondary-400 bg-primary-400 p-2 rounded-md w-full md:w-[62vw] text-center leading-tight placeholder-white focus:outline-none"
					type="text"
					placeholder="Search..."
				/>
			</div>

			{searchResults.length > 0 ? (
				<>
					<div className="mb-[10vw]">
						<Card api={searchResults} />
					</div>
				</>
			) : null}
		</>
	);
};

Search.propTypes = {
	api: PropTypes.string.isRequired,
};
