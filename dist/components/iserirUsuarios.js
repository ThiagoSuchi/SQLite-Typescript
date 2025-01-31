"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers = createUsers;
const app_1 = require("../app");
const valida__o_1 = require("../utils/valida\u00E7\u00E3o");
// criando usuarios
function createUsers(nome, email, senha) {
    const validacao = valida__o_1.validUser.safeParse({ nome, email, senha });
    if (!validacao.success) {
        console.error('Erro de validação: ', validacao.error.format());
        return;
    }
    const query = `
        INSERT INTO 
        usuario (nome, email, senha)
        VALUES (?, ?, ?)
    `;
    //Callback: Recebe um erro (erro) se algo der errado. Se tudo correr bem, this.lastID contém o ID do último registro inserido.
    // Valores: ['João', 'joao@example.com'] (substituem os ? no SQL).
    app_1.db.run(query, [nome, email, senha], function (erro) {
        if (erro) {
            console.log(`Erro ao criar usuário: ${erro}`);
        }
        else {
            console.log(`Usuario de id ${this.lastID} cadastrado com sucesso.`);
        }
    });
}
