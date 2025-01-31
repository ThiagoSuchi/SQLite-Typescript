import { alterUser } from "./components/alterarUsuario";
import { createTable } from "./components/criarTabela";
import { dropTableUser } from "./components/deletarTabela";
import { deletUser } from "./components/deleUsuario";
import { createUsers } from "./components/iserirUsuarios";
import { listUserID } from "./components/listarPorId";
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
// createUsers('Luciana', 'luciana@gmail.com', 'Luciaana@22')
// alterUser(7, 'Maria Clara', 'mariazinha@gmail.com', 'mamariAA2345#')
// listUser()
// listUserID(7)
// deletUser(6)
// dropTableUser()