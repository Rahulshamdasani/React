import React, { useState } from 'react';

const Form = ({ allItems, setAllItems, setDisplayForm }) => {
	const [ url, setUrl ] = useState('');
	const [ description, setDescription ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const newItem = {
			url,
			description
		};
		setAllItems([ ...allItems, newItem ]);
		setUrl('');
		setDescription('');
		setDisplayForm(false);
	};

	return (
		<div>
			<section>
				<form className="form">
					<div className="form-group">
						<label htmlFor="url">URL</label>
						<input
							type="text"
							className="form-control"
							id="url"
							name="url"
							aria-describedby="url"
							value={url}
							placeholder="Enter URL"
							onChange={(e) => setUrl(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<input
							type="text-area"
							className="form-control"
							id="description"
							name="description"
							value={description}
							aria-describedby="description"
							placeholder="Type a description"
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary" onClick={handleSubmit}>
						Submit
					</button>
				</form>
			</section>
		</div>
	);
};

export default Form;
