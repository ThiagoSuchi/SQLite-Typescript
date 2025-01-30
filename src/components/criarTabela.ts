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
    // O método db.run é usado para executar comandos SQL que não retornam dados, como CREATE TABLE, INSERT, UPDATE e DELETE.
    db.run(query, (erro: Error) => {
        if (erro) {
            console.log(`Erro ao criar a tabela: ${erro.message}`);
        } else {
            console.log('Tabela criada com sucesso!');
        }
    })
}