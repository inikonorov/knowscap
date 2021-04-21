import React from 'react';
import { connect } from 'react-redux';
import FadeIn from 'react-fade-in';
import classNames from 'classnames';

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

		return (
			<FadeIn>
				{!isMapLoaded && <Placeholder />}
				<div
					className={classNames('game', 'settings', {
						'visually-hidden': !isMapLoaded,
					})}
				>
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

const mapStateToProps = (state) => ({
	isMapLoaded: state.isMapLoaded,
	region: state.region,
});

const mapDispatchToProps = (dispatch) => ({
	getCountries: (data) => dispatch(getCountries(data)),
	setRegion: (data) => dispatch(setRegion(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
