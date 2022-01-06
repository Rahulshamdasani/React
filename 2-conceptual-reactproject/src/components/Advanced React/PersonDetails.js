import React from 'react';
import { data } from '../DummyData';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PersonDetails = ({ person }) => {
	let { id } = useParams();
	console.log(id);
	return (
		<div className="container">
			<h4>Person details</h4>
			<Link to="/dynamicRoute">Go back to home</Link>
		</div>
	);
};

export default PersonDetails;
