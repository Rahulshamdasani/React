import React from 'react';
import { useState, useReducer } from 'react';
import Modal from './Modal';

const Index = () => {
	const [ name, setName ] = useState('');

	const defaultState = {
		allNames: [],
		isModalOpen: false,
		modalContent: ''
	};

	const reducerFunction = (state, action) => {
		console.log('state', state);
		console.log('action', action);

		switch (action.type) {
			case 'ADD_NAME':
				return {
					...state,
					allNames: [ ...state.allNames, action.payload ],
					modalContent: `${action.payload} is set`,
					isModalOpen: true
				};

			case 'NO_NAME':
				return {
					...state,
					modalContent: 'Please enter a name',
					isModalOpen: true
				};
				return state;
		}
	};

	const [ state, dispatch ] = useReducer(reducerFunction, defaultState);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			dispatch({ type: 'ADD_NAME', payload: name });
			setName('');
		} else {
			dispatch({ type: 'NO_NAME', payload: 'Name is required' });
		}
	};

	return (
		<div className="container">
			{state.isModalOpen && <Modal name={state.modalContent} />}
			<h4>This is copy of useReducer just for practice</h4>

			<form className="form">
				<input
					type="text"
					name="name"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<button className="submit" type="submit" onClick={handleSubmit}>
					Add
				</button>
			</form>

			<section>
				{state.allNames &&
					state.allNames.map((name, index) => {
						return (
							<div key={index} className="item">
								{name}
							</div>
						);
					})}
			</section>
		</div>
	);
};

export default Index;
