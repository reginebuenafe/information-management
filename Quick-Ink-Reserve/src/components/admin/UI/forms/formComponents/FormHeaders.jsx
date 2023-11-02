import React from 'react';

const FormHeader = ({ color, text }) => {
    return (
        <h1 className={`font-mono ${color ? `text-${color}` : 'text-gray-700'}`}>{text}</h1>
    );
};

export default FormHeader;
