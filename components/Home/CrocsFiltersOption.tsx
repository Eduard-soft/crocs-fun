import React, { useEffect, useState } from 'react';

function CrocsFiltersOption({crocsList, setModel, setPrise, setSize}:any) {

	const [modelList, setModelList]=useState<any>();
	const [priceList, setPriceList] = useState<any>();
	const [sizeList, setSizeList] = useState<any>();
	const ModelSet=new Set()
	const PriceSet= new Set()
	const SizeSet= new Set()
	
	useEffect(() => {
		if(crocsList) {
			filterCrocsList();
		}
	}, [crocsList])

	const filterCrocsList = () => {
		crocsList.forEach((element:any) => {
			ModelSet.add(element.model);
			PriceSet.add(element.price);
			SizeSet.add(element.size);
		});
		console.log(ModelSet)
		console.log(PriceSet)
		console.log(SizeSet)
		setModelList(Array.from(ModelSet))
		setPriceList(Array.from(PriceSet))
		setSizeList(Array.from(SizeSet))
	}
	return (
		<div className='mt-10 flex items-center justify-between'>
			<div>
				<h2
					className='text-[30px] font-bold'>
						Каталог кроксов
				</h2>
				<h2>Смотрите модели по вашим предпочтениям</h2>
			</div>

			<div className='flex gap-3'>
				<select className="select select-bordered w-full max-w-xs"
					onChange = {(e) => setModel(e.target.value)}>
 					<option disabled selected>модель</option>
					{modelList && modelList.map((model: string, index: number)=> (
						<option key={index}>{model}</option>
					))}
				</select>

				<select className="select select-bordered w-full md:block max-w-xs"
				onChange = {(e) => setPrise(e.target.value)}>
 					<option disabled selected>цена</option>
					 {priceList && priceList.map((prise: string, index: number)=> (
						<option key={index}>{prise}</option>
					))}
				</select>

				<select className="select select-bordered w-full md:block max-w-xs"
				onChange = {(e) => setSize(e.target.value)}>
 					<option disabled selected>размер</option>
					 {sizeList && sizeList.map((size: string, index: number)=> (
						<option key={index}>{size}</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default CrocsFiltersOption;
