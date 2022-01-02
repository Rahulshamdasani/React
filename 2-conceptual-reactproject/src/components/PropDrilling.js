import React from 'react';
import { data } from './DummyData';

const PropDrilling = () => {
	const [ items, setItems ] = React.useState(data);
	const removeItem = (id) => {
		const newData = items.filter((item) => item.id !== id);
		setItems(newData);
	};

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
			<h4 className="card-title">{item.title}</h4>
			<button className="btn btn-danger" onClick={() => removeItem(item.id)}>
				{' '}
				Delete{' '}
			</button>
		</div>
	);
};

export default PropDrilling;
