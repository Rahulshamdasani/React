import React from 'react';

const ItemList = ({ allItems }) => {
	console.log('ItemList items:', allItems);
	return (
		<div className="container">
			{allItems &&
				allItems.map((item, index) => (
					<div key={index}>
						<img src={item.url} alt="No Image" />
						<p>{item.description}</p>
					</div>
				))}
		</div>
	);
};

export default ItemList;
