import React, { useState } from "react";
import "./Form.css"
import Categorias from "../Categorias";
import Input from "../Inputs";
import Textarea from "../Textarea";
import Button from "../Button";

const Form = (props) => {

  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [texto, setTexto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [id, setId] = useState(0)

  const salvar = (e) => {
    e.preventDefault();
    props.materiaCadastrada({
      titulo,
      subtitulo,
      texto,
      categoria,
      id
    })
    setId(id + 1)
  }
  
  return (
    <form onSubmit={salvar}
    className="formulario"
    >
      <h1 className="titulo">Criar Matéria</h1>
      <Input
        label="Título"
        placeholder="Digite o titulo"
        type="text"
        value={titulo}
        atualizandoValores={valor => setTitulo(valor)}
      />
      <Input
        label="Subtítulo"
        placeholder="Digite o Subtitulo"
        value={subtitulo}
        atualizandoValores={valor => setSubtitulo(valor)}
      />
      <Textarea label="Texto" 
        colunas="30" linhas="10" 
        placeholder="Digite o Conteudo da matéria aqui..." 
        value={texto}
        atualizandoValores={valor => setTexto(valor)}
      />
      <Categorias
        value={categoria}
        label="Categorias"
        atualizandoValores={valor => setCategoria(valor)}
      />
      <Button type="submit" nome="Postar"/>
    </form>
  );
};

export default Form;
