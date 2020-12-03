import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const SimpleMap = ({ center, zoom }) => (
	<GoogleMapReact
		bootstrapURLKeys={{ key: process.env.GMAPS_API_KEY }}
		defaultCenter={center}
		defaultZoom={zoom}
	/>
);

SimpleMap.propTypes = {
	center: PropTypes.shape({}).isRequired,
	zoom: PropTypes.number.isRequired,
};

export default SimpleMap;
