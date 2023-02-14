import React from 'react';

const Input = ({type, id, className, text, placeholder}) => {
    return (
        <div>
            <label className={className} htmlFor={id}>
                {text}
            </label>
            <br />
             <input type={type} id={id} className={className} placeholder={placeholder}/>    
        </div>
    );
};

export default Input;