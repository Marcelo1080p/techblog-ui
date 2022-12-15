import React from "react";
import "./Textarea.css";

const Textarea = (props) => {
    return ( 
        <div className="textarea">
            <label>{props.label}</label>
            <textarea 
                cols={props.colunas} rows={props.linhas}
                placeholder={props.placeholder}
            /> 
        </div>
    )
}

export default Textarea;