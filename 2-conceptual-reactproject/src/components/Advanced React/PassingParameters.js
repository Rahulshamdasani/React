import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../DummyData';
import PersonDetails from './PersonDetails';

const PassingParameters = () => {
	return (
		<div className="container">
			<h4>Now we will pass parameters in URL and try to access them</h4>
			{data.map((person) => {
				return (
					<div className="item" key={person.id}>
						<h4>{person.title}</h4>
						<Link to={`/person/${person.id}`}>
							<button>View Details</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default PassingParameters;
