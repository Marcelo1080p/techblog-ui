import React from "react";
import "./InputPesquisa.css";

const InputPesquisa = (props) => {
  return (
    <div className="input-pesquisa">
      <input placeholder={props.placeholder} />
      <p className="lupa-pesquisa">
        <p className="circulo-pesquisa"></p>
      </p>
    </div>
  );
};

export default InputPesquisa;
