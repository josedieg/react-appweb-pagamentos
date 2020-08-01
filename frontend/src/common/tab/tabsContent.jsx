import React from 'react';

const tabsContent = (props) => {
    return (
        <div className='tab-content'>
            {props.children}
        </div>
    );
}

export default tabsContent;