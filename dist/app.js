"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const listarUsuarios_1 = require("./components/listarUsuarios");
const sqlite3 = require('sqlite3').verbose();
// Conectando com o BD
exports.db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err)
        return console.error(err.message);
});
// createTable()
// createUsers('Lari', 'larissa@gmail.com', 'larilari12333')
(0, listarUsuarios_1.listUser)();
// dropTableUser()
