import React, { createContext, useContext } from 'react';
import { data } from './DummyData';

var ItemContext = createContext();
const UseContext = () => {
	const [ items, setItems ] = React.useState(data);
	const removeItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};
	return (
		<ItemContext.Provider value={{ items, removeItem }}>
			<div className="container">
				<h4>UseContext</h4>
				<PostList />
			</div>
		</ItemContext.Provider>
	);
};

export const PostList = () => {
	const { items } = useContext(ItemContext);
	return (
		<div className="container">
			{items.map((item, index) => {
				return <SingleItem key={index} item={item} />;
			})}
		</div>
	);
};

const SingleItem = ({ item }) => {
	const { removeItem } = useContext(ItemContext);
	return (
		<div className="item">
			<h4>{item.title}</h4>
			<button onClick={() => removeItem(item.id)}> Delete </button>
		</div>
	);
};

export default UseContext;
