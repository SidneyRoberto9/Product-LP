import '../styles/slider.css';
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { testimonialsData } from '../utils/hero.data';

export const TestimonialSlide = () => {
	return (
		<Swiper
			slidesPerView={'auto'}
			centeredSlides={true}
			spaceBetween={20}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className='mySwiper'>
			{testimonialsData.map((slide, index) => {
				const { image, message, name, web, delay } = slide;

				return (
					<SwiperSlide
						key={index}
						className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'>
						<img src={image} alt='' />
						<div>
							<div className='text-lg text-primary font-bold'>{name}</div>
							<div className='mb-4 font-semibold text-accent-primary'>
								{web}
							</div>
							<p className='max-w-[240px]'>{message}</p>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
