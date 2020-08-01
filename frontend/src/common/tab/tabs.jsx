import React from 'react';

const tads = (props) => {
    return (
        <div className='nav-tabs-custom'>
            {props.children}
        </div>
    );
}

export default tads;