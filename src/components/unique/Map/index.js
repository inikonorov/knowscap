import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const Map = (props) => {
	const { center, zoom } = props;

	return (
		<GoogleMapReact
			bootstrapURLKeys={{ key: process.env.GMAPS_API_KEY }}
			defaultCenter={center}
			defaultZoom={zoom}
			onTilesLoaded={props.onLoad}
		/>
	);
};

Map.propTypes = {
	center: PropTypes.shape({}).isRequired,
	zoom: PropTypes.number.isRequired,
	onLoad: PropTypes.func.isRequired,
};

export default Map;
