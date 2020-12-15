import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired,
};

export default Button;
