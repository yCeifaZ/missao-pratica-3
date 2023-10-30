import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros";
import React, { useState, useEffect } from 'react';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

function LinhaLivro(props) {
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);
  const autoresHtml = props.livro.autores.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <tr class="">
      <td class="col-2">
        {props.livro.titulo}
        <br></br>
        <button className="btn btn-danger" onClick={props.excluir}>Excluir</button>
      </td>
      <td class="col-6">{props.livro.resumo}</td>
      <td class="col-2">{nomeEditora}</td>
      <td class="col-2">
        <ul>{autoresHtml}</ul>
      </td>
    </tr>
  );
}

function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const livrosDoControlador = controleLivro.obterLivros();
    setLivros(livrosDoControlador);
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigoDoLivro) => {
    console.log(codigoDoLivro)
    controleLivro.excluir(codigoDoLivro);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <table class="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro
              key={index}
              livro={livro}
              excluir={() => excluir(livro.codigo)}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;
