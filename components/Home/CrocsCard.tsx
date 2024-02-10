import React, { useState } from 'react';
import Image from "next/image";
import { WiHot } from "react-icons/wi";
import { IoPricetagOutline } from "react-icons/io5";
import { IoResizeOutline } from "react-icons/io5";

function CrocsCard(props:any) {
	const [crocs, setCrocs] = useState(props.crocs)
	return (
		<div className='text-center group p-2 sm:m-2 rounded-3xl border-[1px]
	 hover:border-orange-500 cursor-pointer duration-100'>
			<div className='text-center text-gray-500'>
				<WiHot className='w-full text-[22px] md-2'/>
				<h2 className='line-clamp-5 text-[34px] font-light'>{crocs.name}</h2>
			<div>
					<h2 className='line-clamp-1 text-[24px] font-light'>{crocs.model}</h2>
				</div>
			</div>
			<Image src={crocs.image?.url}
					alt={crocs.name}
					width={220}
					height={200}
					className='w-[250px] h-[150px] mb-3 object-contain' />
			<div className='flex justify-around group-hover:hidden'>
				<div className='text-center text-gray-500'>
				<IoPricetagOutline className='w-full text-[22px] md-2' />
				<h2 className='line-clamp-1 text-[14px] font-light'>{crocs.price} рублей</h2>
				</div>
				<div className='text-center text-gray-500'>
					<IoResizeOutline className='w-full text-[22px] md-2' />
					<h2 className='line-clamp-1 text-[14px] font-light'>{crocs.size}</h2>
				</div>
			</div>
			<button className='hidden group-hover:flex bg-gradient-to-r from-orange-400 to-orange-600
			p-2 rounded-lg text-white w-full px-5 justify-between'>Купить сейчас
			<span className='bg-orange-400 p-1 rounded-md'>
			<svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
					<g id="24-px-Icons" transform="translate(-171.000000, -26.000000)" stroke="#ffffff">
						<g id="ic_next" transform="translate(168.000000, 24.000000)">
							<g id="forward">
								<g transform="translate(4.000000, 3.000000)" stroke-width="2">
									<path d="M0,9 L16,9" id="Line"></path>
									<path d="M16,9 L7.93774223,0.937742233" id="Line"></path>
									<path d="M16,9 L7.93774223,17.0622578" id="Line"></path>
								</g>
							</g>
						</g>
					</g>
				</g>
			</svg>
			</span>
			</button>
		</div>
	);
}

export default CrocsCard;
