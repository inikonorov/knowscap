import React from 'react';

import ContentLoader from 'react-content-loader';

export default () => (
	<ContentLoader
		className="settings"
		speed={2}
		viewBox="0 0 287 100"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="0" rx="3" ry="3" width="106" height="18" />
		<rect x="0" y="24" rx="3" ry="3" width="287" height="19" />
		<rect x="0" y="59" rx="3" ry="3" width="287" height="41" />
	</ContentLoader>
);
