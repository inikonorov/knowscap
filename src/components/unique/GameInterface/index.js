import React from 'react';
import { connect } from 'react-redux';

import {
	addCompletedCountryCode,
	getNextCountry,
	setEnteredCapital,
	setIsEnteredCapitalCorrect,
} from '../../../actions';

import Button from '../../shared/Button';
import Input from '../../shared/Input';

import getRandomInt from '../../../helpers/getRandomInt';

import './style.less';

class GameInterface extends React.Component {
	static filterCountry(completedCountriesCode) {
		return ({ code }) => !completedCountriesCode.includes(code);
	}

	constructor(props) {
		super(props);

		this.onChangeCapital = this.onChangeCapital.bind(this);
		this.onConfirmCapital = this.onConfirmCapital.bind(this);
		this.onGetNextCountry = this.onGetNextCountry.bind(this);
	}

	componentDidMount() {
		this.onGetNextCountry();
	}

	onChangeCapital({ target }) {
		this.props.setEnteredCapital(target.value);
	}

	onConfirmCapital() {
		const { enteredCapital, currentCountry } = this.props;

		if (enteredCapital === currentCountry.capital) {
			this.props.setIsEnteredCapitalCorrect(true);
			this.props.addCompletedCountryCode(currentCountry.code);
		}
	}

	onGetNextCountry() {
		this.props.setIsEnteredCapitalCorrect(false);
		this.props.setEnteredCapital();
		this.props.getNextCountry(this.getRandomCountry());
	}

	getRandomCountry() {
		const { countries, completedCountriesCode } = this.props;

		const remainingCountries = countries.filter(
			GameInterface.filterCountry(completedCountriesCode)
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
		} = this.props;

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
						<span className="interface__success-text">Capital is correct!</span>
						<Button onClick={this.onGetNextCountry}>Continue</Button>
					</>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	enteredCapital: state.enteredCapital,
	isEnteredCapitalCorrect: state.isEnteredCapitalCorrect,
	currentCountry: state.currentCountry,
	countries: state.countries,
	completedCountriesCode: state.completedCountriesCode,
});

const mapDispatchToProps = (dispatch) => ({
	getNextCountry: (data) => dispatch(getNextCountry(data)),
	setEnteredCapital: (data) => dispatch(setEnteredCapital(data)),
	setIsEnteredCapitalCorrect: (data) =>
		dispatch(setIsEnteredCapitalCorrect(data)),
	addCompletedCountryCode: (data) => dispatch(addCompletedCountryCode(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameInterface);
