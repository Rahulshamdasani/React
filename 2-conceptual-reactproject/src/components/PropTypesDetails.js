import React from 'react';
import PropTypes from 'prop-types';
const PropTypesDetails = ({ name, age, secretIdentity, other }) => {
	console.log(other);
	return (
		<div className="item">
			<h4>{name || 'John Doe'}</h4>
			<h4>{age || '30'}</h4>
			<h4>{secretIdentity || 'Unknown'}</h4>
			<h4>{(other && other.powers) || 'unknown'}</h4>
		</div>
	);
};

// PropTypesDetails.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	age: PropTypes.number.isRequired,
// 	secretIdentity: PropTypes.string.isRequired,
// 	other: PropTypes.isRequired
// };

// PropTypesDetails.defaultProps = {
// 	name: 'John Doe',
// 	age: 30,
// 	secretIdentity: 'Unknown',
// 	other: { powers: 'Unknown' }
// };

export default PropTypesDetails;
