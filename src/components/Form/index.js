import React from "react";
import "./Form.css"
import Categorias from "../Categorias";
import Input from "../Inputs";
import Textarea from "../Textarea";
import Button from "../Button";

const Form = () => {
  return (
    <form className="formulario">
      <h1 className="titulo">Criar Matéria</h1>
      <Input
        label="Título"
        placeholder="Digite o titulo"
        type="text"
      />
      <Input
        label="Subtítulo"
        placeholder="Digite o Subtitulo"
      />
      <Textarea label="Texto" colunas="30" linhas="10" placeholder="Digite o Conteudo da matéria aqui..." />
      <Categorias label="Categorias"/>
      <Button/>
    </form>
  );
};

export default Form;
