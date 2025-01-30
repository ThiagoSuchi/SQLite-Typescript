"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUser = listUser;
const app_1 = require("../app");
// Listando usuários
function listUser() {
    const query = `SELECT * FROM usuario`;
    app_1.db.all(query, [], (erro, linha) => {
        if (erro) {
            console.log('Nenhum usuário encontrado.');
        }
        else if (linha) {
            console.log(linha);
        }
    });
}
