import React from 'react';


const Button = ({className, text, callBack}) => {
   
    return (
        <button  className={className} onClick={callBack}>
            {text}
        </button>
    );
};

export default Button;