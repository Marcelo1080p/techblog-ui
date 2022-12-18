import React from "react";
import "./Textarea.css";

const Textarea = (props) => {

    const atualizacao = (event) => {
        props.atualizandoValores(event.target.value)
    }
    return ( 
        <div className="textarea">
            <label>{props.label}</label>
            <textarea
                onChange={atualizacao}
                cols={props.colunas} rows={props.linhas}
                placeholder={props.placeholder}
            /> 
        </div>
    )
}

export default Textarea;