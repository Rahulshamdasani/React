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
			<form className="form">
				<label>
					<input
						type="text"
						placeholder="Search"
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
