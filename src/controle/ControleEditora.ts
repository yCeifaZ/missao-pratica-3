import Editora from "../modelo/Editora";

let editoras:Array<Editora> = [
    {
        codEditora: 1,
        nome: "Martin Claret",
    },
    {
        codEditora: 2,
        nome: "Intrínseca",
    },
    {
        codEditora: 3,
        nome: "Atlas",
    },
]

class ControleEditora {

    getNomeEditora(codEditora:number): string {
        const editorasResult = editoras.filter((editora: Editora) => editora.codEditora = codEditora);
        return editorasResult[0].nome
    }

    getEditoras(): Array<Editora> {
        return editoras
    }

}

export default ControleEditora