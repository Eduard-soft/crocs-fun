import React, { useState } from 'react';
import Image from "next/image";
import { WiHot } from "react-icons/wi";
import { IoPricetagOutline } from "react-icons/io5";
import { IoResizeOutline } from "react-icons/io5";

function CrocsCard(props:any) {
	const [crocs, setCrocs] = useState(props.crocs)
	return (
		<div className='text-center group p-2 sm:m-2 rounded-3xl border-[1px]
		hover:bg-gray-50 hover:border-orange-500 cursor-pointer duration-100'>
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
			<div className='flex'>
				<div className='text-center '>
				<IoPricetagOutline className='w-full text-[22px] md-2' />
				<h3 className='line-clamp-1 text-[14px] font-light'>{crocs.price} рублей</h3>
				</div>
				<div className='text-center'>
					<IoResizeOutline className='w-full text-[22px] md-2' />
					<h3 className='line-clamp-1 text-[14px] font-light'>{crocs.size}</h3>
				</div>

			</div>
		</div>
	);
}

export default CrocsCard;
