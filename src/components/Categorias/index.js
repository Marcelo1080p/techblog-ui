import React from "react";
import "./Categorias.css"

const Categorias = (props) => {
    const categorias = [ 
        "Tecnologias",
        "Curiosidades",
        "Ciência",
    ]

    const atualizacao = (event) => {
        props.atualizandoValores(event.target.value)
    }
    return (
        <div className="categorias">
            <label>{props.label}</label>
            <select onChange={atualizacao}>
                {categorias.map((categoria) => (
                    <option key={categoria}>{categoria}</option>
                ))}
            </select>
        </div>
    )
}

export default Categorias;