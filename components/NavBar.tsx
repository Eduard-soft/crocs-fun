import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const NavBar = () => {
	return (
		<div className='flex items-center justify-between p-5 shadow-sm border-box-[1px]'>
			<Image src="/logo.png"
			alt="logo"
			width={200}
			height={100}/>
			<div className='hidden md:flex gap-20'>
				<h2 className='hover:bg-orange-500 px-3 cursor-pointer p-2 
				rounded-full hover:text-white'>Главная</h2>
				<h2 className='hover:bg-orange-500 px-3 cursor-pointer p-2 
				rounded-full hover:text-white'>История</h2>
				<h2 className='hover:bg-orange-500 px-3 cursor-pointer p-2 
				rounded-full hover:text-white'>Контакты</h2>
			</div>
			<UserButton />
		</div>
	);
}

export default NavBar;
