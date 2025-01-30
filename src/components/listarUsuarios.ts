import { db } from "../app";

// Listando usuários
export function listUser() {
    const query = `SELECT * FROM usuario`;

    // O método db.all é usado para consultas SQL que retornam múltiplas linhas (por exemplo, SELECT * FROM usuarios).
    db.all(query, [], (erro: Error, linha: any ) => { // (linhas) é um objeto que representa uma linha da tabela.
        if(erro) {
            console.log('Nenhum usuário encontrado.');
        } else if (linha) {
           console.log(linha);
        }
    })
}