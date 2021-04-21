import React from 'react';
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

export default Select;
