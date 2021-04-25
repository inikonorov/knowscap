import React from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';

import { setIsMapLoaded } from '../../../actions';

mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

class Map extends React.Component {
	constructor(props) {
		super(props);

		this.mapContainer = null;
	}

	componentDidMount() {
		const { center, zoom } = this.props;

		this.map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/light-v10',
			center,
			zoom,
			logoPosition: 'bottom-right',
		});

		this.map.on('load', () => {
			this.map.addLayer(
				{
					id: 'country-boundaries',
					source: {
						type: 'vector',
						url: 'mapbox://mapbox.country-boundaries-v1',
					},
					'source-layer': 'country_boundaries',
					type: 'fill',
					paint: {
						'fill-color': '#d2361e',
						'fill-opacity': 0.4,
					},
				},
				'country-label'
			);

			// TODO: хак используется для сброса дефолтного фильтра
			this.map.setFilter('country-boundaries', ['in', 'iso_3166_1_alpha_3']);

			this.map.addControl(
				new mapboxgl.NavigationControl({
					showCompass: false,
				})
			);

			this.props.setIsMapLoaded();
		});
	}

	componentDidUpdate(props) {
		const { currentCountry } = this.props;

		if (currentCountry.name !== props.currentCountry.name) {
			this.map.flyTo({
				center: currentCountry.latlng,
				zoom: 6,
			});

			this.map.setFilter('country-boundaries', [
				'in',
				'iso_3166_1_alpha_3',
				currentCountry.code,
			]);
		}
	}

	render() {
		return (
			<div>
				<div ref={(el) => (this.mapContainer = el)} className="map" />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentCountry: state.currentCountry,
});

const mapDispatchToProps = (dispatch) => ({
	setIsMapLoaded: () => dispatch(setIsMapLoaded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
