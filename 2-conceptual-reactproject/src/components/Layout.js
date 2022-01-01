import React from 'react';

const Layout = () => {
	return (
		<div className="menu">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a href="/">MyApp</a>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link" href="/Mapping">
								Mapping
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/usestate">
								Title Change
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/usestate2">
								ArrayChange-UseState
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/counter">
								Counter
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/useeffect">
								useEffect
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/fetchdata">
								FetchData
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/conditionalRending">
								conditionalRending
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/phonebook">
								PhoneBook
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/largeForm">
								LargeForm
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/useRefUseCase">
								UseRef/UncontrolledINputs
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="/useReducer">
								useReducer
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Layout;
