import React from 'react';
import Modal from './Modal';
import { useReducer, useState } from 'react';

const Index = () => {
	const [ name, setName ] = useState('');
	const defaultState = {
		allPeople: [],
		name: '',
		isModelOpen: false,
		modelContent: 'Hello'
	};
	const reducer = (state, action) => {
		let { allPeople, isModelOpen, modelContent } = state;
		console.log('here', action);
		console.log('here', state);
		switch (action.type) {
			case 'ADD_NAME':
				allPeople = [ ...allPeople, action.payload ];
				isModelOpen = true;
				modelContent = `${action.payload} Added Successfully`;
				return { ...state, allPeople, isModelOpen, modelContent };

			case 'NO_NAME':
				isModelOpen = true;
				modelContent = `Name pass kar bhosdike`;
				return { ...state, isModelOpen, modelContent };
		}
	};
	const [ state, dispatch ] = useReducer(reducer, defaultState);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submit');

		if (name) {
			dispatch({ type: 'ADD_NAME', payload: name });
			setName('');
		} else {
			dispatch({ type: 'NO_NAME' });
		}
	};

	return (
		<div className="container">
			{state.isModelOpen && <Modal modelContent={state.modelContent} />}
			<h3>using UseReducer </h3>
			<section>
				<form className="form">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className="form-control"
							id="Name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							aria-describedby="name"
							placeholder="Enter Name"
						/>
						<button type="submit" onClick={handleSubmit} className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</section>
			<section>
				{state.allPeople &&
					state.allPeople.map((name, index) => {
						return (
							<div className="item" key={index}>
								{name}
							</div>
						);
					})}
				{console.log('blahblah', state.allPeople)}
			</section>
		</div>
	);
};

export default Index;
