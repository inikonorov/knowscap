import React from 'react';
import ContentLoader from 'react-content-loader';

// TODO: не очень нравится подгадывать высоту плейсхолдера,
// может как-то ее вычислить можно
export default () => (
	<ContentLoader
		className="game"
		speed={2}
		viewBox="0 0 287 121"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="0" rx="3" ry="3" width="106" height="18" />
		<rect x="0" y="24" rx="3" ry="3" width="287" height="40" />
		<rect x="0" y="80" rx="3" ry="3" width="287" height="41" />
	</ContentLoader>
);
