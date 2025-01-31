"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sqlite3 = require('sqlite3').verbose();
// Conectando com o BD
exports.db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    else {
        console.log('Conectado ao Banco de dados SQLite');
    }
});
// createTable()
// createUsers('Luciana', 'luciana@gmail.com', 'Luciaana@22')
// alterUser(7, 'Maria Clara', 'mariazinha@gmail.com', 'mamariAA2345#')
// listUser()
// listUserID(7)
// deletUser(6)
// dropTableUser()
