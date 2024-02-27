import logo from '../assets/poketest.webp';

export const Card = () => {
	return (
		<>
			<div className="flex justify-center items-center w-full">
				<div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-[20vw] md:mb-0 md:w-[62vw] mx-6 md:place-items-center">
					<div className=" bg-slate-100 w-[28vw] rounded-md md:w-[11vw]">
						<a href="/" className=" bg-primary-400 text-white font-bold flex justify-center rounded-t-md p-2 hover:text-primary-600 hover:bg-secondary-400">
							Pokename
						</a>
						<div className="flex justify-center items-center  bg-grey-200 ">
							<img className="h-[24vw] m-2 md:h-[8vw]" src={logo} alt="Poketest" />
						</div>
						<div className=" bg-primary-600 text-white flex justify-between rounded-b-md overflow-hidden">
							<p className=" p-1 bg-secondary-400 text-primary-600 font-bold">#1</p>
							<p className=" p-1">200 kg</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
