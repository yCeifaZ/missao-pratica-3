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
    <tr>
      <td class="col-sm-2">
        {props.livro.titulo}
        <button className="btn btn-danger" onClick={props.excluir}>Excluir</button>
      </td>
      <td class="col-sm-5">{props.livro.resumo}</td>
      <td class="col-sm-2">{nomeEditora}</td>
      <td class="col-sm-3">
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
        <thead bgcolor="#1111">
          <th scope="col-sm-2">Título</th>
          <th scope="col-sm-5">Resumo</th>
          <th scope="col-sm-2">Editora</th>
          <th scope="col-sm-3">Autores</th>
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
