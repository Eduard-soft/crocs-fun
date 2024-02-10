import React from 'react';
import CrocsCard from './CrocsCard';

function CrocsList(props:any) {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
       {props.crocsList.map((crocs: any, index: number) => (
				<div>
					<CrocsCard crocs = {crocs} />
				</div>
			 ))}
		</div>
	);
}

export default CrocsList;
