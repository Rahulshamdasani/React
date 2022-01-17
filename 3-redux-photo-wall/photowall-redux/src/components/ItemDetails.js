import React from 'react';
import { connect } from 'react-redux';

const ItemDetails = ({ url, id, description, handleDelete }) => {
	return (
		<div>
			<img src={url} alt="could not fetch what to display" />
			<br />
			{description}
			<br />
			<button onClick={() => handleDelete(id)} className="btn btn-danger">
				Delete
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		props: state
	};
}

export default connect(mapStateToProps)(ItemDetails);
