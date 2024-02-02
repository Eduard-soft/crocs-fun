import React from 'react';

const CrocsFiltersOption = () => {
	return (
		<div className='mt-10 flex items-center justify-between'>
			<div>
				<h2
					className='text-[30px] font-bold'>
						Каталог кроксов
				</h2>
				<h2>Смотрите модели по вашим предпочтениям</h2>
			</div>
			<div className='flex gap-5'>
				<select className="select select-bordered w-full max-w-xs">
 					<option disabled selected>По модели</option>
 					<option>Мужские</option>
 					<option>Женские</option>
					<option>Детские</option>
				</select>
				<select className="select select-bordered w-full md:block max-w-xs hidden">
 					<option disabled selected>По цене</option>
 					<option>Дороже</option>
 					<option>Дешевле</option>
				</select>
			</div>
		</div>
	);
}

export default CrocsFiltersOption;
