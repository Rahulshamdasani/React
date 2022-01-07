import { useState, useEffect } from 'react';

export const FetchData = ({ URL }) => {
	const [ items, setItems ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	const fetchData = async () => {
		const response = await fetch(URL, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		});
		const data = await response.json();
		setItems(data);
		setIsLoading(false);
	};

	useEffect(
		() => {
			fetchData();
		},
		[ URL ]
	);

	return { items, isLoading };
};
