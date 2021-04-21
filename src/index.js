import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import store from './store';

import Map from './components/unique/Map';
import GameSettings from './components/unique/GameSettings';
import GameInterface from './components/unique/GameInterface';

import './style.less';

const App = (props) => {
	const { isGameLaunched } = props;

	return (
		<>
			<Map center={[30.33, 59.95]} zoom={2} />
			{!isGameLaunched && <GameSettings />}
			{isGameLaunched && <GameInterface />}
		</>
	);
};

const mapStateToProps = (state) => ({
	isGameLaunched: state.isGameLaunched,
	countries: state.countries,
});

const ConnectedApp = connect(mapStateToProps, null)(App);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedApp />
	</Provider>,
	document.getElementById('app')
);
