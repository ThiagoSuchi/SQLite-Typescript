"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletUser = deletUser;
const app_1 = require("../app");
function deletUser(id) {
    const query = `
        DELETE FROM usuario
        WHERE id = ?
    `;
    app_1.db.run(query, [id], (erro) => {
        if (erro) {
            console.log(`Usuário com id ${id}, não encontrado.`);
        }
        else {
            console.log(`Usuário com id ${id}, deletado com sucesso!`);
        }
    });
}
