import React from 'react';
import classNames from 'classnames';

import Loader from '../Loader';

import './style.less';

const Button = ({ className, children, onClick, isLoading }) => {
	return (
		<button
			className={classNames('button', className)}
			type="button"
			onClick={onClick}
		>
			{isLoading ? <Loader /> : children}
		</button>
	);
};

Button.defaultProps = {
	className: '',
};

export default Button;
