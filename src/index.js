import React from 'react';
import ReactDOM from 'react-dom';

import SimpleMap from './components/unique/Map';
import './style.less';

ReactDOM.render(
	<SimpleMap center={{ lat: 59.95, lng: 30.33 }} zoom={11} />,
	document.getElementById('app')
);
