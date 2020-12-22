import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FadeIn from 'react-fade-in';

import { setRegion, getCountries } from '../../../actions';

import Placeholder from './Placeholder';

import Button from '../../shared/Button';
import Select from '../../shared/Select';

import REGIONS from './constants';

import './style.less';

class Settings extends React.Component {
	constructor(props) {
		super(props);

		this.onChooseRegion = this.onChooseRegion.bind(this);
		this.onLaunchGame = this.onLaunchGame.bind(this);
	}

	onChooseRegion({ target }) {
		this.props.setRegion(target.value);
	}

	onLaunchGame() {
		const { region } = this.props;

		this.props.getCountries(region);
	}

	render() {
		const { isMapLoaded, region } = this.props;

		if (!isMapLoaded) {
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
	isMapLoaded: PropTypes.bool.isRequired,
	getCountries: PropTypes.func.isRequired,
	setRegion: PropTypes.func.isRequired,
	region: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	isMapLoaded: state.isMapLoaded,
	region: state.region,
});

const mapDispatchToProps = (dispatch) => ({
	getCountries: (data) => dispatch(getCountries(data)),
	setRegion: (data) => dispatch(setRegion(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
