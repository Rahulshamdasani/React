import React from 'react';
import { useState } from 'react';

const Layout = () => {
	const [ dropdown, setDropdown ] = React.useState(false);

	const toggleMenu = () => {
		setDropdown(!dropdown);
		var dropdowns = document.getElementsByClassName('dropdown-content');
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	};

	return (
		<div className="menu">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a href="/">MyApp</a>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link " href="/">
								Home
							</a>
						</li>

						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								onClick={toggleMenu}
							>
								Dropdown button
							</button>
							{dropdown && (
								<div className="">
									<a className="dropdown-item show" href="/Mapping">
										Mapping
									</a>
									<a className="dropdown-item show" href="/usestate">
										Title Change
									</a>
									<a className="dropdown-item show" href="/usestate2">
										ArrayChange-UseState
									</a>
									<a className="dropdown-item show" href="/counter">
										Counter
									</a>
									<a className="dropdown-item show" href="/useeffect">
										useEffect
									</a>
									<a className="dropdown-item show" href="/fetchdata">
										FetchData
									</a>
									<a className="dropdown-item  show" href="/conditionalRending">
										conditionalRending
									</a>
									<a className="dropdown-item  show" href="/phonebook">
										PhoneBook
									</a>
									<a className="dropdown-item show" href="/largeForm">
										LargeForm
									</a>
									<a className="dropdown-item show" href="/useRefUseCase">
										UseRef/UncontrolledINputs
									</a>
									<a className="dropdown-item show" href="/useReducer">
										useReducer
									</a>
									<a className="dropdown-item show" href="/propDrilling">
										PropDrilling
									</a>
									<a className="dropdown-item show" href="/useContext">
										UseContext
									</a>
									<a className="dropdown-item show" href="/propTypes">
										Prop Types
									</a>
								</div>
							)}
						</div>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Layout;
