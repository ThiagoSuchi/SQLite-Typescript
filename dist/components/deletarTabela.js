"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropTableUser = dropTableUser;
const app_1 = require("../app");
// Apagando a tabela
function dropTableUser() {
    const query = `DROP TABLE usuario`;
    app_1.db.run(query);
}
