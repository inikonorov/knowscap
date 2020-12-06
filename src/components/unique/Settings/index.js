import React from 'react';
import PropTypes from 'prop-types';

import REGIONS from './constants';

import './style.less';

class Settings extends React.Component {
	constructor(props) {
		super(props);

		this.onChooseRegion = this.onChooseRegion.bind(this);

		this.state = {
			region: '',
		};
	}

	onChooseRegion({ target }) {
		this.setState({ region: target.value });
	}

	render() {
		const { isLoading } = this.props;
		const { region } = this.state;

		if (isLoading) {
			return null;
		}

		return (
			<div className="settings">
				<label>
					Choose region
					<select value={region} onChange={this.onChooseRegion}>
						{REGIONS.map((REGION) => (
							<option key={REGION} value={REGION}>
								{REGION}
							</option>
						))}
					</select>
				</label>
				<button type="button">Let&#39;s go!</button>
			</div>
		);
	}
}

Settings.propTypes = {
	isLoading: PropTypes.bool.isRequired,
};

export default Settings;
