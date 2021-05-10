import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import store from './store';

import Map from './components/unique/Map';
import GameSettings from './components/unique/GameSettings';
import GameInterface from './components/unique/GameInterface';
import Loader from './components/shared/Loader';

import './style.less';

const App = (props) => {
	const { isGameLaunched, isMapLoaded } = props;

	return (
		<>
			{!isMapLoaded && <Loader className="loader--page" />}
			<Map center={[28.35896, 44.276305]} zoom={1.13} />
			{!isGameLaunched && <GameSettings />}
			{isGameLaunched && <GameInterface />}
		</>
	);
};

const mapStateToProps = (state) => ({
	isMapLoaded: state.isMapLoaded,
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
