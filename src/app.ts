import { createTable } from "./components/criarTabela";
import { dropTableUser } from "./components/deletarTabela";
import { createUsers } from "./components/iserirUsuarios";
import { listUser } from "./components/listarUsuarios";

const sqlite3 = require('sqlite3').verbose();

// Conectando com o BD
export const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err: Error) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Conectado ao Banco de dados SQLite');
        
    }
})

// createTable()
// createUsers('Thiago', 'thiagaoo@gmail.com', 'thiagoHS3322@')
// listUser()
// dropTableUser()