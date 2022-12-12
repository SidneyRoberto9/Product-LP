import 'aos/dist/aos.css';

import Aos from 'aos';
import React from 'react';

import { Hero } from './components';

export const App = () => {
	Aos.init({
		duration: 1800,
		offset: 0,
	});

	return (
		<div className='overflow-hidden'>
			<Hero />
		</div>
	);
};
