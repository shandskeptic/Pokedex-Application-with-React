import { PropTypes } from 'prop-types';

export const Pagination = ({ prevPage, nextPage, numberPage }) => {
	return (
		<div className="bottom-0 fixed flex justify-center items-center bg-gradient-to-t from-primary-400 md:bg-none w-full">
			<div className="m-6 rounded-md w-full md:w-[62vw] font-bold text-white overflow-hidden ">
				<div className="items-center grid grid-cols-3 text-center">
					<button onClick={prevPage} className="bg-primary-400 hover:bg-secondary-400 p-2 rounded-l-md hover:text-primary-600">
						Previous
					</button>
					<p className="bg-primary-600 p-2">#{numberPage}</p>
					<button onClick={nextPage} className="bg-primary-400 hover:bg-secondary-400 p-2 rounded-r-md hover:text-primary-600">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

Pagination.propTypes = {
	prevPage: PropTypes.func.isRequired,
	nextPage: PropTypes.func.isRequired,
	numberPage: PropTypes.string.isRequired,
};
