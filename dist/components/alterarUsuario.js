"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterUser = alterUser;
const app_1 = require("../app");
const valida__o_1 = require("../utils/valida\u00E7\u00E3o");
function alterUser(id, nome, email, senha) {
    const validacao = valida__o_1.validUser.safeParse({ nome, email, senha });
    if (!validacao.success) {
        console.error('Erro na validação dos campos nome, email ou senha. ', validacao.error.format());
        return;
    }
    const query = `
        UPDATE usuario
        SET nome = ?, email = ?, senha = ?
        WHERE id = ?
    `;
    app_1.db.run(query, [nome, email, senha, id], function (erro) {
        if (erro) {
            console.log(`ERRO: ${erro} Não foi possível atualizar as informações do usuário com id ${id}`);
        }
        else if (this.changes === 0) {
            console.log(`Usuário com id ${id} não foi encontrado.`);
        }
        else {
            console.log(`Usuário com id ${id} atualizado com sucesso!`);
        }
    });
}
