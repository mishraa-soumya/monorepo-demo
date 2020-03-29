import * as React from "react";

const Button = (props) => {
    const type = props.btnType ? props.btnType : 'button';
    return (
        <button type={type} >
            {props.children}
        </button>
    );
}

export default Button;
