import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<div className='grid grid-col-1 md:grid-cols-2'>
			<div>
				<h2 className='text-[40px} md:text-[60px] font-bolt'> <span className='text-orange-500'>Premium</span> Crocs Rental <br></br> in Your Area</h2>
				<h2 className='text-[20px] text-gray-500'>Book the selected crocs effortlessly, Pay for driving only, <br></br>Book the Car New</h2>
				<button className='p-2 mt-5 bg-orange-500 px-4 rounded-full hover:scale-105 text-white
				transition-all'>Explore Crocs</button>
			</div>
			<div>
				<Image src="/hero.png"
				alt='hero'
				width={500}
				height={400}
				className='w-full h-full object-cover rounded-full'
				/>
			</div>
		</div>
	);
}

export default Hero;
