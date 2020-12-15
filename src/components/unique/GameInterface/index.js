import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../shared/Button';
import Input from '../../shared/Input';

import getRandomInt from '../../../helpers/getRandomInt';

import './style.less';

class GameInterface extends React.Component {
	constructor(props) {
		super(props);

		this.onChangeCapital = this.onChangeCapital.bind(this);
		this.onConfirmCapital = this.onConfirmCapital.bind(this);
		this.onCalculateNextCountry = this.onCalculateNextCountry.bind(this);

		this.state = {
			enteredCapital: '',
			isEnteredCapitalCorrect: false,
			completedCountries: [],
			currentCountry: {},
		};
	}

	componentDidMount() {
		this.onCalculateNextCountry();
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

	onCalculateNextCountry() {
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
			<div className="game interface">
				{!isEnteredCapitalCorrect && (
					<>
						<Input
							className="interface__input"
							label={currentCountry.name}
							value={enteredCapital}
							placeholder="Capital is..."
							onChange={this.onChangeCapital}
						/>
						<Button onClick={this.onConfirmCapital}>Check</Button>
					</>
				)}
				{isEnteredCapitalCorrect && (
					<>
						<span>Capital is correct!</span>
						<Button onClick={this.onCalculateNextCountry}>Continue</Button>
					</>
				)}
			</div>
		);
	}
}

GameInterface.propTypes = {
	countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default GameInterface;
