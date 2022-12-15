import React from "react";
import Categorias from "../Categorias";
import Input from "../Inputs";
import Textarea from "../Textarea";

const Form = () => {
  return (
    <form>
      <Input
        label="Título"
        placeholder="digite o titulo"
        type="text"
      />
      <Input
        label="Subtítulo"
      />
      <Textarea label="Texto" colunas="30" linhas="10" />
      <Categorias label="Categoria da matéria"/>
    </form>
  );
};

export default Form;
