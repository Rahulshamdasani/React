import React from 'react';
import './Addbtn.css';

const AddBtn = ({ displayForm, setDisplayForm }) => {
	return (
		<div className="container">
			<button className="btn add-btn">+</button>
		</div>
	);
};

export default AddBtn;
