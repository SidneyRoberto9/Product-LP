import React from 'react';

import { navigationData } from '../utils/hero.data';

export const NavMobile = () => {
	return (
		<ul className='flex flex-col px-6 py-8'>
			{navigationData.map((item, index) => (
				<li key={index}>
					<a href={item.href} className='text-white hover:text-black'>
						{item.name}
					</a>
				</li>
			))}
		</ul>
	);
};
