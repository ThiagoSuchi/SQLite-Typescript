import { db } from "../app";

// Listando usuários
export function listUser() {
    const query = `SELECT * FROM usuario`;

    db.all(query, [], (erro: Error, linha: any ) => {
        if(erro) {
            console.log('Nenhum usuário encontrado.');
        } else if (linha) {
           console.log(linha);
        }
    })
}