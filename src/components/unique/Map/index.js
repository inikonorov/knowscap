import React from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';

import { setIsMapLoaded } from '../../../actions';

mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

class Map extends React.Component {
	constructor(props) {
		super(props);

		this.map = null;
	}

	componentDidMount() {
		const { center, zoom } = this.props;

		const map = new mapboxgl.Map({
			container: this.map,
			style: 'mapbox://styles/mapbox/streets-v11',
			center,
			zoom,
		});

		map.on('idle', this.props.setIsMapLoaded);
	}

	render() {
		return (
			<div>
				<div ref={(el) => (this.map = el)} className="map" />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setIsMapLoaded: () => dispatch(setIsMapLoaded()),
});

export default connect(null, mapDispatchToProps)(Map);
