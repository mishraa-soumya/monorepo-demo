import React from "react";

const TextBox = ({
    placeholder,
    type
}) => {
    const inputType = type ? type : "text";
    const placeHolder = placeholder ? placeholder : '';
    return (
        <input type={inputType} placeholder={ placeHolder } />
    )
}

export default TextBox;
