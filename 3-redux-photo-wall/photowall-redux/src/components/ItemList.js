import React from 'react';
import './components.css';
import ItemDetails from './ItemDetails';

const ItemList = ({ items }) => {
	console.log('ItemList items:', items);
	return (
		<div className="photo-grid">
			{items &&
				items.sort((a, b) => b.id - a.id).map((item, index) => (
					<ItemDetails
						url={item.url}
						// handleDelete={handleDelete}
						key={index}
						id={item.id}
						description={item.description}
					/>
				))}
		</div>
	);
};

export default ItemList;
