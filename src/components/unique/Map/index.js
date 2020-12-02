import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import './style.less';

const SimpleMap = ({ center, zoom }) => (
	<div className="google-map">
		<GoogleMapReact
			bootstrapURLKeys={{ key: process.env.GMAPS_API_KEY }}
			defaultCenter={center}
			defaultZoom={zoom}
		/>
	</div>
);

SimpleMap.propTypes = {
	center: PropTypes.shape({}).isRequired,
	zoom: PropTypes.number.isRequired,
};

export default SimpleMap;
