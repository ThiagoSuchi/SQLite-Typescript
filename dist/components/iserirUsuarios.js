"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers = createUsers;
const app_1 = require("../app");
// criando usuarios
function createUsers(nome, email, senha) {
    const query = `
        INSERT INTO 
        usuario (nome, email, senha)
        VALUES (?, ?, ?)
    `;
    app_1.db.run(query, [nome, email, senha], (erro) => {
        if (erro) {
            console.log(`Erro ao criar usuário: ${erro}`);
        }
        else {
            console.log(`Usuario cadastrado com sucesso.`);
        }
    });
}
