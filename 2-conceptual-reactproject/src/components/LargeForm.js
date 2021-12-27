import React from 'react';
import { useState } from 'react';

const LargeForm = () => {
	const [ contact, setContact ] = useState({ name: '', phone: '', age: '' });
	const [ allContacts, setAllContacts ] = useState([]);
	const handleChange = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setAllContacts([ ...allContacts, contact ]);
		setContact({ name: '', phone: '', age: '' });
	};
	return (
		<div className="container">
			<section>
				<form className="form">
					<div class="form-group">
						<label for="name">Name</label>
						<input
							type="text"
							class="form-control"
							id="Name"
							name="name"
							value={contact.name}
							aria-describedby="name"
							placeholder="Enter Name"
							onChange={handleChange}
						/>
					</div>
					<div class="form-group">
						<label for="phoneNumber">Phone Number</label>
						<input
							type="text"
							class="form-control"
							id="phoneNumber"
							name="phone"
							value={contact.phone}
							placeholder="1234567890"
							onChange={handleChange}
						/>
					</div>
					<div class="form-group">
						<label for="phoneNumber">Age</label>
						<input
							type="text"
							class="form-control"
							id="age"
							name="age"
							value={contact.age}
							placeholder="18"
							onChange={handleChange}
						/>
					</div>
					<button type="submit" onClick={handleSubmit} class="btn btn-primary">
						Submit
					</button>
				</form>
			</section>

			<section>
				<div className="">
					{allContacts.map((contact, index) => {
						return (
							<div key={index} className="">
								<div className="item">
									<h5 className="">{contact.name}</h5>
									<p className="">{contact.age}</p>
									<p className="">{contact.phone}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default LargeForm;
