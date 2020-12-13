import React from 'react';
import ReactDOM from 'react-dom';

import Map from './components/unique/Map';
import GameSettings from './components/unique/GameSettings';
import GameInterface from './components/unique/GameInterface';
import './style.less';

class App extends React.Component {
	static mapCountry(country) {
		return {
			name: country.name,
			capital: country.capital,
			code: country.alpha3Code,
		};
	}

	constructor(props) {
		super(props);

		this.onMapLoad = this.onMapLoad.bind(this);
		this.setCountries = this.setCountries.bind(this);

		this.state = {
			isMapLoading: true,
			isGameLaunched: false,
			countries: [],
		};
	}

	onMapLoad() {
		setTimeout(() => this.setState({ isMapLoading: false }), 1500);
	}

	setCountries(countries) {
		this.setState({
			isGameLaunched: true,
			countries: countries.map(App.mapCountry),
		});
	}

	render() {
		const { isMapLoading, isGameLaunched, countries } = this.state;

		return (
			<>
				<Map center={{ lat: 59.95, lng: 30.33 }} zoom={5} onLoad={this.onMapLoad} />
				{!isGameLaunched && (
					<GameSettings isLoading={isMapLoading} setCountries={this.setCountries} />
				)}
				{isGameLaunched && <GameInterface countries={countries} />}
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
