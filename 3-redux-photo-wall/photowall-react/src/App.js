import './App.css';
import Form from './components/Form';
import React, { useState } from 'react';
import AddBtn from './UI/AddBtn/AddBtn';
import ItemList from './components/ItemList';

function App() {
	const [ allItems, setAllItems ] = useState([]);
	const [ displayForm, setDisplayForm ] = useState(false);
	return (
		<div className="container">
			<h4>Hello</h4>

			<div onClick={() => setDisplayForm(!displayForm)}>
				<AddBtn />
			</div>

			{displayForm && <Form allItems={allItems} setAllItems={setAllItems} />}
			<ItemList allItems={allItems} />
		</div>
	);
}

export default App;
