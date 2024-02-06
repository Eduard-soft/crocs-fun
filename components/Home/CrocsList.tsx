import React from 'react';
import CrocsCard from './CrocsCard';

function CrocsList(props:any) {
	return (
		<div className='grid grid-cols-3 first-letter:md:grid-cols-2'>
       {props.crocsList.map((crocs: any, index: number) => (
				<div>
					<CrocsCard crocs = {crocs} />
				</div>
			 ))}
		</div>
	);
}

export default CrocsList;
