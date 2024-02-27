export const Pagination = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="  text-white m-6 w-full md:w-[60vw] bg-secondary-400 rounded-md font-bold text-sm ">
				<div className="grid grid-cols-3 items-center text-center">
					<button className="p-2 bg-primary-400 rounded-l-md hover:text-secondary-400">Previous</button>
					<p className="p-2 bg-primary-600">#1</p>
					<button className="p-2 bg-primary-400 rounded-r-md hover:text-secondary-400">Next</button>
				</div>
			</div>
		</div>
	);
};
