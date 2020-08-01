import React from 'react';

const menuItem = (props) => {
    return (
        <li>
            <a href={props.path}>
                <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
            </a>
        </li>
    );
}

export default menuItem;