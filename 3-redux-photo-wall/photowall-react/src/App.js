import './App.css';
import Form from './components/Form';
import React, { useState } from 'react';
import AddBtn from './UI/AddBtn/AddBtn';
import ItemList from './components/ItemList';
import { data } from './UI/DummyData';

function App() {
	const [ allItems, setAllItems ] = useState(data);
	const [ displayForm, setDisplayForm ] = useState(false);
	const handleDelete = (id) => {
		console.log('ItemDetails id:', id);
		const newAllItems = allItems.filter((item) => item.id !== id);
		console.log(newAllItems);
		setAllItems(newAllItems);
	};
	return (
		<div className="container">
			<h4>Hello</h4>

			<div onClick={() => setDisplayForm(!displayForm)}>
				<AddBtn />
			</div>

			{displayForm && <Form allItems={allItems} setAllItems={setAllItems} setDisplayForm={setDisplayForm} />}
			<ItemList allItems={allItems} setAllItems={setAllItems} handleDelete={handleDelete} />
		</div>
	);
}

export default App;
