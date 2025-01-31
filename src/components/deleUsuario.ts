import { db } from "../app"

export function deletUser(id: number) {
    const query = `
        DELETE FROM usuario
        WHERE id = ?
    `

    db.run(query, [id], (erro: Error) => {
        if(erro) {
            console.log(`Usuário com id ${id}, não encontrado.`);
        } else {
            console.log(`Usuário com id ${id}, deletado com sucesso!`);
        }
    })
}