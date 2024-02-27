import { useState } from 'react';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Pagination } from './components/Pagination';
import { Search } from './components/Search';

function App() {
	const [pokeUrl, setPokeUrl] = useState(`${import.meta.env.VITE_API_BASE_URL}pokemon`);

	console.log('🚀 ~ App ~ pokeUrl:', pokeUrl);
	return (
		<>
			<Header />
			<Search />
			<Card />
			<Pagination />
		</>
	);
}

export default App;
