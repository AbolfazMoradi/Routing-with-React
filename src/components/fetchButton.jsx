import React from 'react';

const FetchButton = (props) => {
    return(
        <div>
            <button className="btn-convert" onClick={props.fetchPrice}>Convert</button>
        </div>
    );
}

export default FetchButton;