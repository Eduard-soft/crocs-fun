import React, { useState, useEffect} from 'react';
import OrderModal from '../CrocsOrder/OrderModal';
import CrocsCard from './CrocsCard';
import CrocsCardSkeleton from './CrocsCardSkeleton';

function CrocsList(props:any) {
	const [isLoaded, setIsLoaded] = useState(true);
	const [selectedCrocs, setSelectedCrocs] = useState<any>([]);
	useEffect(() => {
		if (props.crocsList)
		{
			setIsLoaded(false)
		}
	}, [props.crocsList])
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
       {!isLoaded && props.crocsList.map((crocs: any, index: number) => (
				<div key={index} 
				onClick={()=>{(document.getElementById as any)('my_modal_4').showModal()
				setSelectedCrocs(crocs)}}>
					<CrocsCard crocs = {crocs} />
				</div>
			 ))}
			 {isLoaded?
			 [1, 2, 3, 4, 5].map((item) => (
				<CrocsCardSkeleton />
			 ))
			:null}
			 {/* You can open the modal using document.getElementById('ID').showModal() method */}

				<dialog id="my_modal_4" className="modal">
					<OrderModal crocs = {selectedCrocs}/>
				</dialog>
		</div>
	);
}

export default CrocsList;
