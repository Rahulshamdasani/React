import React from 'react';

const UseRefUseCase = () => {
	const formContainerRef = React.useRef(null);
	const [ allContacts, setAllContacts ] = React.useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('handleSubmit');

		// creating form object
		let newContact = {
			name: formContainerRef.current.name.value,
			phone: formContainerRef.current.phone.value,
			age: formContainerRef.current.age.value
		};
		setAllContacts([ ...allContacts, newContact ]);
		formContainerRef.current.reset();
	};

	return (
		<div className="container">
			<h3>UseRef instead of handle change on form</h3>
			<section>
				<form ref={formContainerRef} className="form">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className="form-control"
							id="Name"
							name="name"
							aria-describedby="name"
							placeholder="Enter Name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phoneNumber">Phone Number</label>
						<input
							type="text"
							className="form-control"
							id="phoneNumber"
							name="phone"
							placeholder="1234567890"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phoneNumber">Age</label>
						<input type="text" className="form-control" id="age" name="age" placeholder="18" />
					</div>
					<button type="submit" onClick={handleSubmit} className="btn btn-primary">
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

export default UseRefUseCase;
