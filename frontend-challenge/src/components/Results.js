import React from 'react';
import { FetchData } from './FetchData';
import ItemCard from './ItemCard';

const Results = ({ searchTerm }) => {
	const { items, isLoading } = FetchData({
		URL: `https://api.nasa.gov/planetary/apod?api_key=cnM3gjok2eAG4KmkRdygzyF3gyR1bCTtontgeShN&&count=${searchTerm}`
	});
	return (
		<div className="container">
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{items.map((item, index) => (
						<div key={index}>
							<ItemCard id={index} item={item} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Results;
