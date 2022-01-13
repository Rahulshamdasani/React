import React from 'react';
import './components.css';
import ItemDetails from './ItemDetails';

const ItemList = ({ allItems, handleDelete }) => {
	console.log('ItemList items:', allItems);
	return (
		<div className="photo-grid">
			{allItems &&
				allItems.map((item, index) => (
					<ItemDetails
						url={item.url}
						handleDelete={handleDelete}
						key={index}
						id={item.id}
						description={item.description}
					/>
				))}
		</div>
	);
};

export default ItemList;
