import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { setRegion, getCountries } from '../../../actions';

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
		const { isMapLoaded, region, areCountriesLoading } = this.props;

		return (
			<div
				className={classNames('game', 'settings', {
					invisible: !isMapLoaded,
				})}
			>
				<Select
					className="settings__select"
					label="Choose region"
					value={region}
					options={REGIONS}
					onChange={this.onChooseRegion}
				/>
				<Button isLoading={areCountriesLoading} onClick={this.onLaunchGame}>
					Let&#39;s go!
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isMapLoaded: state.isMapLoaded,
	region: state.region,
	areCountriesLoading: state.areCountriesLoading,
});

const mapDispatchToProps = (dispatch) => ({
	getCountries: (data) => dispatch(getCountries(data)),
	setRegion: (data) => dispatch(setRegion(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
