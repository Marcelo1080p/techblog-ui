import React from "react";
import "./Input.css";

const Input = (props) => {

  const atualizacao = (event) => {
    props.atualizandoValores(event.target.value)
  }


  return (
    <div className="Inputs">
      <label>{props.label}</label>
      <input
        onChange={atualizacao}
        required
        style={{ width: props.width }}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
      />
    </div>
  );
};

export default Input;
