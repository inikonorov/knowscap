import React from 'react';
import ReactDOM from 'react-dom';

import SimpleMap from './components/unique/Map';
import Settings from './components/unique/Settings';
import './style.less';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.onMapLoad = this.onMapLoad.bind(this);

		this.state = {
			isMapLoading: true,
		};
	}

	onMapLoad() {
		setTimeout(() => this.setState({ isMapLoading: false }), 1500);
	}

	render() {
		const { isMapLoading } = this.state;

		return (
			<>
				<SimpleMap
					center={{ lat: 59.95, lng: 30.33 }}
					zoom={11}
					onLoad={this.onMapLoad}
				/>
				<Settings isLoading={isMapLoading} />
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
