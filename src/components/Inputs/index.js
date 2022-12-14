import React from "react";
import './Input.css'

const Input = (props) => {
    <div>
        <label>{props}</label>
        <input
            style={{width: props.width}}
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
        />
    </div>
}

export default Input;