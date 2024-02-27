export const Pagination = () => {
	return (
		<div className="flex justify-center items-center w-full bottom-0 fixed bg-gradient-to-t from-primary-400 md:bg-none">
			<div className="  text-white m-6 w-full md:w-[62vw] rounded-md font-bold  overflow-hidden">
				<div className="grid grid-cols-3 items-center text-center">
					<button className="p-2 bg-primary-400 rounded-l-md hover:text-primary-600 hover:bg-secondary-400">Previous</button>
					<p className="p-2 bg-primary-600">#1</p>
					<button className="p-2 bg-primary-400 rounded-r-md hover:text-primary-600 hover:bg-secondary-400">Next</button>
				</div>
			</div>
		</div>
	);
};
