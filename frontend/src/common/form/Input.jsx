import React from 'react'

const Input = (props) => {
    return (
        <input type={props.type} {...props.input}
            className='form-control'
            placeholder={props.placeholder}
            readOnly={props.readOnly}
        />
    );
}

export default Input;