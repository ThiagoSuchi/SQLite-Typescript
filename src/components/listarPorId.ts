import { db } from "../app"

export function listUserID(id: number) {
    const query = `
        SELECT nome, email, senha
        FROM usuario
        WHERE id = ?
    `
    db.all(query, [id], (erro: Error, linha: any) => {
        if (erro) {
            console.log(`Usuário com o id ${id} não encontrado.`);
        } else {
            console.log(linha);
        }
    })
}