import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.less';

const Select = ({ className = '', label, value, onChange, options }) => (
	<label className={classNames('select', className)}>
		{label}
		<select value={value} onChange={onChange}>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	</label>
);

Select.propTypes = {
	className: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
