import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Pagination } from './components/Pagination';
// import { Search } from './components/Search';

function App() {
	const pokeBaseUrl = `${import.meta.env.VITE_API_BASE_URL}`;
	const [loadPoke, setLoadPoke] = useState(`${pokeBaseUrl}?limit=10`);
	const [allPokemon, setAllPokemon] = useState([]);
	const [loading, setLoading] = useState(true);
	const [nextUrl, setNextUrl] = useState('');
	const [prevUrl, setPrevUrl] = useState('');
	const [numberPage, setNumberPage] = useState(1);

	const pokeFetch = async () => {
		setLoading(true);

		const data = await fetch(loadPoke).then((res) => res.json());
		setNextUrl(data.next);
		setPrevUrl(data.previous);

		const getAllPokemon = await Promise.all(
			data.results.map(async (pokemon) => {
				const data = await fetch(`${pokeBaseUrl}/${pokemon.name}`).then((res) => res.json());
				return data;
			})
		);
		setAllPokemon((currentList) => [...currentList, ...getAllPokemon]);

		setLoading(false);
	};

	useEffect(() => {
		pokeFetch();
	}, [loadPoke]);

	function goToNextPage(e) {
		e.preventDefault();
		setLoadPoke(nextUrl);
		setAllPokemon([]);
		setNumberPage((prevPage) => prevPage + 1);
	}

	function goToPrevPage(e) {
		e.preventDefault();
		setNumberPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

		if (numberPage > 1) {
			setLoadPoke(prevUrl);
			setAllPokemon([]);
		}
	}

	return (
		<>
			<Header />
			{/* <Search /> */}
			<Card api={allPokemon} isLoading={loading} />
			<Pagination prevPage={goToPrevPage} nextPage={goToNextPage} numberPage={numberPage} />
		</>
	);
}

export default App;
