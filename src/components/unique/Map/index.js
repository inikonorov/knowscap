import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

import { setIsMapLoaded } from '../../../actions';

const Map = (props) => {
	const { center, zoom } = props;

	return (
		<GoogleMapReact
			bootstrapURLKeys={{ key: process.env.GMAPS_API_KEY }}
			defaultCenter={center}
			defaultZoom={zoom}
			onTilesLoaded={props.setIsMapLoaded}
		/>
	);
};

Map.propTypes = {
	center: PropTypes.shape({}).isRequired,
	zoom: PropTypes.number.isRequired,
	setIsMapLoaded: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	setIsMapLoaded: () => dispatch(setIsMapLoaded()),
});

export default connect(null, mapDispatchToProps)(Map);
