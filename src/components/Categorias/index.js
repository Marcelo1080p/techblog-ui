import React from "react";

const Categorias = (props) => {
    const categorias = [ 
        "Tecnologias",
        "Curiosidades",
        "Ciência",
    ]
    return (
        <div>
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