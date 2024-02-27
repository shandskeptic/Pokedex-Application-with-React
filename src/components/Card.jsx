import logo from '../assets/poketest.webp';

export const Card = () => {
	return (
		<>
			<div className="flex justify-center items-center ">
				<div className="grid grid-cols-3 md:grid-cols-5 gap-4 ">
					<div className=" bg-slate-100 w-[28vw] text-sm rounded-md  md:w-[10vw]">
						<a href="" className=" bg-primary-400 text-white font-bold flex justify-center rounded-t-md p-2 hover:text-secondary-400">
							Pokename
						</a>
						<div className=" flex justify-center items-center  bg-yellow-200">
							<img className="h-[24vw] bg-red-200 m-2 md:h-[8vw]" src={logo} alt="Poketest" />
						</div>
						<div className=" bg-primary-600 text-white flex justify-between rounded-b-md p-1 overflow-hidden">
							<p className=" ">#1</p>
							<p>200 kg</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
