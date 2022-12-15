import React from "react";
import "./Categorias.css"

const Categorias = (props) => {
    const categorias = [ 
        "Tecnologias",
        "Curiosidades",
        "Ciência",
    ]
    return (
        <div className="categorias">
            <label>{props.label}</label>
            <select>
                {categorias.map((catergoria) => (
                    <option>{catergoria}</option>
                ))}
            </select>
        </div>
    )
}

export default Categorias;