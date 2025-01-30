import { db } from "../app";

// criando usuarios
export function createUsers(nome: string, email: string, senha: string) {
    const query = `
        INSERT INTO 
        usuario (nome, email, senha)
        VALUES (?, ?, ?)
    `;

    db.run(query, [nome, email, senha], (erro: Error) => {
        if (erro) {
            console.log(`Erro ao criar usuário: ${erro}`);
        } else {
            console.log(`Usuario cadastrado com sucesso.`);
        }
    })
}