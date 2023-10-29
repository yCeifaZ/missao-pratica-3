import Livro from "../modelo/Livro";

let livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 101,
        titulo: "Aventuras na Floresta",
        resumo: "Um emocionante conto sobre a vida na floresta",
        autores: ["João Silva", "Maria Souza"]
    },
    {
        codigo: 2,
        codEditora: 102,
        titulo: "Mistérios na Cidade",
        resumo: "Uma história cheia de mistérios urbanos",
        autores: ["Carlos Santos", "Ana Oliveira"]
    },
    {
        codigo: 3,
        codEditora: 103,
        titulo: "Viagem ao Desconhecido",
        resumo: "Uma jornada épica rumo ao desconhecido",
        autores: ["Fernanda Pereira", "Rafael Lima"]
    },
];

class ControleLivro {

    obterLivros(): Array<Livro> {
        return livros
    }

    incluir(livroParaAdicionar: Livro): void {
        let maiorCodigo = livros.reduce((maior: number, objeto: Livro) => (objeto.codigo > maior ? objeto.codigo : maior), livros[0]?.codigo ?? 0);

        maiorCodigo++;

        livroParaAdicionar.codigo = maiorCodigo

        livros.push(livroParaAdicionar)
    }

    excluir(codigoDoLivroParaExcluir: number): void {
        const index = livros.findIndex(livro => livro.codigo === codigoDoLivroParaExcluir);

        if (index !== -1) {
            livros.splice(index, 1);
        }
    }

}

export default ControleLivro