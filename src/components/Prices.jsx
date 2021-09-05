import React from 'react';

const Prices = (props) => {
    return(
        <div className="output-container">
            <div className="rial-price-output">Price: <strong>{props.rialValue}</strong> <small> rial</small></div>
            <div className="usd-price-output">USD: <strong>{props.usdValue}</strong> <small> USD</small></div>
        </div>
    );
}

export default Prices;