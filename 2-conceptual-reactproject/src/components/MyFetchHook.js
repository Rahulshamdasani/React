import { useState, useEffect } from 'react';

export const MyFetchHook = ({ URL }) => {
	const [ items, setItems ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	const fetchData = async () => {
		const response = await fetch(URL);
		const data = await response.json();
		setItems(data);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { items, isLoading };
};
