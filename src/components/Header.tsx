import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

import { Nav, NavMobile } from '.';
import logo from '../assets/img/logo.png';

export const Header = () => {
	const [NavMob, setNavMob] = useState<boolean>(false);

	return (
		<header
			className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'
			data-aos='fade-down'
			data-aos-delay='1200'
			data-aos-duration='1000'>
			<div className='container mx-auto'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-x-[120px]'>
						<a href='#'>
							<img src={logo} alt='' />
						</a>

						<div className='hidden lg:flex'>
							<Nav />
						</div>
					</div>

					<div
						className={`${
							NavMob ? 'max-h-52' : 'max-h-0'
						} lg:hidden absolute top-24 bg-accent-tertiary w-full lef-0 right-0 font-bold rounded transition-all overflow-hidden`}>
						<NavMobile />
					</div>

					<button className='btn btn-quaternary flex items-center gao-x-[20px] group'>
						Request Demo
						<BsArrowRight className='ml-2 text-2xl text-accent-primary group-hover:text-white transition' />
					</button>

					<div
						onClick={() => setNavMob(!NavMob)}
						className='lg:hidden text-2xl text-primary cursor-pointer'>
						<FaBars />
					</div>
				</div>
			</div>
		</header>
	);
};
