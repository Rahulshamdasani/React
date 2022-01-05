import React from 'react';
import { data } from './PropTypesData';
import PropTypesDetails from './PropTypesDetails';

const PropTypes = () => {
	return (
		<div className="container">
			<h4>Prop Types example</h4>
			<div className="item-list">
				{data.map((item, index) => {
					return <PropTypesDetails key={index} {...item} />;
				})}
			</div>
		</div>
	);
};

export default PropTypes;
