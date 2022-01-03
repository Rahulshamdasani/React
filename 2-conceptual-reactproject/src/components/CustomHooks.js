import React, { useState, useEffect } from 'react';
import { MyFetchHook } from './MyFetchHook';
const CustomHooks = () => {
	const URL = 'https://jsonplaceholder.typicode.com/todos';
	const { items, isLoading } = MyFetchHook({ URL });
	return (
		<div className="container">
			<h4>Custom Hooks example</h4>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div>
					{items.map((item, index) => {
						return <SingleItem key={index} item={item} />;
					})}
				</div>
			)}
		</div>
	);
};

const SingleItem = ({ item }) => {
	return (
		<div className="item">
			<h4>{item.title}</h4>
		</div>
	);
};

export default CustomHooks;
