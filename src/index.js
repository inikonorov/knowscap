import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';

import store from './store';

import Map from './components/unique/Map';
import GameSettings from './components/unique/GameSettings';
import GameInterface from './components/unique/GameInterface';

import './style.less';

const App = (props) => {
	const { isGameLaunched } = props;

	return (
		<>
			<Map center={{ lat: 59.95, lng: 30.33 }} zoom={5} />
			{!isGameLaunched && <GameSettings />}
			{isGameLaunched && <GameInterface />}
		</>
	);
};

const mapStateToProps = (state) => ({
	isGameLaunched: state.isGameLaunched,
	countries: state.countries,
});

App.propTypes = {
	isGameLaunched: PropTypes.bool.isRequired,
};

const ConnectedApp = connect(mapStateToProps, null)(App);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedApp />
	</Provider>,
	document.getElementById('app')
);
