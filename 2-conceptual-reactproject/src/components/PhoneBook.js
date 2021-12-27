import React from 'react';
import { useState, useEffect } from 'react';

const PhoneBook = () => {
	const [ name, setName ] = useState('');
	const [ phone, setPhone ] = useState('');

	const [ phoneBook, setPhoneBook ] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setPhoneBook([ ...phoneBook, { name, phone } ]);
		setName('');
		setPhone('');
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
							value={name}
							aria-describedby="name"
							placeholder="Enter Name"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div class="form-group">
						<label for="phoneNumber">Phone Number</label>
						<input
							type="text"
							class="form-control"
							id="phoneNumber"
							value={phone}
							placeholder="1234567890"
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<button type="submit" onClick={handleSubmit} class="btn btn-primary">
						Submit
					</button>
				</form>
			</section>

			<section>
				<div className="">
					{phoneBook.map((contact, index) => {
						return (
							<div key={index} className="">
								<div className="item">
									<h5 className="">{contact.name}</h5>
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

export default PhoneBook;
