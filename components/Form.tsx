import React, { useEffect, useState } from 'react';
import { getCrocsList } from '@/services'

const Form = () => {
	const [storeSize, setStoreSize] = useState<any>([]);
	useEffect(() => {
		getSize_();
	}, [])

	const getSize_ = async() => {
		const resp: any = await getCrocsList();
		console.log(resp)
		setStoreSize(resp?.crocsLists.size)
		console.log(setStoreSize)
	}
	return (
		<div className='flex flex-col gap-5 md-5'>

			<div className='flex flex-col w-full'>
				<label className='text-gray-400'>Выбрать размер</label>
				<select className="select select-bordered w-full max-w-xs">
				<option disabled selected>Какой размер?</option>
				{storeSize && storeSize.map((size: string, index: number) => (
					<option key={index}>{size}</option>
				))}
				
				</select>
			</div>
			<div className='flex flex-col w-full'>
				<label className='text-gray-400'>Выбрать дату</label>
				<input type="date" placeholder="Type here"
				className="input input-bordered w-full max-w-lg"/>
			</div>
		</div>
	);
}

export default Form;
function size(size: any): React.ReactNode {
	throw new Error('Function not implemented.');
}

