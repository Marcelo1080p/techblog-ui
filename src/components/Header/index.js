import React from "react";
import InputPesquisa from "../InputPesquisa";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <h2>Logo</h2>
        <InputPesquisa placeholder="Pesquisar..." />
      </div>
    </header>
  );
};

export default Header;
