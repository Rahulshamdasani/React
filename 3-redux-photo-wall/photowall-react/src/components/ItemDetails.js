import React from 'react';

const ItemDetails = ({ url, id, description, handleDelete }) => {
	return (
		<div>
			<img src={url} alt="could not fetch what to display" />
			{description}
			<br />
			<button onClick={() => handleDelete(id)} className="btn btn-danger">
				Delete
			</button>
		</div>
	);
};

export default ItemDetails;
