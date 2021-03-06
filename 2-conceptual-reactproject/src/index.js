import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/BookList';
import ChangeTitle from './components/ChangeTitle';
import DeletePeople from './components/DeletePeople';
import Home from './components/Home';
import Layout from './components/Layout';
import UseEffect from './components/UseEffect';
import FetchData from './components/FetchData';
import ConditionalRendering from './components/ConditionalRendering';
import UseReducer from './components/UseReducer/index';
import UseReducer2 from './components/useReducer2/index';
import PropDrilling from './components/PropDrilling';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// css
import './index.css';
import Counter from './components/Counter';
import PhoneBook from './components/PhoneBook';
import LargeForm from './components/LargeForm';
import UseRefUseCase from './components/UseRefUseCase';
import UseContext from './components/UseContext';
import CustomHooks from './components/CustomHooks';
import PropTypes from './components/PropTypes';
import PersonDetails from './components/Advanced React/PersonDetails';
import PassingParameters from './components/Advanced React/PassingParameters';

function Index() {
	return (
		<div>
			<Layout />
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/Mapping" element={<BookList />} />
					<Route exact path="/usestate" element={<ChangeTitle />} />
					<Route exact path="/usestate2" element={<DeletePeople />} />
					<Route exact path="/counter" element={<Counter />} />
					<Route exact path="/useeffect" element={<UseEffect />} />
					<Route exact path="/fetchdata" element={<FetchData />} />
					<Route exact path="/conditionalrending" element={<ConditionalRendering />} />
					<Route exact path="/phonebook" element={<PhoneBook />} />
					<Route exact path="/largeform" element={<LargeForm />} />
					<Route exact path="/useRefUseCase" element={<UseRefUseCase />} />
					<Route exact path="/useReducer" element={<UseReducer2 />} />
					<Route exact path="/propDrilling" element={<PropDrilling />} />
					<Route exact path="/useContext" element={<UseContext />} />
					<Route exact path="/customHooks" element={<CustomHooks />} />
					<Route exact path="/propTypes" element={<PropTypes />} />
					<Route exact path="dynamicRoute" element={<PassingParameters />} />
					<Route path="/person/:id" element={<PersonDetails />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<Index />
	</React.StrictMode>,
	document.getElementById('root')
);
