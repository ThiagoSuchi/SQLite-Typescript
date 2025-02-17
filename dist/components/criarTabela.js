"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = createTable;
const app_1 = require("../app");
// Criando a tabela
function createTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS usuario (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT,
            senha TEXT
        )
    `;
    // O método db.run é usado para executar comandos SQL que não retornam dados, como CREATE TABLE, INSERT, UPDATE e DELETE.
    app_1.db.run(query, (erro) => {
        if (erro) {
            console.log(`Erro ao criar a tabela: ${erro.message}`);
        }
        else {
            console.log('Tabela criada com sucesso!');
        }
    });
}
