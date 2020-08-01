import React from 'react';

const tabsHeader = (props) => {
    return (
        <ul className='nav nav-tabs'>
            {props.children}
        </ul>
    );
}

export default tabsHeader;