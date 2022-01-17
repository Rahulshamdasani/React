import './App.css';
import { connect } from 'react-redux';
import ItemList from './components/ItemList';
function App({ props }) {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			{console.log('App props:', props)}
			<ItemList items={props.posts} />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		props: state
	};
}

export default connect(mapStateToProps)(App);
