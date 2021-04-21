import React from 'react';
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

export default Input;
