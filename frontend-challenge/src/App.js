import './App.css';
import { useState } from 'react';
import Results from './components/Results';
function App() {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ show, setShow ] = useState(false);
	const handleSearch = (e) => {
		e.preventDefault();
		setShow(true);
	};
	return (
		<div className="container">
			<h2>
				<a href="https://github.com/Rahulshamdasani/shopifyFrontendChallenge">Source Code</a>
			</h2>
			<h4>
				We are using the{' '}
				<a href="https://api.nasa.gov/#:~:text=of%20the%20Day-,APOD,-One%20of%20the">Apod API</a>
			</h4>
			<h4>User needs to enter the count of posts they need to fetch</h4>
			<h4>This can be customized for dates very easily but for now count is implemented</h4>
			<h4>
				Sharing for mail linkedin and facebook is activated which takes user to that social media and starts a
				new post
			</h4>
			<h4>
				Loading animation and like unlike animation is also enabled just load 10 or more posts to see loading
				animation
			</h4>
			<form className="form">
				<label>
					<input
						type="text"
						placeholder="Enter Count of Posts"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</label>
				<br />
				<button type="submit" onClick={handleSearch}>
					Search
				</button>
			</form>
			<div className="element">
				{show && (
					<h1>
						<Results searchTerm={searchTerm} />
					</h1>
				)}
			</div>
		</div>
	);
}

export default App;
