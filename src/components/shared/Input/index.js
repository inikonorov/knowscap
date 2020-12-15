import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.less';

const Input = ({ className, label, type, value, placeholder, onChange }) => (
	<label className={classNames('input', className)}>
		{label}
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			spellCheck={false}
			onChange={onChange}
		/>
	</label>
);

Input.defaultProps = {
	className: '',
	type: 'text',
	label: '',
};

Input.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Input;
