import React from 'react';
import CleanData from './cleanData';

const ShowPrice = (props) => {
    return(
        <div>
             <input 
                type="number"
                className="usd-price-input" 
                value={props.usdValueInput} 
                onChange={e=>{props.setterValue(e.target.value)}} 
                placeholder="Enter USD price..." 
            />
        </div>
    );
}

export default ShowPrice;