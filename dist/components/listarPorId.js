"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUserID = listUserID;
const app_1 = require("../app");
function listUserID(id) {
    const query = `
        SELECT nome, email, senha
        FROM usuario
        WHERE id = ?
    `;
    app_1.db.all(query, [id], (erro, linha) => {
        if (erro) {
            console.log(`Usuário com o id ${id} não encontrado.`);
        }
        else {
            console.log(linha);
        }
    });
}
