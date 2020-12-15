import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';

import Placeholder from './Placeholder';

import Button from '../../shared/Button';
import Select from '../../shared/Select';

import REGIONS from './constants';

import fetch from '../../../helpers/fetch';

import './style.less';

class Settings extends React.Component {
	constructor(props) {
		super(props);

		this.onChooseRegion = this.onChooseRegion.bind(this);
		this.onLaunchGame = this.onLaunchGame.bind(this);

		this.state = {
			region: REGIONS[0],
		};
	}

	onChooseRegion({ target }) {
		this.setState({ region: target.value });
	}

	onLaunchGame() {
		const { region } = this.state;

		fetch({ url: `https://restcountries.eu/rest/v2/region/${region}` })
			.then(this.props.setCountries)
			.catch(() => {});
	}

	render() {
		const { isLoading } = this.props;
		const { region } = this.state;

		if (isLoading) {
			return <Placeholder />;
		}

		return (
			<FadeIn>
				<div className="game settings">
					<Select
						className="settings__select"
						label="Choose region"
						value={region}
						options={REGIONS}
						onChange={this.onChooseRegion}
					/>
					<Button onClick={this.onLaunchGame}>Let&#39;s go!</Button>
				</div>
			</FadeIn>
		);
	}
}

Settings.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	setCountries: PropTypes.func.isRequired,
};

export default Settings;
