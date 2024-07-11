import React from 'react';
import CrocsCard from '../Home/CrocsCard';
import Form from '../Form';

const OrderModal = ({crocs}: any) => {
	return (
		<form method="dialog" className='modal-box w-11/12 max-w-5xl'>
			<div className='border-b-[1px] pb-2'>
				<h3 className='text-[30px] font-light text-gray-400'>
					Купить сейчас</h3>
			</div>
			<div className='grid grid-flow-cols-1 md:grid-cols-2'>
				<div>
					<CrocsCard crocs={crocs}/>
				</div>
				<div>
					<Form />
				</div>
			</div>
			<div className='modal-action'>
				<button className='btn'>Закрыть</button>
			</div>
		</form>

	);
}

export default OrderModal;
