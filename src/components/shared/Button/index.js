import React from 'react';
import classNames from 'classnames';

import './style.less';

const Button = ({ className, children, onClick }) => {
	return (
		<button
			className={classNames('button', className)}
			type="button"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

Button.defaultProps = {
	className: '',
};

export default Button;
