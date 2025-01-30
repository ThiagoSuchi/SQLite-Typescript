import { db } from "../app";

// Criando a tabela
export function createTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS usuario (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT,
            senha TEXT
        )
    `

    db.run(query, (erro: Error) => {
        if (erro) {
            console.log(`Erro ao criar a tabela: ${erro.message}`);
        } else {
            console.log('Tabela criada com sucesso!');
        }
    })
}