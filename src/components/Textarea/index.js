import React from "react";
import "./Textarea.css";

const Textarea = (props) => {
    return ( 
        <div>
            <label>{props.label}</label>
            <textarea cols={props.colunas} rows={props.linhas}/> 
        </div>
    )
}

export default Textarea;