import React from 'react';
import { data } from './DummyData';

const UseContext = () => {
	const [ items, setItems ] = React.useState(data);
	const removeItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
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
			<h4>{item.title}</h4>
			<button onClick={() => removeItem(item.id)}> Delete </button>
		</div>
	);
};

export default UseContext;
