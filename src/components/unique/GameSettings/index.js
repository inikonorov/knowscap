import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';

import REGIONS from './constants';

import './style.less';

import Placeholder from './Placeholder';
import fetch from '../../../helpers/fetch';

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
				<div className="settings">
					<label className="settings__region-select">
						Choose region
						<select value={region} onChange={this.onChooseRegion}>
							{REGIONS.map((REGION) => (
								<option key={REGION} value={REGION}>
									{REGION}
								</option>
							))}
						</select>
					</label>
					<button
						className="settings__start-button"
						type="button"
						onClick={this.onLaunchGame}
					>
						Let&#39;s go!
					</button>
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
