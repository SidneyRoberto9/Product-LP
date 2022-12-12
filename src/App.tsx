import 'aos/dist/aos.css';

import Aos from 'aos';
import React from 'react';

import { About, CtaSection, Features, Footer, Hero, Testimonials } from './components';

export const App = () => {
	Aos.init({
		duration: 1800,
		offset: 0,
	});

	return (
		<div className='overflow-hidden'>
			<Hero />
			<About />
			<Features />
			<Testimonials />
			<CtaSection />
			<Footer />
		</div>
	);
};
