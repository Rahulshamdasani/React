import React from 'react';
import { data } from './DummyData';

const PropDrilling = () => {
	const [ items, setItems ] = React.useState(data);
	const removeItem = (id) => {
		const newData = items.filter((item) => item.id !== id);
		setItems(newData);
	};

	return <PostList items={items} removeItem={removeItem} />;
};

const PostList = ({ items, removeItem }) => {
	return (
		<div className="container">
			{items.map((item, index) => {
				return <SingleItem key={index} removeItem={removeItem} item={item} />;
			})}
		</div>
	);
};

const SingleItem = ({ item, removeItem }) => {
	return (
		<div className="item">
			<h4>{item.title}</h4>
			<button onClick={() => removeItem(item.id)}> Delete </button>
		</div>
	);
};

export default PropDrilling;
