import React from 'react';

import { navigationData } from '../utils/hero.data';

export const Nav = () => {
	return (
		<ul className='flex gap-x-8'>
			{navigationData.map((item, index) => (
				<li key={index}>
					<a href={item.href}>{item.name}</a>
				</li>
			))}
		</ul>
	);
};
