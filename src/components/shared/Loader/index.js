import React from 'react';
import classnames from 'classnames';

import './style.less';

export default ({ className }) => (
	<div className={classnames('loader', className)} />
);
