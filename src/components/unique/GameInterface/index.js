import React from 'react';
import PropTypes from 'prop-types';

import { getRandomInt } from '../../../helpers';

class GameInterface extends React.Component {
	constructor(props) {
		super(props);

		this.onChangeCapital = this.onChangeCapital.bind(this);
		this.onConfirmCapital = this.onConfirmCapital.bind(this);
		this.onGetNextCountry = this.onGetNextCountry.bind(this);

		this.state = {
			enteredCapital: '',
			isEnteredCapitalCorrect: false,
			completedCountries: [],
			currentCountry: {},
		};
	}

	componentDidMount() {
		this.onGetNextCountry();
	}

	onChangeCapital({ target }) {
		this.setState({ enteredCapital: target.value });
	}

	onConfirmCapital() {
		const { enteredCapital, currentCountry, completedCountries } = this.state;

		if (enteredCapital === currentCountry.capital) {
			this.setState({
				isEnteredCapitalCorrect: true,
				currentCountry: {},
				completedCountries: [...completedCountries, currentCountry.code],
			});
		}
	}

	onGetNextCountry() {
		this.setState({
			isEnteredCapitalCorrect: false,
			enteredCapital: '',
			currentCountry: this.getRandomCountry(),
		});
	}

	getRandomCountry() {
		const { countries } = this.props;

		const { completedCountries } = this.state;

		const remainingCountries = countries.filter(
			(country) => !completedCountries.includes(country.code)
		);

		const countryIndex = getRandomInt({
			min: 0,
			max: remainingCountries.length,
		});

		return countries[countryIndex];
	}

	render() {
		const {
			enteredCapital,
			isEnteredCapitalCorrect,
			currentCountry,
		} = this.state;

		return (
			<div className="settings">
				<span>{currentCountry.name}</span>
				<input type="text" value={enteredCapital} onChange={this.onChangeCapital} />
				<button type="button" onClick={this.onConfirmCapital}>
					Check
				</button>
				{isEnteredCapitalCorrect && (
					<>
						<span>Capital is correct!</span>
						<button type="button" onClick={this.onGetNextCountry}>
							Next
						</button>
					</>
				)}
			</div>
		);
	}
}

GameInterface.propTypes = {
	countries: PropTypes.shape([]).isRequired,
};

export default GameInterface;
