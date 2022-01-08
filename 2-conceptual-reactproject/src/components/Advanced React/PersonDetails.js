import React from 'react';
import { data } from '../DummyData';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PersonDetails = () => {
	let { id } = useParams();
	let person = data.find((person) => person.id === parseInt(id));
	console.log(person.completed);
	return (
		<div className="container">
			<h4>Person details</h4>
			<Link to="/dynamicRoute">Go back to home</Link>
			<div className="item">
				<h4>{person.title}</h4>
				<h4 style={{ color: 'red' }}>{String(person.completed)}</h4>
			</div>
		</div>
	);
};

export default PersonDetails;
